const sublinks = [
  {
    page: 'Home',
    path: '/',
    id: 1,
    isHomeLnk:'home-link',
    links: [],
  },
  {
    page: 'About Us',
    path: '/about-us',
    id: 2,
    isHomeLnk:'',
    links: [
      { label: 'Contact Us', url: '/contact-us', },
    ],
  },
  {
    page: 'Portfolio',
    path: '/portfolio',
    id: 3,
    isHomeLnk:'',
    links: [
      { label: 'Latest', url: '/portfolio' },
      { label: 'Blogs', url: '/blogs' },
      { label: 'E-commerce', url: '/e-commerce' },
      { label: 'Websites', url: '/websites' },
    ],
  },
  {
    page: 'Apps',
    path: '/free-website-images',
    id: 4,
    isHomeLnk:'',
    links: [
      { label: 'Search Images', url: '/free-website-images', },
      { label: 'Color Schemes', url: '/build-color-schemes', },
    ],
  }
];

export default sublinks;
