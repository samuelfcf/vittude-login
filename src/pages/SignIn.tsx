import * as S from '../styles/signIn';
import Theme from '../styles/theme';
import LoginType from '../components/LoginType';
import loginTypesData from '../utils/loginTypesData';
import { useState } from 'react';

const SignIn = () => {

  const [loginType, setLoginType] = useState<string>('Paciente');
  const [disable, setDisable] = useState<boolean>(true)

  const selectLoginType = (type: string) => {
    setLoginType(type);
  }

  const submit = () => {
    return alert('Submit')
  }

  return (
    <>
      <S.Title color={Theme.primaryBlack}>Faça seu login</S.Title>

      <S.Container backgroundColor={Theme.backgroundGray}>
        <S.Form onSubmit={submit} id='signIn'>
          <S.SelectLoginTypeContainar>
            {loginTypesData.map((type, index) => (
              <LoginType
                key={index}
                selectedIcon={type.selectedIcon}
                notSelectedIcon={type.notSelectedIcon}
                isSelected={type.loginType === loginType}
                loginType={type.loginType}
                selectLoginType={selectLoginType}
              />
            ))}
          </S.SelectLoginTypeContainar>

          <S.InputsDiv>
            <S.FormSection>
              <S.Label color={Theme.primaryOrange} htmlFor={loginType === 'Paciente' ? 'email' : 'text'}>
                {loginType === 'Paciente' ? 'Email*' : 'CPF/CNPJ*'}
              </S.Label>
              <S.Input
                placeholderColor={Theme.placeholdersGray}
                required
                type={loginType === 'Paciente' ? 'email' : 'text'}
                placeholder={loginType === 'Paciente' ? 'Digite seu email' : '999.999.999-99'}
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
          disabled={disable}
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