import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const DarkglassBackground = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "darkglass.jpg" }) {
          childImageSharp {
            fluid(quality: 60, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="div"
          className="absolute left-0 top-0 w-full h-full"
          style={{ zIndex: -10 }}
          fluid={imageData}
        />
      )
    }}
  />
)

export default DarkglassBackground
