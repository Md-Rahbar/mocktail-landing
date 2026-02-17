const navLinks = [
  { id: "drinks", title: "Our Drinks" },
  { id: "story", title: "Our Story" },
  { id: "gallery", title: "Gallery" },
  { id: "reach", title: "Reach" },
];

const cocktailLists = [
  {
    name: "Berry Lemon Spark",
    country: "UK",
    detail: "Lemon & Mixed Berry Cooler",
    price: "£3.20",
  },
  {
    name: "Minty Citrus Chill",
    country: "ES",
    detail: "Fresh Mint with Citrus Blend",
    price: "£2.90",
  },
  {
    name: "Peach Sunrise",
    country: "IT",
    detail: "Peach Nectar & Orange Twist",
    price: "£3.80",
  },
  {
    name: "Green Apple Fizz",
    country: "DE",
    detail: "Apple Soda with Lime Splash",
    price: "£3.50",
  },
];

const mockTailLists = [
  {
    name: "Rose Petal Cooler",
    country: "FR",
    detail: "Rose Syrup & Chilled Soda",
    price: "£4.10",
  },
  {
    name: "Mango Mint Dream",
    country: "IN",
    detail: "Fresh Mango & Garden Mint",
    price: "£3.70",
  },
  {
    name: "Coconut Breeze",
    country: "TH",
    detail: "Tender Coconut & Lime",
    price: "£4.30",
  },
  {
    name: "Pomegranate Glow",
    country: "TR",
    detail: "Pomegranate Juice & Citrus",
    price: "£3.95",
  },
];

const profileLists = [
  { imgPath: "/images/profile1.png" },
  { imgPath: "/images/profile2.png" },
  { imgPath: "/images/profile3.png" },
  { imgPath: "/images/profile4.png" },
];

const featureLists = [
  "Fresh fruits blended daily",
  "Beautiful handcrafted presentation",
  "Perfect chill temperature",
  "Prepared by expert mixologists",
];

const goodLists = [
  "Premium natural ingredients",
  "Creative signature recipes",
  "Elegant serving experience",
  "Burst of refreshing flavors",
];

const storeInfo = {
  heading: "Visit Our Lounge",
  address: "22 Riverwalk Street, Camden, London NW1 8AB, UK",
  contact: {
    phone: "+44 20 7946 0958",
    email: "hello@refreshmocktails.co.uk",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "10:00am – 11:30pm" },
  { day: "Fri", time: "10:00am – 1:30am" },
  { day: "Sat", time: "9:00am – 1:30am" },
  { day: "Sun", time: "9:00am – 10:30pm" },
];

const socials = [
  { name: "Instagram", icon: "/images/instagram.png", url: "#" },
  { name: "X (Twitter)", icon: "/images/twitter.png", url: "#" },
  { name: "Facebook", icon: "/images/facebook.png", url: "#" },
];

const sliderLists = [
  {
    id: 1,
    name: "Citrus Mint Splash",
    image: "/images/drink1.png",
    title: "Freshness in Every Sip",
    description:
      "A lively blend of lime, mint, and sparkling soda crafted to awaken your senses and keep you refreshed all day.",
  },
  {
    id: 2,
    name: "Sunset Mango Cooler",
    image: "/images/drink2.png",
    title: "Sweet, Smooth, and Tropical",
    description:
      "Rich mango puree balanced with citrus notes creates a smooth tropical drink perfect for warm evenings.",
  },
  {
    id: 3,
    name: "Berry Frost Delight",
    image: "/images/drink3.png",
    title: "Chilled Berry Perfection",
    description:
      "A frosty fusion of strawberries, blueberries, and crushed ice delivering vibrant flavor and cool refreshment.",
  },
  {
    id: 4,
    name: "Lavender Citrus Dream",
    image: "/images/drink4.png",
    title: "Floral Elegance Meets Citrus Spark",
    description:
      "Soft lavender aroma combined with bright citrus tones makes this drink calming, fragrant, and unique.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  storeInfo,
  openingHours,
  socials,
  sliderLists,
};
