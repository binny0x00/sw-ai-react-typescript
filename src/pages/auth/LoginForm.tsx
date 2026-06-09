import { Button } from '../../components/ui/Button'

type LoginFormProps = {
  onSignupClick: () => void
}

export function LoginForm({ onSignupClick }: LoginFormProps) {
  return (
    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
      <label className="auth-field">
        <span>아이디</span>
        <input name="userId" type="text" autoComplete="username" />
      </label>

      <label className="auth-field">
        <span>비밀번호</span>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
        />
      </label>

      <div className="auth-actions">
        <Button type="submit">로그인</Button>
        <Button type="button" variant="secondary" onClick={onSignupClick}>
          회원가입
        </Button>
      </div>
    </form>
  )
}
