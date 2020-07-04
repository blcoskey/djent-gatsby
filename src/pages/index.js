import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Gear from "./gear"

const IndexPage = props => (
  <Layout>
    <SEO title="djoburg djents | home" />
    <div className="mt-32"></div>
    <Home />
    <About />
    <Gear />
    <Contact />
  </Layout>
)

export default IndexPage
