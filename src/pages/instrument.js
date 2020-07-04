import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { instruments } from "../content"
import Image from "../components/image"
import {
  headerStyle,
  paragraphStyle,
  containerStyle,
  topSpacer,
  bottomSpacer,
} from "../components/styles"

const Instrument = ({ location: { pathname } = {} }) => {
  const lastIndex = pathname.lastIndexOf("/")
  const item = pathname.slice(lastIndex + 1, pathname.length)
  const instrument = instruments.find(({ name }) => name === item)
  const { images = [], header, blurb, specs = [], alt } = instrument || {}
  return (
    <Layout>
      <SEO title="Instrument" />
      <div className={topSpacer} />
      <div className={containerStyle}>
        <h1 className={headerStyle}>{header}</h1>
        <div className={paragraphStyle}>
          <span>{blurb}</span>
        </div>
        <h1 className={headerStyle}>Specs</h1>
        {specs.map((x, index) => (
          <div className={paragraphStyle} key={`spec${index}`}>
            <span>{x}</span>
          </div>
        ))}
        <h1 className={headerStyle}>Images</h1>
        {images.map((x, index) => (
          <Image
            filename={x}
            alt={alt}
            className="object-cover w-full mt-2"
            key={`spec${index}`}
          />
        ))}
      </div>
      <div className={bottomSpacer} />
    </Layout>
  )
}

export default Instrument
