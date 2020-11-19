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

export default () => (
  <>
    <GlobalStyle />

    <Container>
      <h1>Hello, my name is Ace Young</h1>

      <small>
        Pronouns: they/them or she/her
        <br />
        Fun fact: I don’t have a gender.
      </small>

      <p>
        I’m a front-end developer, and I love writing weird CSS and even weirder
        JavaScript. Not incomprehensibly weird, or utterly unextendable by
        others. Just mildly funky code.
      </p>

      <p>
        I used to have a very pretty website with lots of artwork. One day all
        those paintings of dead birds will be moved here.
      </p>

      <h4>Currently learning about:</h4>
      <ul>
        <li>Design systems</li>
        <li>Bike maintenance</li>
        <li>Public transportation policy</li>
      </ul>

      <h4>Recently Read:</h4>
      <ul>
        <li>
          <a href="https://islandpress.org/books/right-way">
            Right of Way: Race, Class, and the Silent Epidemic of Pedestrian
            Deaths in America
          </a>{" "}
          by Angie Schmitt
        </li>
        <li>
          <a href="https://medium.com/wan-coffee/the-ba-test-kitchen-revolts-a1c4f51a9fb9">
            The Bon Appétit Test Kitchen Revolts
          </a>{" "}
          by Justin Lee. Published July 16, 2020
        </li>
        <li>
          <a href="https://www.teenvogue.com/story/decolonize-art-photography">
            The ‘Art World’ Can’t Exist in a Decolonized Future
          </a>{" "}
          by Angie Jaime. Published June 30, 2020
        </li>
      </ul>

      <h3>Side Projects:</h3>
      <ul>
        <li>
          <a href="http://tw-photos.aceyoung.online/">
            Some photos from my trip to Taiwan.
          </a>
        </li>
        <li>
          <a href="http://aceyoung.xyz/bike-accident-counter-site/">
            The Bike Accident Counter
          </a>
        </li>
      </ul>

      <h3>Contact:</h3>
      <ul>
        <li>ace.young289@gmail.com</li>
        <li>
          <a href="https://github.com/aceyoung9">Github: aceyoung9</a>
        </li>
        <li>
          I am on Twitter, but I probably won’t add you unless we’re friends
          offline.
        </li>
      </ul>
    </Container>
  </>
)