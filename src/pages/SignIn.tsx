import { useEffect, useState } from 'react';
import * as S from '../styles/signIn';
import Theme from '../styles/theme';

import LoginType from '../components/LoginType';
import loginTypesData from '../utils/loginTypesData';

import { InputDataProps } from '../types/signIn';
import { AxiosError, AxiosResponse } from 'axios';

import useApi from '../hooks/useApi';
import Modal from '../utils/Modal';
import addOrRemoveLocalStorageData from '../utils/handleLocalStorage';

const SignIn = () => {

  const [loginType, setLoginType] = useState<string>('Paciente');
  const [disable, setDisable] = useState<boolean>(false);
  const [inputData, setInputData] = useState<InputDataProps>({
    identifier: '',
    password: ''
  });

  const api = useApi();

  useEffect(() => {
    setInputData({
      identifier: '',
      password: ''
    })
  }, [loginType]);

  const selectLoginType = (type: string) => {
    setLoginType(type);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisable(true);

    if (loginType === 'Psicólogo') {
      const body = {
        document: inputData.identifier,
        password: inputData.password
      }

      api.auth.psicoSignIn(body)
        .then((res: AxiosResponse) => {
          console.log('Deu certo!', res.data)
        })
        .catch((err: AxiosError) => {
          console.log('Error', err.response)
        });

      setDisable(false);
      return;
    }

    const body = {
      email: inputData.identifier,
      password: inputData.password
    }

    api.auth.patientSignIn(body)
      .then(async (res: AxiosResponse) => {
        addOrRemoveLocalStorageData(res.data);
        return await Modal.success();
      })
      .catch(async (err: AxiosError) => {
        console.log(err.response);
        return await Modal.error();
      })

    setDisable(false);
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
                name='identifier'
                value={inputData.identifier}
                onChange={handleChange}
                placeholderColor={Theme.placeholdersGray}
                required
                type={loginType === 'Paciente' ? 'email' : 'text'}
                maxLength={loginType === 'Paciente' ? 100 : 11}
                placeholder={loginType === 'Paciente' ? 'Digite seu email' : '999.999.999-99'}
              />
            </S.FormSection>
            <S.FormSection>
              <S.Label color={Theme.primaryOrange} htmlFor="password">Senha*</S.Label>
              <S.Input
                name='password'
                value={inputData.password}
                onChange={handleChange}
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