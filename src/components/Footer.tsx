import styled from 'styled-components';
import alert from '../assets/alerta.svg';
import Theme from '../styles/theme';
import { FooterProps, AlertProps } from '../types/footer';

const Footer = () => {
  return (
    <Container
      color={Theme.primaryWhite}
      backgroundColor={Theme.backgroundFooter}
    >
      <ResponsableInfo>
        <span>Responsável Técnico</span>
        <p>Fabio Camilo da Silva</p>
        <p>CRP (06/84133)</p>
      </ResponsableInfo>

      <Alert onHoverColor={Theme.primaryOrange}>
        <img src={alert} />
        <p>
          Atenção: Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para <span>188 (CVV)</span> ou acesse o site <span>www.cvv.org.br</span>. Em caso de emergência, procure atendimento em um hospital mais próximo.
        </p>
      </Alert>
    </Container>
  )
}

const Container = styled.footer<FooterProps>`
  color: ${props => props.color};
  position: absolute;
  bottom: 0;
  background-color: ${props => props.backgroundColor};
  height: 11.625rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;

  @media (max-width: 85.625rem) {
    max-height: 6.875rem;
    position: static;
    margin-top: 1.25rem;
  }
`

const ResponsableInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-weight: bold;
    font-size: 0.75rem;
  }
  
  p {
    font-size: 1.125rem;
  }
`

const Alert = styled.div<AlertProps>`
  display: flex;
  gap: 1.313rem;

  p {
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
    word-break: keep-all;
    display: block;
    width: 39.938rem;

    span {
      font-weight: bold;
    }

    span:hover {
      color: ${props => props.onHoverColor};
      transition: all 0.3s ease 0s;
      cursor: pointer;
    }
  }
`

export default Footer;