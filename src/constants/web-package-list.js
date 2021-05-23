const details = {
  basicPackage: [
    "Up to 5 pages of content",
    "Basic Logo",
    "Custom Fonts",
    "High quality images",
    "Custom Color Palette",
    "Custom Contact Form",
    "Mobile, tablet, and  desktop friendly",
    "Free SSL instalation",
    "Fast, reliable, Search Engine Optimized",
  ],
  finePrint: "*50% non-refundable deposit due at start of project.",
  finerPrint:"*50% due 48 hours before \"go-live\" or 60 days (whichever comes first)",
}

const WebPackageList =  [
  {
    title: "Basic Website",
    path: "/websites",
    price: "$1295",
    pkgDetails: details.basicPackage,
    finePrint: details.finePrint,
    finerPrint: details.finerPrint,
  },
  {
    title: "Basic e-commerce",
    path: "/ecommerce",
    price: "$1595",
    pkgDetails: details.basicPackage.concat(["Add a store and shopping cart to your optimized website."]),
    finePrint: details.finePrint,
    finerPrint: details.finerPrint,
  },
]

export default WebPackageList
