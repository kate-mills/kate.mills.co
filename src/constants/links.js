const sublinks = [
  {
    page: 'Home',
    path: '/',
    id: 1,
    cls:'no-mobile show-dt',
    links: [],
  },
  {
    page: 'Why ADS?',
    path: '/about-us',
    id: 2,
    cls:'no-mobile',
    links: [
      { label: 'About Us', url: '/about-us', cls:'show-mobile no-dt'},
      { label: 'Contact Us', url: '/contact-us', cls:'show-mobile'},
    ],
  },
  {
    page: 'Designs',
    path: '/portfolio',
    id: 3,
    cls:'no-mobile',
    links: [
      { label: 'Portfolio', url: '/portfolio', cls:'no-dt'},
      { label: 'Blogs', url: '/blogs', cls: 'no-mobile' },
      { label: 'E-commerce', url: '/e-commerce', cls:'no-mobile' },
      { label: 'Websites', url: '/websites', cls: 'no-mobile' },
    ],
  },
  {
    page: 'Apps',
    path: '/free-website-images',
    id: 4,
    cls:'no-mobile',
    links: [
      { label: 'Search Images', url: '/free-website-images', cls: 'no-dt' },
      { label: 'Find Colors', url: '/discover-new-colors', cls: '' },
      { label: 'Color Schemes', url: '/build-color-schemes', cls: '' },
    ],
  }
];

export default sublinks;
