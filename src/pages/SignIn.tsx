import patientGray from '../assets/paciente-cinza.svg';
import patientOrange from '../assets/paciente-terracota.svg';
import psicoGray from '../assets/psico-cinza.svg';
import psicoOrange from '../assets/psico-orange.svg';

import * as S from '../styles/signIn';
import Theme from '../styles/theme';
import LoginType from '../components/LoginType';

const SignIn = () => {
  const loginTypes = [
    {
      isSelected: false,
      loginType: 'Psicólogo',
      selectedIcon: psicoOrange,
      notSelectedIcon: psicoGray
    },
    {
      isSelected: true,
      loginType: 'Paciente',
      selectedIcon: patientOrange,
      notSelectedIcon: patientGray
    }
  ]

  const submit = () => {
    return alert('Submit')
  }

  return (
    <>
      <S.Title color={Theme.primaryBlack}>Faça seu login</S.Title>

      <S.Container backgroundColor={Theme.backgroundGray}>
        <S.Form onSubmit={submit} id='signIn'>
          <S.SelectLoginTypeContainar>
            {loginTypes.map((type, index) => (
              <LoginType
                key={index}
                imgSrc={type.isSelected ? type.selectedIcon : type.notSelectedIcon}
                isSelected={type.isSelected}
                loginType={type.loginType}
              />
            ))}
          </S.SelectLoginTypeContainar>

          <S.InputsDiv>
            <S.FormSection>
              <S.Label color={Theme.primaryOrange} htmlFor="email">Email*</S.Label>
              <S.Input
                placeholderColor={Theme.placeholdersGray}
                required
                type="email"
                placeholder='Digite seu email'
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

            <S.LinkPassword color={Theme.forgottenPassBlue}>
              esqueci minha senha!
            </S.LinkPassword>
          </S.InputsDiv>

        </S.Form>

        <S.Button
          type="submit"
          form="signIn"
          color={Theme.primaryWhite}
          backgroundColor={Theme.primaryOrange}
          disabled={true}
        >
          Entrar
        </S.Button>
      </S.Container>

      <S.CreateAccountText color={Theme.primaryOrange}>
        Não é cadastrado? <a href='#'>Crie uma conta</a>
      </S.CreateAccountText>
    </>
  )
}

export default SignIn;