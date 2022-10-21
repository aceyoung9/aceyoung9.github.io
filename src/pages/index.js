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
      Lately I’ve been selling some prints and stickers{" "}
      <a href="https://shop.aceyoung.xyz">on my little online shop</a>.
    </p>

    <h4>Currently Reading:</h4>
    <ul>
      <li>
        <a href="https://us.macmillan.com/books/9780374538668/blockchainchickenfarm">
          <em>
            Blockchain Chicken Farm And Other Stories of Tech in China's
            Countryside
          </em>
        </a>{" "}
        by Xiaowei Wang
      </li>
      <li>
        <em>
          Kingdom of Characters: The language revolution that made China modern
        </em>{" "}
        by Jing Tsu
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
