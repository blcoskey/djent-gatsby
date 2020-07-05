import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Gear from "./gear"
import { topSpacer, bottomSpacer } from "../components/styles"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className={topSpacer} />
    <Home />
    <About />
    <Gear />
    <Contact />
    <div className={bottomSpacer} />
  </Layout>
)

export default IndexPage
