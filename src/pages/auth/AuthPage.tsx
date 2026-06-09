import { useState } from 'react'
import './AuthPage.css'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'

type AuthMode = 'login' | 'signup'

export function AuthPage() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')

  return (
    <main className="auth-page">
      <section className="auth-content" aria-labelledby="auth-title">
        <div className="auth-text">
          <h1 id="auth-title">질문은 쉽게, 해결은 빠르게</h1>
        </div>

        {authMode === 'login' ? (
          <LoginForm onSignupClick={() => setAuthMode('signup')} />
        ) : (
          <SignupForm onLoginClick={() => setAuthMode('login')} />
        )}
      </section>
    </main>
  )
}
