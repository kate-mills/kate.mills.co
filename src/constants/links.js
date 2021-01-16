import { BiCoffee, BiCartAlt, BiChart, BiChat  } from "react-icons/bi";
import React from 'react';

const sublinks = [
  {
    page: 'home',
    path: '/',
    links: [],
  },
  {
    page: 'about us',
    path: '/about-us',
    links: [],
  },
  {
    page: 'portfolio',
    path: '/portfolio/',
    links: [
      { label: 'e-commerce', icon: <BiCartAlt />, url: '/e-commerce/' },
      { label: 'blogs', icon: <BiChat />, url: '/blogs/' },
      { label: 'websites', icon: <BiChart />, url: '/websites/' },
      { label: 'all projects', icon: <BiCoffee />, url: '/portfolio/' },
    ],
  },
  {
    page: 'contact us',
    path: '/contact-us/',
    links: [],
  }
];

export default sublinks;
