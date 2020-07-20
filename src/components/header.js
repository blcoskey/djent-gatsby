import React from "react"
import logo from "../images/logo.png"
import { Link } from "@reach/router"

const Header = () => (
  <header className="fixed top-0 w-full text-white text-center invisible lg:visible z-40">
    <div className="flex flex-row">
      <img src={logo} alt="djent-logo" className="w-40 h-40 m-5" />
      <div className="flex flex-row w-full items-end justify-end">
        <Link
          className="self-center mx-5 text-3xl font-bold no-selecto-bro"
          to="/"
        >
          Home
        </Link>
        <Link
          className="self-center mx-5 text-3xl font-bold no-selecto-bro"
          to="/gallery"
        >
          Past Imports
        </Link>
      </div>
    </div>
  </header>
)

export default Header
