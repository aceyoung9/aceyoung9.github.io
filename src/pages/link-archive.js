import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const LinkArchive = () => {
  return (
    <Layout>
      <h1>Link Archive</h1>

      <ul>
        <li>
          <em>
            Kingdom of Characters: The language revolution that made China
            modern
          </em>{" "}
          by Jing Tsu
        </li>
        <li>
          <a href="https://design.facebook.com/stories/navigating-whiteness-part-1/">
            Navigating whiteness, part 1
          </a>{" "}
          by Timothy Bardlavens. Published February 23, 2021
        </li>
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

      <Link to="/">Back to Home</Link>
    </Layout>
  )
}

export default LinkArchive
