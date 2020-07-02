import React from "react"
import Section from "../components/section"

const header = "Welcome to Djoburg Djents!"
const content = (
  <span>
    We are a collective of gear enthusiasts aiming to provide South African
    musicians with equipment from some of the world's most innovative modern
    brands. If "downtuned", "extended range", "multiscale" and/or "headless" are
    buzz words for you, then you've arrived at the right place!
  </span>
)

const Home = props => <Section {...{ header, content }} />

export default Home
