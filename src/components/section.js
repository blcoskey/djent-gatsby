import React from "react"
import Image from "./image"
import { headerStyle, paragraphStyle, containerStyle } from "./styles"

const section = ({ header, content, filename }) => (
  <div className={containerStyle}>
    <h1 className={`${headerStyle} md:hidden`}>{header}</h1>
    <Image filename={filename} className="w-full md:w-2/5 mb-5 md:mb-0" />
    <div className="w-full md:w-2/5 text-left text-lg flex items-center justify-center flex-col md:h-full md:mx-10">
      <h1 className={`${headerStyle} hidden md:flex`}>{header}</h1>
      <span>{content}</span>
    </div>
  </div>
)

export default section
