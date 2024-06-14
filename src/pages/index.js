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

    <h4>Currently Reading:</h4>
    <ul>
      <li>
        <a href="https://bookshop.org/p/books/giving-in-jessie-lian/20547602?ean=9798988931805">
          <em>Giving In</em>
        </a>{" "}
        by Jessie Lian
      </li>
      <li>
        <a href="https://us.macmillan.com/books/9780374538668/blockchainchickenfarm">
          <em>
            Blockchain Chicken Farm And Other Stories of Tech in China's
            Countryside
          </em>
        </a>{" "}
        by Xiaowei Wang
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
