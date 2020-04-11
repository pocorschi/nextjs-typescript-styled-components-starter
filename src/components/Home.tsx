import * as React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: red;
`

export const Home: React.FC = () => (
  <div>
    <p>
      Edit <code>Home.tsx</code> and save to reload.
    </p>
    <Title>Some title</Title>
  </div>
)

export default Home
