import * as S from '../styles/SignIn'

const SignIn = () => {

  const submit = () => {
    return alert('Submit')
  }

  return (
    <S.Container>
      <S.Title>Faça seu login</S.Title>

      <S.Form onSubmit={submit} id="signIn">
        <div>
          <div>Psicólogo</div>
          <div>Paciente</div>
        </div>

        <div>
          <input
            required
            type="email"
            autoFocus
          />
          <input
            required
            type="password"
          />
        </div>
      </S.Form>

      <S.Button type="submit" form="signIn">Entrar</S.Button>

      <span>
        Não é cadastrado? <a href="#" target="_blank">Crie uma conta</a>
      </span>
    </S.Container>
  )
}

export default SignIn;