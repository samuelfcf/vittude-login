import styled from 'styled-components'
import Theme from '../styles/theme';

const HeaderDecoration = () => {
  return (
    <Div color={Theme.primaryOrange}></Div>
  )
}

const Div = styled.div`
  height: 0.75rem;
  background-color:  ${props => props.color};
`

export default HeaderDecoration;