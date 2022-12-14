import styled from 'styled-components';
import Theme from '../styles/theme';
import img from '../assets/logo-vittude.svg';
import { BsChevronDown } from 'react-icons/bs'
import { ContainerProps, ContentProps } from '../types/header'

const Header = () => {
  return (
    <Container backgroundColor={Theme.primaryWhite}>
      <img src={img} alt="Logo da Vittude" />

      <Content textColor={Theme.primaryBlack} helloVisitantTextColor={Theme.primaryOrange}>
        <span>Como funciona</span>
        <span>Para você</span>
        <span>Para psicólogos</span>
        <span>Para empresas</span>
        <span>Blog</span>

        <Divider />

        <div>
          <span id="hello-visitant">Olá, visitante!</span>
          <BsChevronDown color={Theme.primaryOrange} />
        </div>
      </Content>
    </Container >
  )
}

const Container = styled.div<ContainerProps>`
  height: 5.438rem;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10.313rem;

  img {
    width: 8.75rem;
  }

  img:hover {
    cursor: pointer;
  }

  @media (max-width: 85.625rem) {
    justify-content: space-between;
  }
`

const Content = styled.div<ContentProps>`
  display: flex;
  gap: 2rem;

  span {
    color: ${props => props.textColor};
    font-size: 1rem;
  }

  span:hover {
    cursor: pointer;
    color: ${props => props.helloVisitantTextColor};
  }

  div {
    display: flex;
    gap: 1.125rem;

    #hello-visitant {
      color: ${props => props.helloVisitantTextColor};
      font-weight: 600;
    }
  }

  div:hover {
    cursor: pointer;
  }

  @media (max-width: 85.625rem) {
    width: 100%;
    justify-content: flex-end;
  }
`

const Divider = styled.div`
  transform: rotate(-90deg);
  border-bottom: 0.125rem solid #f3f3f3;
  width: 2rem;

  
`

export default Header;