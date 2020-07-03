import React from "react"
import Section from "../components/section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

const header = "Contact"
const content = (
  <div className="flex flex-col">
    <div>
      <span>
        Whether you're a hardcore gear nut or simply a djenthusiast, we have a
        little something for everyone. Don't forget to follow us on social media
        to be kept up to date with all things d j e n t in South Africa!
      </span>
    </div>
    <div className="flex flex-row justify-between text-3xl">
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
)

const Home = props => <Section {...{ header, content }} className="mb-12" />

export default Home
