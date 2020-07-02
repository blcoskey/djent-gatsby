import React from "react"
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
    <div className="flex flex-col w-full h-full">
      <Background>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MobileHeader siteTitle={data.site.siteMetadata.title} />
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
              <FontAwesomeIcon
                className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
                icon={faEnvelope}
              />
              <FontAwesomeIcon
                className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
                icon={faPhone}
              />
              <FontAwesomeIcon
                className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro"
                icon={faInstagram}
              />
            </div>
          </div>
          <div>
            <span className="text-xs">
              copyright © {new Date().getFullYear()} djoburg djents
            </span>
          </div>
        </footer>
      </Background>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
