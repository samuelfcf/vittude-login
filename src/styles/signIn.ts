import styled from 'styled-components';
import { 
  ContainerProps, 
  InputProps, 
  ButtonProps
} from '../types/signIn'

export const Title = styled.h1`
  color: ${props => props.color};
  margin-top: 3rem;
  margin-bottom: 36px;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 39.688rem;
  background-color: ${props => props.backgroundColor};
`

export const Form = styled.form`
  margin-top: 2.25rem;
  width: 39.688rem;
  height: 23.125rem;
  font-size: 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const SelectLoginTypeContainar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const FormSection = styled.div`
  width: calc(100vw - 95rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  text-align: left;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  padding: 0.95rem 1.3rem;
`

export const Label = styled.label`
  color: ${props => props.color};
  font-size: 0.875rem;
`

export const Input = styled.input<InputProps>`
  border-color: inherit;
  border-style: none;
  font-weight: 100;
  font-size: 20px;
  outline: none;
  padding: 0;

  &::placeholder {
    color: ${props => props.placeholderColor}

  }
`

export const LinkPassword = styled.span`
  text-decoration: underline;
  color: ${props => props.color};
  text-align: right;

  &:hover {
    cursor: pointer
  }
`

export const Button = styled.button<ButtonProps>`
  width: 39.688rem;
  height: 3.625rem;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 auto;
  border: none;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  &:hover {
    cursor: pointer;
  }
`

export const CreateAccountText = styled.span`
  display: block;
  text-align: center;
  margin: 1.313rem auto 0 auto;
  font-size: 1.2rem;

  a {
    text-decoration: underline;
    color: ${props => props.color};
    font-weight: 600;
  }
`