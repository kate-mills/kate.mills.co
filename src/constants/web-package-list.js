// start growing the beauty business of your dreams.
const details = {
  basicPackage: [
    "Fully customized design (*1-4 pages)",
    "Basic logo design",
    "High quality, responsive images",
    "Custom color palette",
    "Custom contact form",
    "Your choice of font",
    "Your verbiage",
    "Mobile, tablet, and desktop friendly",
    "Free SSL installation",
    "Fast and reliable",
    "Search engine optimization",
  ],
  ecommercePackage: [
    "Add a store and shopping cart to your optimized website."
  ],
  finePrint: [
    "* Extra page designs and coding available at additional cost.",
    "** 50% non-refundable deposit due at the start of the project.",
    "** 50% due 48 hours before \"go-live\" or 60 days (whichever comes first).",
  ]
}

const WebPackageList =  [
  {
    title: "Basic Website",
    path: "/websites",
    price: "$1295",
    pkgDetails: details.basicPackage,
    finePrint: details.finePrint,
  },
  {
    title: "Basic e-commerce",
    path: "/ecommerce",
    price: "$1595",
    pkgDetails: details.basicPackage.concat(
      details.ecommercePackage
    ),
    finePrint: details.finePrint,
  },
]

export default WebPackageList
