
const featured = [
  {
    path: "/blogs",
    title: "Blogs",
    text:
      "Increase your online visibility with a blog.  More content means more opportunities to show up in search engines and drive new visitors to your website.",
  },
  {
    path: "/ecommerce",
    title: "e-commerce",
    text:
      "Keep your retail business open 24 hours a day.  An online store makes shopping easier for existing clients and finds new ones that may never enter your physical location.",
  },
  {
    path: "/websites",
    title: "Websites",
    text:
      "Grow your business, build credibility, save time, engage with clients, and the list goes on.",
  },
]

const pkgDetails = [
  "Up to 5 pages of content",
  "Basic Logo",
  "Custom Fonts",
  "High quality images",
  "Custom Color Palette",
  "Custom Contact Form",
  "Mobile, tablet, and  desktop friendly",
  "Free SSL instalation",
  "Fast, reliable, Search Engine Optimized",
]
const finePrint = "*50% non-refundable deposit due at start of project.";
const finerPrint = "*50% due 48 hours before \"go-live\" or 60 days (whichever comes first)";
export const packages =  [
  {
    title: "Basic Website",
    path: "/websites",
    price: "$1295",
    pkgDetails,
    finePrint,
    finerPrint,
  },
  {
    title: "Basic e-commerce",
    path: "/ecommerce",
    price: "$1595",
    pkgDetails: pkgDetails.concat(["Add a store and shopping cart to your optimized website."]),
    finePrint,
    finerPrint,
  },
]

export default featured
