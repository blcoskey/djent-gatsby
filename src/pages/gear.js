import React from "react"
import Section from "../components/section"
import { Link } from "gatsby"

const header = "Gear"
const content = (
  <div className="flex flex-col">
    <span>
      We also cherrypick several unique guitars from around the world that share
      the same pioneering mentality associated with more modern music styles,
      and showcase them on African soil; not a single generic strat or les paul
      copy in sight!
    </span>
    <Link className="text-blue-600 cursor-pointer" to="/gallery">
      See past imports
    </Link>
  </div>
)

const Gear = props => <Section {...{ header, content }} />

export default Gear
