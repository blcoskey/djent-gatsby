import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MobileHeader from "./mobileHeader"
import Particles from "react-particles-js"
import particleConfig from "./particles-config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Background from "./background"

const Layout = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col w-full h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <MobileHeader
        siteTitle={data.site.siteMetadata.title}
        darkmode={darkmode}
        toggleDarkmode={() => setDarkmode(!darkmode)}
      />
      <Background />
      <Particles
        canvasClassName="fixed w-full h-full z-0"
        params={particleConfig}
      />

      <main className="flex flex-grow w-full flex-col bg-opacity-0 z-10 bg-transparent bg-fixed">
        {children}
      </main>

      <footer className="text-white text-center w-full bg-gray-800 text-1xl flex flex-col z-10">
        <div className="flex flex-col">
          <div className="w-full flex flex-row text-center  items-end justify-around self-end mb-2 mt-4">
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
              href="mailto:blcoskey@gmail.com"
            >
              <FontAwesomeIcon className=" no-selecto-bro" icon={faEnvelope} />
            </a>
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
              href="tel:+27 71 126 6800"
            >
              <FontAwesomeIcon className=" no-selecto-bro" icon={faPhone} />
            </a>
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
              href="https://www.facebook.com/djoburgdjentsZA"
              target="_blank"
            >
              <FontAwesomeIcon className=" no-selecto-bro" icon={faFacebookF} />
            </a>
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
              href="https://www.instagram.com/djoburgdjents_za"
              target="_blank"
            >
              <FontAwesomeIcon className="no-selecto-bro" icon={faInstagram} />
            </a>
          </div>
        </div>
        <div>
          <span className="text-xs">
            copyright © {new Date().getFullYear()} djoburg djents
          </span>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
