import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Theme from '../styles/theme';

type Props = {
  selectedIcon: string;
  notSelectedIcon: string;
  isSelected: boolean;
  loginType: string;
  selectLoginType: (arg0: string) => void;
}

type ContainerProps = {
  isSelected: boolean;
  selectedTextColor: string;
  notSelectedTextColor: string;
}

const LoginType = ({ selectedIcon, notSelectedIcon, isSelected, loginType, selectLoginType }: Props) => {

  const [selected, setSelected] = useState<boolean>(isSelected)

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  const select = (loginType: string) => {
    if (selected) return;

    selectLoginType(loginType);
    setSelected(!selected);
  }

  return (
    <Container
      isSelected={selected}
      selectedTextColor={Theme.primaryBlack}
      notSelectedTextColor={Theme.notSelectedFont}
      onClick={() => select(loginType)}
    >
      <img src={selected ? selectedIcon : notSelectedIcon} />
      <span>{loginType}</span>
    </Container>
  )
}

export const Container = styled.div<ContainerProps>`
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