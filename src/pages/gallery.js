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
  galleryContainerStyle,
} from "../components/styles"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <div className={topSpacer} />
    {instruments.map(({ header, images, name, alt = [] }) => {
      return (
        <div key={name} className={galleryContainerStyle}>
          <h1 className={`${headerStyle} w-full md:w-1/2 lg:w-2/5`}>
            {header}
          </h1>
          <Image
            filename={images[0]}
            alt={alt}
            className="w-full md:w-1/2 lg:w-2/5"
          />
          <Link
            to={`/instrument/${name}`}
            className="object-center object-contain text-blue-600 cursor-pointer w-full"
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
