import styled from 'styled-components';
import { ContainerProps, InputProps } from '../types/signIn'

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
  background-color: yellow;
  justify-content: center;
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

export const Button = styled.button`
  width: 635px;
  margin: 0 auto;
`