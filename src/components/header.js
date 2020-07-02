import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"

const Header = () => (
  <header className="fixed top-16 w-full text-white text-center invisible lg:visible">
    <div className="flex flex-row">
      <img src={logo} alt="djent-logo" className="w-40 h-40 m-5" />
      <div className="flex flex-row w-full items-end justify-end">
        <Link className="self-center mx-5 text-lg" to="/">
          Home
        </Link>
        <Link className="self-center mx-5 text-lg" to="/about">
          About
        </Link>
        <Link className="self-center mx-5 text-lg" to="/about">
          Products
        </Link>
        <Link className="self-center mx-5 text-lg" to="/about">
          Contact
        </Link>
      </div>
    </div>
  </header>
)

export default Header
