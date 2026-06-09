import { Button } from '../../components/ui/Button'

type SignupFormProps = {
  onLoginClick: () => void
}

export function SignupForm({ onLoginClick }: SignupFormProps) {
  return (
    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
      <label className="auth-field">
        <span>아이디</span>
        <input name="userId" type="text" autoComplete="username" />
      </label>

      <label className="auth-field">
        <span>비밀번호</span>
        <input name="password" type="password" autoComplete="new-password" />
      </label>

      <label className="auth-field">
        <span>비밀번호 확인</span>
        <input
          name="passwordConfirm"
          type="password"
          autoComplete="new-password"
        />
      </label>

      <div className="auth-actions">
        <Button type="submit">회원가입</Button>
        <Button type="button" variant="secondary" onClick={onLoginClick}>
          로그인으로 돌아가기
        </Button>
      </div>
    </form>
  )
}
