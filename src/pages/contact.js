import React from "react"
import Section from "../components/section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

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
)

const Home = props => <Section {...{ header, content }} className="mb-12" />

export default Home
