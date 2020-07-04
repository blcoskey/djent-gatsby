import React from "react"
import { headerStyle, paragraphStyle, containerStyle } from "./styles"

const section = ({ header, content }) => (
  <div className={containerStyle}>
    <h1 className={headerStyle}>{header}</h1>
    <div className={paragraphStyle}>{content}</div>
  </div>
)

export default section
