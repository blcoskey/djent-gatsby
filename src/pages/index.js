import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Gear from "./gear"
import {
  topSpacer,
  bottomSpacer,
  containerStyle,
  headerStyle,
} from "../components/styles"
import Image from "../components/image"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className={topSpacer} />
    <div
      className={`${containerStyle} flex items-center justify-center flex-col text-center`}
    >
      <h1 className={`${headerStyle}`}>Welcome to Djoburg Djents</h1>
      <Image filename="darkglass-logo.png" className="w-full md:w-2/5" />
      <h1 className="mx-12 mt-10 mb-5 font-bold text-lg italic lg:text-1xl">
        Official Darkglass Distributer
      </h1>
    </div>
    <Home />
    <About />
    <Gear />
    <Contact />
    <div className={bottomSpacer} />
  </Layout>
)

export default IndexPage
