import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const HomePage = () => (
  <Layout>
    <h1>Hello, my name is Ace Young</h1>

    <small>Pronouns: they/them or she/her</small>

    <p>I’m a bike mechanic / artist / front-end developer.</p>

    <StaticImage
      src="../img/bikes.jpg"
      placeholder="blurred"
      width={720}
      alt="One of my favorite bikes leaning on a bike rack"
    />

    <p>
      I used to have a very pretty website with lots of artwork. One day all
      those paintings of dead birds will be moved here. In the meantime, art
      updates can be found on{" "}
      <a href="https://www.instagram.com/acepaint289/">Instagram</a>.
    </p>

    <p>
      Lately I’ve been selling some prints and stickers{" "}
      <a href="https://shop.aceyoung.xyz">on my little online shop</a>.
    </p>

    <h4>Recent finds:</h4>
    <ul>
      <a href="https://www.newyorker.com/magazine/2017/01/02/to-speak-is-to-blunder">
        To Speak Is to Blunder
      </a>{" "}
      by Yiyun Li. Published in the print edition of the January 2, 2017 issue.
      Retrieved December 17, 2025.
    </ul>

    <Link to="/link-archive">Link Archive</Link>

    <h3>Side Projects:</h3>
    <ul>
      <li>
        <a href="//garden.aceyoung.online">Digital Garden</a>. It's like a blog,
        but without actual writing.
      </li>
      <li>
        <s>
          <a href="http://tw-photos.aceyoung.online/">
            Some photos from my trip to Taiwan
          </a>
        </s>
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
    </ul>
  </Layout>
)

export default HomePage
