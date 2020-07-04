import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { instruments } from "../content"
import Image from "../components/image"
import {
  headerStyle,
  topSpacer,
  bottomSpacer,
  containerStyle,
} from "../components/styles"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <div className={topSpacer} />
    {instruments.map(({ header, images, name, alt = [] }) => {
      return (
        <div key={name} className={containerStyle}>
          <h1 className={headerStyle}>{header}</h1>
          <div className="text-left text-gray-900 text-lg">
            <Image filename={images[0]} alt={alt} className="min-h-full" />
          </div>
          <Link
            className="text-blue-600 cursor-pointer"
            to={`/instrument/${name}`}
          >
            <h1 className={headerStyle}>View Details</h1>
          </Link>
        </div>
      )
    })}
    <div className={bottomSpacer} />
  </Layout>
)

export default Gallery
