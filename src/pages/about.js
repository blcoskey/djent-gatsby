import React from "react"
import Section from "../components/section"
import { Link } from "gatsby"

const header = "Darkglass"
const content = (
  <div className="flex flex-col">
    <span>
      We are the proud local distributor for Darkglass Electronics who, in just
      over a decade, have risen to the top of modern bass gear and continue to
      push the boundaries of sonic possibility (and, therefore, that good d j e
      n t ) daily.
    </span>
    <Link
      className="text-blue-600 cursor-pointer"
      to="https://www.darkglass.com/creations/#pedals"
      target="_blank"
    >
      View Darkglass Catalog
    </Link>
  </div>
)

const About = () => <Section {...{ header, content }} />

export default About
