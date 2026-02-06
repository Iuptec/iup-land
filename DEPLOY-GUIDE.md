# 🚀 GUIA DE DEPLOY - IUPTEC V3.2 COM IA REAL

## ✅ O QUE FOI ADICIONADO:

1. **API Serverless** (`/api/chat.js`) - Integração OpenAI
2. **ChatWidget com IA Real** - Atendimento inteligente
3. **Navegação funcional** - Smooth scroll
4. **Configuração Vercel** - Pronta para deploy

---

## 📋 PASSO A PASSO COMPLETO:

### **1. CONFIGURAR API KEY LOCALMENTE (Desenvolvimento)**

```bash
# Criar arquivo .env.local na raiz do projeto
cp .env.example .env.local

# Editar .env.local e adicionar sua chave:
OPENAI_API_KEY=sk-proj-sua-chave-aqui
```

⚠️ **IMPORTANTE:** Nunca commite o arquivo `.env.local` no Git!

---

### **2. TESTAR LOCALMENTE**

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Abrir http://localhost:5173
# Testar o chat - deve responder com IA real!
```

**Teste o chat:**
1. Clicar no botão laranja (chat)
2. Digitar "Olá"
3. Aguardar resposta da IA
4. Se responder = funcionando! ✅

---

### **3. CONFIGURAR NA VERCEL**

#### **3.1. Adicionar Environment Variable:**

1. Acesse seu projeto na Vercel
2. Vá em **Settings** > **Environment Variables**
3. Adicione:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** `sk-proj-sua-chave-aqui`
   - **Environment:** Production, Preview, Development (selecionar todos)
4. Clique em **Save**

#### **3.2. Deploy:**

**Opção A - Deploy via Git (Recomendado):**
```bash
git add .
git commit -m "feat: add AI chat integration"
git push origin main
```
A Vercel vai fazer deploy automaticamente! 🎉

**Opção B - Deploy via CLI:**
```bash
# Instalar Vercel CLI (se não tiver)
npm install -g vercel

# Deploy
vercel --prod
```

---

### **4. VERIFICAR SE FUNCIONOU**

Depois do deploy:

1. **Acesse seu site** (iuptec.vercel.app ou seu domínio)
2. **Teste a navegação:**
   - [ ] Clicar em "Soluções" → deve rolar suave
   - [ ] Clicar em "Portfolio" → deve rolar suave
   - [ ] Clicar em "Contato" → deve rolar suave
3. **Teste o chat:**
   - [ ] Botão laranja aparece
   - [ ] Clicar abre o chat
   - [ ] Digitar mensagem
   - [ ] Receber resposta da IA
4. **Teste o formulário:**
   - [ ] Preencher campos
   - [ ] Enviar (vai dar alert por enquanto)

---

## 🎯 PRÓXIMAS MELHORIAS:

### **Fase 1 - Email no Formulário:**
Integrar com:
- [ ] Resend API (recomendado)
- [ ] SendGrid
- [ ] Gmail API

### **Fase 2 - Analytics:**
- [ ] Google Analytics
- [ ] Vercel Analytics (grátis)
- [ ] Plausible (privacy-first)

### **Fase 3 - Otimizações:**
- [ ] Rate limiting no chat
- [ ] Cache de conversas
- [ ] Logs estruturados
- [ ] Monitoramento de custos OpenAI

---

## 💰 CUSTOS ESTIMADOS:

### **OpenAI API (gpt-4o-mini):**
- Input: $0.150 / 1M tokens
- Output: $0.600 / 1M tokens

**Estimativa por conversa:**
- ~500 tokens entrada + saída
- Custo: ~$0.0004 (menos de meio centavo!)
- 1000 conversas = ~$0.40

**Muito acessível!** 💰

### **Vercel:**
- Plan Hobby: **Grátis**
- 100GB bandwidth/mês
- Unlimited sites
- Serverless functions incluídas

---

## 🔧 TROUBLESHOOTING:

### **Chat não responde:**
1. Verificar se OPENAI_API_KEY está configurada na Vercel
2. Olhar logs da função: `vercel logs` ou Dashboard > Functions
3. Testar endpoint direto: `curl -X POST https://seu-site.vercel.app/api/chat`

### **Erro 500 no chat:**
- Chave API inválida ou expirada
- Quota OpenAI excedida
- Verificar logs na Vercel

### **Links não funcionam:**
- Verificar IDs das seções no código
- Console do navegador (F12) para erros

---

## 📊 MONITORAMENTO:

### **OpenAI Usage:**
1. Acesse https://platform.openai.com/usage
2. Monitore custo diário
3. Configure alertas de limite

### **Vercel Analytics:**
1. Ativar em Settings > Analytics
2. Ver métricas de uso
3. Monitorar function calls

---

## 🎨 CUSTOMIZAÇÕES:

### **Personalizar IA:**
Editar `api/chat.js` - linha do `system` prompt:
```javascript
content: `Você é o assistente virtual da Iuptec...`
```

### **Ajustar modelo:**
- `gpt-4o-mini` → rápido e barato ⭐
- `gpt-4o` → mais inteligente, mais caro
- `gpt-3.5-turbo` → barato mas menos capaz

### **Limitar tokens:**
```javascript
max_tokens: 500 // Ajustar conforme necessário
```

---

## 🆘 SUPORTE:

**Problemas com deploy?**
- Email: comercial@iuptec.com.br
- WhatsApp: (31) 98468-3944

**Erros na Vercel?**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

**Dúvidas OpenAI?**
- OpenAI Docs: https://platform.openai.com/docs
- OpenAI Help: https://help.openai.com

---

## ✅ CHECKLIST FINAL:

Antes de ir para produção:

- [ ] OPENAI_API_KEY configurada na Vercel
- [ ] Chat testado e funcionando
- [ ] Links de navegação funcionando
- [ ] Site responsivo no mobile
- [ ] Logo ciano aparecendo
- [ ] Todas as seções visíveis
- [ ] Formulário validando campos
- [ ] Footer com links corretos
- [ ] Google Analytics (opcional)
- [ ] Domínio customizado (opcional)

---

**PRONTO! SEU SITE ESTÁ COM IA REAL! 🚀**

Qualquer dúvida, estou à disposição! 💪
