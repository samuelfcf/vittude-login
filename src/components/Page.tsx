import styled from 'styled-components'

type Props = {
  children: JSX.Element[]
}

const Page = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.main`
  height: 100vh;
`

export default Page;