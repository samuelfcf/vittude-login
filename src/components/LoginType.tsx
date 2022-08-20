import styled from 'styled-components';
import Theme from '../styles/theme';

type Props = {
  imgSrc: string;
  isSelected: boolean;
  loginType: string;
}

type LoginTypeProps = {
  isSelected: boolean;
  selectedTextColor: string;
  notSelectedTextColor: string;
}

const LoginType = ({ imgSrc, isSelected, loginType }: Props) => {
  return (
    <Container
      isSelected={isSelected}
      selectedTextColor={Theme.primaryBlack}
      notSelectedTextColor={Theme.notSelectedFont}
    >
      <img src={imgSrc} />
      <span>{loginType}</span>
    </Container>
  )
}

export const Container = styled.div<LoginTypeProps>`
  display: flex;
  align-items: flex-end;
  gap: 0.625rem;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 1.875rem;
  }

  span {
    color: ${props => props.isSelected ? props.selectedTextColor : props.notSelectedTextColor};
    font-size: 1.3rem;
    text-decoration: ${props => props.isSelected ? 'underline' : 'none'};
  }
`

export default LoginType