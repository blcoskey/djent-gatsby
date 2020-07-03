import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { instruments } from "../content"
import Image from "../components/image"

const Instrument = ({ location: { pathname } = {} }) => {
  const lastIndex = pathname.lastIndexOf("/")
  const item = pathname.slice(lastIndex + 1, pathname.length)
  const instrument = instruments.find(({ name }) => name === item)
  const { images = [], header, blurb, specs = [], alt } = instrument || {}
  return (
    <Layout>
      <SEO title="Instrument" />
      <div className="bg-opacity-75 bg-white w-full mt-32 flex flex-col z-10">
        <h1 className="mx-10 mt-10 mb-3 text-1xl font-bold">{header}</h1>
        <div className="mx-10 mt-10 mb-3">
          <span>{blurb}</span>
        </div>
        <h1 className="mx-10 mt-10 mb-3 text-1xl font-bold">Specs</h1>
        {specs.map((x, index) => (
          <div className="mx-10" key={`spec${index}`}>
            <span>{x}</span>
          </div>
        ))}
        <h1 className="mx-10 mt-10 mb-3 text-1xl font-bold">Images</h1>
        {images.map((x, index) => (
          <Image
            filename={x}
            alt={alt}
            className="object-cover w-full mt-2"
            key={`spec${index}`}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Instrument
