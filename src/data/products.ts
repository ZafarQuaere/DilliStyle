export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    description: "A timeless oxford cotton shirt perfect for formal and semi-formal occasions.",
    price: 49.99,
    image: "/images/products/mens/pexels-foadshariyati-31618286.jpg",
    category: "Shirts",
    featured: true
  },
  {
    id: 2,
    name: "Premium Slim Fit T-Shirt",
    description: "Comfortable slim fit t-shirt made from 100% organic cotton.",
    price: 24.99,
    image: "/images/products/mens/pexels-nguy-n-ti-n-th-nh-2150376175-31608358.jpg",
    category: "T-Shirts"
  },
  {
    id: 3,
    name: "Stretch Denim Jeans",
    description: "Classic blue denim jeans with modern stretch comfort.",
    price: 59.99,
    image: "/images/products/mens/pexels-isipixel-31628696.jpg",
    category: "Jeans",
    featured: true
  },
  {
    id: 4,
    name: "Tailored Suit Trousers",
    description: "Elegant formal trousers suitable for office and special occasions.",
    price: 79.99,
    image: "/images/products/mens/pexels-nato-2151330923-31647345.jpg",
    category: "Formals"
  },
  {
    id: 5,
    name: "Premium Cotton Vest",
    description: "Soft and comfortable cotton vest for everyday wear.",
    price: 19.99,
    image: "/images/products/mens/pexels-passengerslover-31563470.jpg",
    category: "Vest"
  },
  {
    id: 6,
    name: "Boxers 3-Pack",
    description: "Comfortable boxers made from breathable fabric.",
    price: 29.99,
    image: "/images/products/mens/pexels-casnafu-31530118.jpg",
    category: "Briefs"
  },
  {
    id: 7,
    name: "Casual Bermuda Shorts",
    description: "Stylish bermuda shorts perfect for summer days.",
    price: 34.99,
    image: "/images/products/mens/pexels-cesar-o-neill-26650613-31559338.jpg",
    category: "Bermudas",
    featured: true
  },
  {
    id: 8,
    name: "Sport Shorts",
    description: "Lightweight and quick-drying sport shorts ideal for workouts.",
    price: 29.99,
    image: "/images/products/mens/pexels-madknoxxdeluxe-31642269.jpg",
    category: "Shorts"
  },
  {
    id: 9,
    name: "Genuine Leather Belt",
    description: "Premium leather belt with classic metal buckle.",
    price: 39.99,
    image: "/images/products/mens/pexels-chloekalaartist-1043473.jpg",
    category: "Belt"
  },
  {
    id: 10,
    name: "Slim Leather Wallet",
    description: "Sleek leather wallet with multiple card slots and bill compartment.",
    price: 45.99,
    image: "/images/products/mens/pexels-sanjai-sudheesh-245699347-31597588.jpg",
    category: "Purse"
  },
  {
    id: 11,
    name: "Linen Summer Shirt",
    description: "Breathable linen shirt perfect for hot summer days.",
    price: 54.99,
    image: "/images/products/mens/pexels-soft__work__-1913651507-31642814.jpg",
    category: "Shirts"
  },
  {
    id: 12,
    name: "Graphic Print T-Shirt",
    description: "Stylish graphic print t-shirt for casual outings.",
    price: 27.99,
    image: "/images/products/mens/pexels-couleur-31637490.jpg",
    category: "T-Shirts"
  }
];

export const categories = [
  "All",
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Formals",
  "Vest",
  "Briefs",
  "Shorts",
  "Bermudas",
  "Belt",
  "Purse"
]; 