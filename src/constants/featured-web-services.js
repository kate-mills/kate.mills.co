import React from "react"
import {
  GiKeyboard,
  GiShoppingCart,
} from "react-icons/gi"

import { RiComputerLine } from "react-icons/ri";

export default [
  {
    icon: <GiKeyboard className="icon" />,
    title: "blogs",
    path: "blogs",
    text:
      " Increase your online visibility with a blog.  More content means more opportunities to show up in search engines and drive new visitors to your website.",
  },
  {
    icon: <GiShoppingCart className="icon" />,
    path: "e-commerce",
    title: "e-commerce",
    text:
      "  Keep your retail business open 24 hours a day.  An online store makes shopping easier for existing clients and finds new ones that may never enter your physical location.",
  },
  {
    icon: <RiComputerLine className="icon" />,
    path: "websites",
    title: "websites",
    text:
      " Grow your business, build credibility, save time, engage with clients, and the list goes on.",
  },
]

