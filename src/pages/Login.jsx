// src/pages/Login.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../integrations/supabase/client'
import { toast } from 'sonner'

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      })
      if (error) throw error
    } catch (error) {
      toast.error('Erro ao conectar com Google')
    }
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (error) throw error

      toast.success('Login realizado!')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error.message || 'Email ou senha incorretos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-iuptec-orange to-yellow-400 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <span className="text-2xl font-black text-white">
                Iuptec<span className="text-iuptec-teal">.AI</span>
              </span>
            </div>
          </Link>
          <p className="text-slate-400 mt-4">Entre na sua conta</p>
        </div>

        {/* Card */}
        <div className="bg-dark-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          {/* Google SSO */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white hover:bg-gray-50 text-dark-950 py-4 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar com Google
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-dark-900 px-4 text-slate-500">ou com email</span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-dark-800/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-iuptec-orange transition"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Senha</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                className="w-full bg-dark-800/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-iuptec-orange transition"
                placeholder="Sua senha"
              />
              <div className="text-right mt-2">
                <Link to="/reset-password" className="text-xs text-iuptec-teal hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-iuptec-orange to-yellow-400 text-dark-950 py-4 rounded-2xl font-bold text-sm hover:shadow-lg transition disabled:opacity-50"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Não tem uma conta?{' '}
          <Link to="/signup" className="text-iuptec-teal font-bold hover:underline">
            Criar conta grátis
          </Link>
        </p>
      </div>
    </div>
  )
}
