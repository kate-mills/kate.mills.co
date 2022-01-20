const sublinks = [
  {
    page: 'Home',
    path: '/',
    id: 1,
    cls:'no-mobile show-dt',
    links: [],
  },
  {
    page: 'About Kate',
    path: '/about-kate',
    id: 2,
    cls:'no-mobile show-dt',
    links: [],
  },
  {
    page: 'Designs',
    path: '/portfolio',
    id: 3,
    cls:'no-mobile',
    links: [
      { label: 'Portfolio', url: '/portfolio', cls:'no-dt'},
      { label: 'Websites', url: '/websites', cls: 'no-mobile' },
      { label: 'Ecommere', url: '/ecommerce', cls: 'no-mobile' },
      { label: 'Blogs', url: '/blogs', cls: 'no-mobile' },
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
