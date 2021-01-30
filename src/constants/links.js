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
      { label: 'blogs', url: '/blogs/' },
      { label: 'websites', url: '/websites/' },
      { label: 'e-commerce', url: '/e-commerce/' },
      { label: 'all projects', url: '/portfolio/' },
    ],
  },
  {
    page: 'contact us',
    path: '/contact-us/',
    links: [],
  }
];

export default sublinks;
