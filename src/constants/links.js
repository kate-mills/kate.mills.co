const sublinks = [
  {
    page: 'Home',
    path: '/',
    id: 1,
    links: [],
  },
  {
    page: 'About Us',
    path: '/about-us',
    id: 2,
    links: [],
  },
  {
    page: 'Portfolio',
    path: '/portfolio/',
    id: 3,
    links: [
      { label: 'Blogs', url: '/blogs/' },
      { label: 'Websites', url: '/websites/' },
      { label: 'E-commerce', url: '/e-commerce/' },
      { label: 'All Projects', url: '/portfolio/' },
    ],
  },
  {
    page: 'Contact Us',
    path: '/contact-us/',
    id: 4,
    links: [],
  }
];

export default sublinks;
