// Vercel Serverless Function - Chat com OpenAI
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only POST allowed
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Mais barato e rápido
        messages: [
          {
            role: 'system',
            content: `Você é o assistente virtual da Iuptec, uma empresa com 30+ anos de experiência empreendedora que agora oferece soluções de IA.

INFORMAÇÕES DA IUPTEC:
- Fundadores com 30+ anos criando empresas
- Desde 2019 em tecnologia e software
- Produtos: BEM (marketplace contábil), Iupcont (ERP), IUPSign (assinatura digital - EXIT), IUPCare (gestão clínica)
- Agora focados em IA acessível para PMEs

SOLUÇÕES OFERECIDAS:
1. Desenvolvimento Custom de IA (agentes, APIs OpenAI/Claude, Make/n8n, Python)
2. Automações Prontas - Plug & Play (atendimento 24/7, qualificação leads, suporte, gestão financeira)
3. Academia Iuptec IA - Curso do zero ao avançado sem programar (R$ 997)

DIFERENCIAIS:
- 30+ anos de experiência real empreendedora
- Tecnologia acessível (preços justos)
- Atendimento regional (Triângulo Mineiro e RM BH)
- Abordagem No-Code First

CONTATO:
- Email: comercial@iuptec.com.br
- WhatsApp: (31) 98468-3944
- Endereço: Av. Anselmo Alves dos Santos, 1111, Uberlândia/MG

INSTRUÇÕES:
- Seja cordial, direto e prestativo
- Foque em como a IA pode resolver problemas reais do negócio
- Ofereça diagnóstico gratuito quando apropriado
- Mencione cases de sucesso (automação de 80% do atendimento, 40% mais produtividade)
- Use emojis moderadamente (1-2 por mensagem)
- Mantenha respostas concisas (2-4 parágrafos no máximo)`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      return res.status(response.status).json({ 
        error: 'Erro ao processar sua mensagem. Tente novamente.' 
      });
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return res.status(200).json({ 
      message: assistantMessage,
      usage: data.usage // Para monitorar custos
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Erro interno. Por favor, tente novamente.' 
    });
  }
}
