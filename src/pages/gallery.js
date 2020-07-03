import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { instruments } from "../content"
import Image from "../components/image"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <div className="mt-32"></div>
    {instruments.map(({ header, images, name, alt = [] }) => {
      return (
        <div
          key={name}
          className={`text-left mt-8 mx-6 bg-gray-200 bg-opacity-75 rounded-md z-10`}
        >
          <h1 className="mx-10 mt-10 mb-3 text-1xl font-bold">{header}</h1>
          <div className="mx-4 p-4 text-left text-gray-900 text-lg">
            <Image filename={images[0]} alt={alt} />
            <Link
              className="text-blue-600 cursor-pointer"
              to={`/instrument/${name}`}
            >
              View Details
            </Link>
          </div>
        </div>
      )
    })}
    <div className="mb-16"></div>
  </Layout>
)

export default Gallery
