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
    path: '/portfolio',
    id: 3,
    links: [
      { label: 'Color Schemes', url: '/build-color-schemes', },
      { label: 'Search Images', url: '/free-website-images', },
      { label: 'Blogs', url: '/blogs' },
      { label: 'Websites', url: '/websites' },
      { label: 'E-commerce', url: '/e-commerce' },
    ],
  },
  {
    page: 'Contact Us',
    path: '/contact-us',
    id: 4,
    links: [],
  }
];

export default sublinks;
