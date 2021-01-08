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
      { label: 'blog', icon: <BiChat />, url: '/blog/' },
      { label: 'website', icon: <BiChart />, url: '/website/' },
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
