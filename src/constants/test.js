import React from "react"
import {
  GiKeyboard,
  GiDiamondHard,
  GiShoppingCart,
  //GiStabbedNote, GiBank, GiPiggyBank, GiRoundStar,GiBriefcase,
} from "react-icons/gi"

import { RiComputerLine } from "react-icons/ri";

import { FaRegHandshake } from "react-icons/fa"

export default [
  {
    icon: <GiKeyboard className="icon" />,
    title: "blogs",
    text:
      " Develop beautiful responsive custom digital solutions for salons and spas with exemplary customer service.",
  },
  {
    icon: <GiShoppingCart className="icon" />,
    title: "ecommerce",
    text:
      " Through our innovative web solutions, we will build and enhance an everlasting bond between you and your customer.",
  },
  {
    icon: <RiComputerLine className="icon" />,
    title: "landing pages",
    text:
      " We value a true partnership with all of our clients and treat their success as necessary as our own.",
  },
]
