import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(120deg, #8e78ff, #fc7d7b);
    min-height: calc(100vh - 60px);
    margin: 0;

    color: #273195;
    font-size: 1.4em;
    line-height: 1.4;

    @media (max-width: 600px) {
      min-height: calc(100vh - 40px);
      font-size: 1.2em;
    }
  }
`

const Container = styled.div`
  background: #f2eff9;
  margin: 60px auto 0 60px;
  max-width: 780px;
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 15px;
  }

  h1 {
    margin-top: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
