import React from "react"
import {
  GiCompass,
  GiDiamondHard,
  GiBullseye,
  //GiStabbedNote, GiBank, GiPiggyBank, GiRoundStar,GiBriefcase,
} from "react-icons/gi"

import { FaRegHandshake } from "react-icons/fa"

export default [
  {
    icon: <GiCompass className="icon" />,
    title: "mission",
    text:
      " We intend to deliver our clients innovative and effective web solutions that drive brand awareness and bring new clients to their doors.",
  },
  {
    icon: <GiDiamondHard className="icon" />,
    title: "vision",
    text:
      "  Develop beautiful responsive custom digital solutions for salons and spas with exemplary customer service.",
  },
  {
    icon: <GiBullseye className="icon" />,
    //icon: <GiStabbedNote className="icon" />,
    title: "results",
    text:
      " Through our innovative web solutions, we will build and enhance an everlasting bond between you and your customer.",
  },
  {
    icon: <FaRegHandshake className="icon" />,
    title: "partnership",
    text:
      " We value a true partnership with all of our clients and treat your success as necessary as our own.",
  },
]
