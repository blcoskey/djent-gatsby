import React, { useState, useEffect } from "react"
import logo2 from "../images/logo-round-black.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Header = ({ darkmode, toggleDarkmode }) => {
  const [expand, setExpand] = useState("init")
  const [menuVisibility, setMenuVisiblity] = useState("invisible")
  const [menuStyle, setMenuStyle] = useState("opacity-0")
  const [iconStyle, setIconStyle] = useState(
    "transition-transform duration-500 h-12 text-black text-4xl transform translate-y-0 absolute right-2"
  )
  const [cancelStyle, setCancelStyle] = useState(
    "transition-transform duration-500 h-12 text-black text-4xl transform translate-x-24 absolute right-2"
  )

  const toggleMenu = () => {
    if (expand !== "open") return setExpand("open")
    return setExpand("close")
  }

  useEffect(() => {
    if (expand === "open") {
      setMenuVisiblity("visible")
      setIconStyle(iconStyle.replace("translate-y-0", "translate-y-neg-10"))
      setCancelStyle(
        cancelStyle
          .replace("translate-x-24", "translate-x-0")
          .replace("hidden invisible", "")
      )
    }
    if (expand === "close") {
      setMenuStyle("opacity-0")
      setIconStyle(iconStyle.replace("translate-y-neg-10", "translate-y-0"))
      setCancelStyle(cancelStyle.replace("translate-x-0", "translate-x-24"))
    }
  }, [expand])

  const getLogoRotation = () => {
    if (expand === "close" || expand === "init") {
      if (darkmode) {
        return "rotate-75"
      }
      return "rotate-360"
    }

    if (darkmode) {
      return "rotate-75"
    }

    return "rotate-0"
  }

  // Fades in menu
  useEffect(() => {
    if (menuVisibility === "visible") {
      setMenuStyle("opacity-100 z-10")
    }
  }, [menuVisibility])

  // Hides menu after fade out
  useEffect(() => {
    if (menuVisibility === "visible" && menuStyle === "opacity-0") {
      setTimeout(() => {
        setMenuVisiblity("invisible")
      }, 500)
    }
  }, [menuStyle])

  return (
    <React.Fragment>
      <header className="fixed w-full text-white text-center visible lg:invisible z-50">
        <div className="flex flex-row justify-between">
          <img
            src={logo2}
            alt="djent-logo"
            className={
              expand === "close" || expand === "init"
                ? `w-24 m-5 ml-6 transition-transform duration-300 transform ${getLogoRotation()}`
                : `w-24 m-5 ml-6 transition-transform duration-300 transform ${getLogoRotation()}`
            }
            onClick={toggleDarkmode}
          />
          <div className="h-12 flex self-center text-black text-4xl translate-y-0 cursor-pointer">
            <FontAwesomeIcon
              icon={faBars}
              className={iconStyle}
              onClick={toggleMenu}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={cancelStyle}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>
      <div
        className={`fixed h-screen w-full transition-opacity duration-500 bg-gradient-peach-purple z-40 ${menuStyle} ${menuVisibility}`}
      >
        <div className="w-full h-full flex flex-col text-center text-3xl items-center justify-center">
          <Link
            className="transition duration-500 transform hover:-translate-y-1 p-4 cursor-pointer z-50 no-selecto-bro"
            to="/"
          >
            Home
          </Link>
          <Link
            className="transition duration-500 transform hover:-translate-y-1 p-4 cursor-pointer z-10 no-selecto-bro"
            to="/gallery"
          >
            Past Imports
          </Link>
          <div className="flex flex-row justify-center text-center">
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro p-5 "
              href="mailto:blcoskey@gmail.com"
            >
              <FontAwesomeIcon className=" no-selecto-bro" icon={faEnvelope} />
            </a>
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro p-5 "
              href="tel:+27 71 126 6800"
            >
              <FontAwesomeIcon className=" no-selecto-bro" icon={faPhone} />
            </a>{" "}
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro p-5 "
              href="https://www.facebook.com/djoburgdjentsZA"
              target="_blank"
            >
              <FontAwesomeIcon className=" no-selecto-bro" icon={faFacebookF} />
            </a>
            <a
              className="transition duration-500 transform hover:-translate-y-1 cursor-pointer no-selecto-bro p-5 "
              href="https://www.instagram.com/djoburgdjents_za"
              target="_blank"
            >
              <FontAwesomeIcon className="no-selecto-bro" icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
