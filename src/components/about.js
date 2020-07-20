import React from "react"
import Section from "./section"

const header = "Darkglass"
const content = (
  <div className="flex flex-col">
    <span>
      We are the proud local distributor for Darkglass Electronics who, in just
      over a decade, have risen to the top of modern bass gear and continue to
      push the boundaries of sonic possibility (and, therefore, that good d j e
      n t ) daily.
    </span>
    <a
      className="text-blue-600 cursor-pointer no-selecto-bro"
      href="https://www.darkglass.com/creations/#pedals"
      target="_blank"
      rel="noreferrer"
    >
      View Darkglass Catalog
    </a>
  </div>
)

const About = () => (
  <Section {...{ header, content, filename: "darkglass.jpg" }} />
)

export default About
