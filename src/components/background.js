import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "louis.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
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
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
            zIndex: -1,
          }}
          fluid={imageData}
        />
      )
    }}
  />
)

export default BackgroundSection
