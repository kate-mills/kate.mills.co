import React from 'react'

import {AiOutlineHome} from "react-icons/ai"

export default [
  {
    page: "home",
    label: "home",
    url: '/',
    icon: <AiOutlineHome className="icon"/>,
    path: '/',
    text: 'home',
  },
  {
    page: "company",
    label: "about us",
    url: '/about',
    icon: <AiOutlineHome className="icon"/>,
    path: '/about',
    text: 'about us',
  },
  {

    page: "company",
    label: "company portfolio",
    url: '/portfolio',
    icon: <AiOutlineHome className="icon"/>,
    path: '/portfolio',
    text: 'portfolio',
  },
  {
    page: "company",
    label: "contact us",
    url: '/contact-us',
    icon: <AiOutlineHome className="icon"/>,
    path: '/contact-us',
    text: 'contact us',
  },
]
