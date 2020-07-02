import React from "react"

const section = ({ header, content, className = "" }) => (
  <div
    className={`text-left mt-8 mx-6 bg-white bg-opacity-75 rounded-md z-10 ${className}`}
  >
    <h1 className="mx-10 mt-10 mb-5 text-3xl font-bold">{header}</h1>
    <div className="mx-8 p-4 text-left text-gray-900 text-lg">{content}</div>
  </div>
)

export default section
