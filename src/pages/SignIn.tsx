import * as S from '../styles/SignIn';
import Theme from '../styles/theme';

const SignIn = () => {

  const submit = () => {
    return alert('Submit')
  }

  return (
    <>
      <S.Title color={Theme.primaryBlack}>Faça seu login</S.Title>

      <S.Container backgroundColor={Theme.backgroundGray}>
        <S.Form onSubmit={submit} id="signIn">
          <S.SelectLoginTypeContainar>
            <div>Psicólogo</div>
            <div>Paciente</div>
          </S.SelectLoginTypeContainar>

          <S.InputsDiv>
            <S.FormSection>
              <S.Label color={Theme.primaryOrange} htmlFor="email">Email*</S.Label>
              <S.Input
                placeholderColor={Theme.placeholdersGray}
                required
                type="email"
                placeholder='Digite seu email'
                autoFocus
              />
            </S.FormSection>
            <S.FormSection>
              <S.Label color={Theme.primaryOrange} htmlFor="password">Senha*</S.Label>
              <S.Input
                placeholderColor={Theme.placeholdersGray}
                required
                type="password"
                placeholder='Digite sua senha'
              />
            </S.FormSection>
          </S.InputsDiv>

          <span>
            Não é cadastrado? <a href="#" target="_blank">Crie uma conta</a>
          </span>
        </S.Form>

        <S.Button type="submit" form="signIn">Entrar</S.Button>
      </S.Container>
    </>
  )
}

export default SignIn;