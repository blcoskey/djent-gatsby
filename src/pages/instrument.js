import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { instruments } from "../content"
import Image from "../components/image"
import {
  headerStyle,
  paragraphStyle,
  galleryContainerStyle,
  containerStyle,
  topSpacer,
  bottomSpacer,
} from "../components/styles"

const Instrument = ({ location: { pathname } = {} }) => {
  const lastIndex = pathname.lastIndexOf("/")
  const item = pathname.slice(lastIndex + 1, pathname.length)
  const instrument = instruments.find(({ name }) => name === item)
  const { images = [], header, blurb, specs = [], alt } = instrument || {}
  const [firstImage = ""] = images

  return (
    <Layout>
      <SEO title="Instrument" />
      <div className={topSpacer} />
      <h1 className={headerStyle}>{header}</h1>
      <div className={containerStyle}>
        <Image filename={firstImage} className="w-full md:w-2/5 mb-5 md:mb-0" />
        <div className="w-full md:w-2/5 text-left text-lg flex items-center justify-center flex-col md:h-full md:mx-10">
          <span>{blurb}</span>
        </div>
      </div>
      <div className={galleryContainerStyle}>
        <h1 className={headerStyle}>Specs</h1>
        <ol className="list-disc self-center px-5">
          {specs.map((x, index) => (
            <li key={`spec${index}`}>{x}</li>
          ))}
        </ol>
        <h1 className={headerStyle}>Images</h1>
        <div className="w-full flex flex-wrap justify-center items-center">
          {images.slice(1).map((x, index) => (
            <Image
              filename={x}
              alt={alt}
              className="w-full md:w-2/5 m-2"
              key={`spec${index}`}
            />
          ))}
        </div>
      </div>
      <div className={bottomSpacer} />
    </Layout>
  )
}

export default Instrument
