import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const HomePage = () => (
  <Layout>
    <h1>Hello, my name is Ace Young</h1>

    <small>
      Pronouns: they/them or she/her
      <br />
      Fun fact: I don’t have a gender.
    </small>

    <p>I’m an artist / bike mechanic / front-end developer.</p>

    <p>
      I used to have a very pretty website with lots of artwork. One day all
      those paintings of dead birds will be moved here.
    </p>

    <p>
      I started an online shop recently. If you like bikes, trans rights, and
      sparkly/holographic stickers, you should{" "}
      <a href="https://shop.aceyoung.xyz">take a peek at the pre-order sale.</a>
    </p>

    <h4>Currently learning about:</h4>
    <ul>
      <li>Design systems</li>
      <li>Public transportation policy</li>
    </ul>

    <h4>Recently Read:</h4>
    <ul>
      <li>
        <a href="https://design.facebook.com/stories/navigating-whiteness-part-1/">
          Navigating whiteness, part 1
        </a>{" "}
        by Timothy Bardlavens. Published February 23, 2021
      </li>
    </ul>

    <Link to="/link-archive">Link Archive</Link>

    <h3>Side Projects:</h3>
    <ul>
      <li>
        <a href="//garden.aceyoung.online">Digital Garden</a>. It's like a blog,
        but without actual writing.
      </li>
      <li>
        <a href="http://tw-photos.aceyoung.online/">
          Some photos from my trip to Taiwan
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
        <a href="https://www.instagram.com/acepaint289/">
          Instagram: @acepaint289
        </a>
      </li>
      <li>
        I am on Twitter, but I probably won’t add you unless we’re friends
        offline.
      </li>
    </ul>
  </Layout>
)

export default HomePage
