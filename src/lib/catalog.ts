export type CategoryKey = "home" | "men" | "women" | "kids" | "offers" | "links";
export type ProductCategory = "men" | "women" | "kids";
export type Category = ProductCategory;

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  poster: string;
  cover: string;
  description: string;
  sizes: string[];
  colors: string[];
  featured: boolean;
  offer: boolean;
  isNew: boolean;
  stock: number;
};

export const imageKitEndpoint = "https://ik.imagekit.io/luivuvevia";

export const appLinks = {
  website: "https://cavo-store.vercel.app/store",
  whatsapp: "https://wa.me/201221204322",
  telegram: "https://t.me/Cavo_store",
  instagram: "https://www.instagram.com/Cavo_mirror/",
  facebook: "https://www.facebook.com/share/18ahZ8oWVH/",
  tiktok: "https://www.tiktok.com/@cavo6159",
};

export const categoryCards = [
  { key: "men", poster: "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/thumb.webp", count: 36 },
  { key: "women", poster: "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/thumb.webp", count: 30 },
  { key: "offers", poster: "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-black-cat/thumb.webp", count: 22 },
  { key: "kids", poster: "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/thumb.webp", count: 0 },
] as const;

export const homeHighlights = {
  hero: "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/cover.webp",
  secondary: "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/cover.webp",
};

export const products: Product[] = [
  {
    "id": "alexander-mcqueen-white-black",
    "slug": "alexander-mcqueen-white-black",
    "title": "Alexander McQueen White / Black",
    "brand": "Alexander McQueen",
    "category": "men",
    "price": 3850,
    "originalPrice": 3200,
    "discount": 0,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/alexander-mcqueen/alexander-mcqueen-white-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "featured": true,
    "offer": false,
    "isNew": true,
    "stock": 3
  },
  {
    "id": "jordan-4-black-cat",
    "slug": "jordan-4-black-cat",
    "title": "Jordan 4 Black Cat",
    "brand": "Jordan 4",
    "category": "men",
    "price": 2190,
    "originalPrice": 3200,
    "discount": 32,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-black-cat/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-black-cat/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-black-cat/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-black-cat/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-black-cat/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-black-cat/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Black Cat"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "jordan-4-red-sand",
    "slug": "jordan-4-red-sand",
    "title": "Jordan 4 Red Sand",
    "brand": "Jordan 4",
    "category": "men",
    "price": 2250,
    "originalPrice": 3200,
    "discount": 30,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-red-sand/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-red-sand/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-red-sand/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-red-sand/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-red-sand/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/jordan-4/jordan-4-red-sand/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Red Sand"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "new-balance-530-blue",
    "slug": "new-balance-530-blue",
    "title": "New Balance 530 Blue",
    "brand": "New Balance 530",
    "category": "men",
    "price": 2290,
    "originalPrice": 3200,
    "discount": 28,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/new-balance-530/new-balance-530-blue/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/new-balance-530/new-balance-530-blue/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/new-balance-530/new-balance-530-blue/2.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/new-balance-530/new-balance-530-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/new-balance-530/new-balance-530-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Blue"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "travis-scott-black-white",
    "slug": "travis-scott-black-white",
    "title": "Travis Scott Black / White",
    "brand": "Travis Scott",
    "category": "men",
    "price": 2350,
    "originalPrice": 3200,
    "discount": 27,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-black-white/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-black-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-black-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "travis-scott-black",
    "slug": "travis-scott-black",
    "title": "Travis Scott Black",
    "brand": "Travis Scott",
    "category": "men",
    "price": 2390,
    "originalPrice": 3200,
    "discount": 25,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-black/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Black"
    ],
    "featured": true,
    "offer": true,
    "isNew": true,
    "stock": 8
  },
  {
    "id": "travis-scott-brown",
    "slug": "travis-scott-brown",
    "title": "Travis Scott Brown",
    "brand": "Travis Scott",
    "category": "men",
    "price": 2450,
    "originalPrice": 3200,
    "discount": 23,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-brown/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-brown/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-brown/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Brown"
    ],
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "travis-scott-brown-black",
    "slug": "travis-scott-brown-black",
    "title": "Travis Scott Brown / Black",
    "brand": "Travis Scott",
    "category": "men",
    "price": 2490,
    "originalPrice": 3200,
    "discount": 22,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-brown-black/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-brown-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-brown-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Brown",
      "Black"
    ],
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "travis-scott-green",
    "slug": "travis-scott-green",
    "title": "Travis Scott Green",
    "brand": "Travis Scott",
    "category": "men",
    "price": 2550,
    "originalPrice": 3200,
    "discount": 20,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-green/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "travis-scott-green",
    "slug": "travis-scott-green",
    "title": "Travis Scott Green",
    "brand": "Travis Scott",
    "category": "men",
    "price": 2590,
    "originalPrice": 3200,
    "discount": 19,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-green/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/travis-scott/travis-scott-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "asics-blue",
    "slug": "asics-blue",
    "title": "ASICS Blue",
    "brand": "ASICS",
    "category": "men",
    "price": 2650,
    "originalPrice": 3200,
    "discount": 17,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/asics/asics-blue/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/asics/asics-blue/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/asics/asics-blue/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/asics/asics-blue/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/asics/asics-blue/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/asics/asics-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/asics/asics-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 5
  },
  {
    "id": "air-force-beige-brown",
    "slug": "air-force-beige-brown",
    "title": "Air Force Beige / Brown",
    "brand": "Air Force",
    "category": "men",
    "price": 2690,
    "originalPrice": 3200,
    "discount": 16,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-beige-brown/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-beige-brown/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-beige-brown/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Beige",
      "Brown"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "air-force-beige-green",
    "slug": "air-force-beige-green",
    "title": "Air Force Beige / Green",
    "brand": "Air Force",
    "category": "men",
    "price": 2750,
    "originalPrice": 3200,
    "discount": 14,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-beige-green/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-beige-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-beige-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "air-force-gray-petrol",
    "slug": "air-force-gray-petrol",
    "title": "Air Force Gray / Petrol",
    "brand": "Air Force",
    "category": "men",
    "price": 2790,
    "originalPrice": 3200,
    "discount": 13,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gray-petrol/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gray-petrol/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gray-petrol/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Gray",
      "Petrol"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "air-force-gucci",
    "slug": "air-force-gucci",
    "title": "Air Force Gucci",
    "brand": "Air Force",
    "category": "men",
    "price": 2850,
    "originalPrice": 3200,
    "discount": 11,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gucci/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gucci/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gucci/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Gucci"
    ],
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "air-force-undefeated",
    "slug": "air-force-undefeated",
    "title": "Air Force Undefeated",
    "brand": "Air Force",
    "category": "men",
    "price": 2890,
    "originalPrice": 3200,
    "discount": 10,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-undefeated/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-undefeated/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-undefeated/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Undefeated"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 10
  },
  {
    "id": "air-force-black",
    "slug": "air-force-black",
    "title": "Air Force Black",
    "brand": "Air Force",
    "category": "men",
    "price": 2950,
    "originalPrice": 3200,
    "discount": 8,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-black/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-black/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-black/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-black/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Black"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "air-force-blue",
    "slug": "air-force-blue",
    "title": "Air Force Blue",
    "brand": "Air Force",
    "category": "men",
    "price": 3000,
    "originalPrice": 3200,
    "discount": 6,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-blue/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "air-force-brown",
    "slug": "air-force-brown",
    "title": "Air Force Brown",
    "brand": "Air Force",
    "category": "men",
    "price": 2150,
    "originalPrice": 3200,
    "discount": 33,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-brown/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-brown/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-brown/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Brown"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "air-force-coffee-black",
    "slug": "air-force-coffee-black",
    "title": "Air Force Coffee / Black",
    "brand": "Air Force",
    "category": "men",
    "price": 2190,
    "originalPrice": 3200,
    "discount": 32,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-coffee-black/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-coffee-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-coffee-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Coffee",
      "Black"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "air-force-gray-black",
    "slug": "air-force-gray-black",
    "title": "Air Force Gray / Black",
    "brand": "Air Force",
    "category": "men",
    "price": 2250,
    "originalPrice": 3200,
    "discount": 30,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gray-black/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gray-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-gray-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "featured": false,
    "offer": true,
    "isNew": true,
    "stock": 7
  },
  {
    "id": "air-force-the-north-face",
    "slug": "air-force-the-north-face",
    "title": "Air Force The North Face",
    "brand": "Air Force",
    "category": "men",
    "price": 2290,
    "originalPrice": 3200,
    "discount": 28,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-the-north-face/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-the-north-face/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-the-north-face/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "The North Face"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "air-force-white",
    "slug": "air-force-white",
    "title": "Air Force White",
    "brand": "Air Force",
    "category": "men",
    "price": 2350,
    "originalPrice": 3200,
    "discount": 27,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-white/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-white/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-white/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/air-force/air-force-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "White"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "campus-black-white",
    "slug": "campus-black-white",
    "title": "Campus Black / White",
    "brand": "Campus",
    "category": "men",
    "price": 2390,
    "originalPrice": 3200,
    "discount": 25,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/campus/campus-black-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/campus/campus-black-white/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/campus/campus-black-white/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/campus/campus-black-white/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/campus/campus-black-white/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/campus/campus-black-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/campus/campus-black-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "dunk-gray",
    "slug": "dunk-gray",
    "title": "Dunk Gray",
    "brand": "Dunk",
    "category": "men",
    "price": 2450,
    "originalPrice": 3200,
    "discount": 23,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-gray/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-gray/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-gray/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-gray/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-gray/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-gray/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-gray/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Gray"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "dunk-green",
    "slug": "dunk-green",
    "title": "Dunk Green",
    "brand": "Dunk",
    "category": "men",
    "price": 2490,
    "originalPrice": 3200,
    "discount": 22,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-green/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-green/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-green/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-green/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 4
  },
  {
    "id": "dunk-panda",
    "slug": "dunk-panda",
    "title": "Dunk Panda",
    "brand": "Dunk",
    "category": "men",
    "price": 2550,
    "originalPrice": 3200,
    "discount": 20,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-panda/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-panda/1.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-panda/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/dunk/dunk-panda/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Panda"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "on-cloud-black-white",
    "slug": "on-cloud-black-white",
    "title": "On Cloud Black / White",
    "brand": "On Cloud",
    "category": "men",
    "price": 2590,
    "originalPrice": 3200,
    "discount": 19,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/on-cloud/on-cloud-black-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/on-cloud/on-cloud-black-white/1.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/on-cloud/on-cloud-black-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/on-cloud/on-cloud-black-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "samba-black",
    "slug": "samba-black",
    "title": "Samba Black",
    "brand": "Samba",
    "category": "men",
    "price": 2650,
    "originalPrice": 3200,
    "discount": 17,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-black/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-black/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-black/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-black/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Black"
    ],
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "samba-blue",
    "slug": "samba-blue",
    "title": "Samba Blue",
    "brand": "Samba",
    "category": "men",
    "price": 2690,
    "originalPrice": 3200,
    "discount": 16,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-blue/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-blue/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-blue/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-blue/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-blue/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "samba-green",
    "slug": "samba-green",
    "title": "Samba Green",
    "brand": "Samba",
    "category": "men",
    "price": 2750,
    "originalPrice": 3200,
    "discount": 14,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 9
  },
  {
    "id": "samba-green",
    "slug": "samba-green",
    "title": "Samba Green",
    "brand": "Samba",
    "category": "men",
    "price": 2790,
    "originalPrice": 3200,
    "discount": 13,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "samba-gray",
    "slug": "samba-gray",
    "title": "Samba Gray",
    "brand": "Samba",
    "category": "men",
    "price": 2850,
    "originalPrice": 3200,
    "discount": 11,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-gray/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-gray/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-gray/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Gray"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "samba-pink",
    "slug": "samba-pink",
    "title": "Samba Pink",
    "brand": "Samba",
    "category": "men",
    "price": 2890,
    "originalPrice": 3200,
    "discount": 10,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-pink/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-pink/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-pink/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-pink/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-pink/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-pink/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-pink/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Pink"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "samba-red",
    "slug": "samba-red",
    "title": "Samba Red",
    "brand": "Samba",
    "category": "men",
    "price": 2950,
    "originalPrice": 3200,
    "discount": 8,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-red/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-red/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-red/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "Red"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "samba-white",
    "slug": "samba-white",
    "title": "Samba White",
    "brand": "Samba",
    "category": "men",
    "price": 3000,
    "originalPrice": 3200,
    "discount": 6,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/4.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/5.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/men/samba/samba-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "White"
    ],
    "featured": true,
    "offer": false,
    "isNew": true,
    "stock": 6
  },
  {
    "id": "alexander-mcqueen-white-black",
    "slug": "alexander-mcqueen-white-black",
    "title": "Alexander McQueen White / Black",
    "brand": "Alexander McQueen",
    "category": "women",
    "price": 3850,
    "originalPrice": 3200,
    "discount": 0,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/alexander-mcqueen/alexander-mcqueen-white-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "jordan-4-black-cat",
    "slug": "jordan-4-black-cat",
    "title": "Jordan 4 Black Cat",
    "brand": "Jordan 4",
    "category": "women",
    "price": 2190,
    "originalPrice": 3200,
    "discount": 32,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-black-cat/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-black-cat/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-black-cat/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-black-cat/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-black-cat/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-black-cat/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Black Cat"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "jordan-4-red-sand",
    "slug": "jordan-4-red-sand",
    "title": "Jordan 4 Red Sand",
    "brand": "Jordan 4",
    "category": "women",
    "price": 2250,
    "originalPrice": 3200,
    "discount": 30,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-red-sand/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-red-sand/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-red-sand/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-red-sand/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-red-sand/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/jordan-4/jordan-4-red-sand/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Red Sand"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "new-balance-530-blue",
    "slug": "new-balance-530-blue",
    "title": "New Balance 530 Blue",
    "brand": "New Balance 530",
    "category": "women",
    "price": 2290,
    "originalPrice": 3200,
    "discount": 28,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/new-balance-530/new-balance-530-blue/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/new-balance-530/new-balance-530-blue/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/new-balance-530/new-balance-530-blue/2.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/new-balance-530/new-balance-530-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/new-balance-530/new-balance-530-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "asics-blue",
    "slug": "asics-blue",
    "title": "ASICS Blue",
    "brand": "ASICS",
    "category": "women",
    "price": 2350,
    "originalPrice": 3200,
    "discount": 27,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/asics/asics-blue/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/asics/asics-blue/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/asics/asics-blue/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/asics/asics-blue/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/asics/asics-blue/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/asics/asics-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/asics/asics-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": true,
    "isNew": true,
    "stock": 3
  },
  {
    "id": "air-force-beige-brown",
    "slug": "air-force-beige-brown",
    "title": "Air Force Beige / Brown",
    "brand": "Air Force",
    "category": "women",
    "price": 2390,
    "originalPrice": 3200,
    "discount": 25,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-beige-brown/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-beige-brown/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-beige-brown/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Beige",
      "Brown"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "air-force-beige-green",
    "slug": "air-force-beige-green",
    "title": "Air Force Beige / Green",
    "brand": "Air Force",
    "category": "women",
    "price": 2450,
    "originalPrice": 3200,
    "discount": 23,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-beige-green/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-beige-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-beige-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "air-force-gray-petrol",
    "slug": "air-force-gray-petrol",
    "title": "Air Force Gray / Petrol",
    "brand": "Air Force",
    "category": "women",
    "price": 2490,
    "originalPrice": 3200,
    "discount": 22,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gray-petrol/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gray-petrol/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gray-petrol/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Gray",
      "Petrol"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "air-force-gucci",
    "slug": "air-force-gucci",
    "title": "Air Force Gucci",
    "brand": "Air Force",
    "category": "women",
    "price": 2550,
    "originalPrice": 3200,
    "discount": 20,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gucci/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gucci/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gucci/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Gucci"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "air-force-undefeated",
    "slug": "air-force-undefeated",
    "title": "Air Force Undefeated",
    "brand": "Air Force",
    "category": "women",
    "price": 2590,
    "originalPrice": 3200,
    "discount": 19,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-undefeated/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-undefeated/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-undefeated/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Undefeated"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 8
  },
  {
    "id": "air-force-black",
    "slug": "air-force-black",
    "title": "Air Force Black",
    "brand": "Air Force",
    "category": "women",
    "price": 2650,
    "originalPrice": 3200,
    "discount": 17,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-black/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-black/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-black/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-black/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Black"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "air-force-blue",
    "slug": "air-force-blue",
    "title": "Air Force Blue",
    "brand": "Air Force",
    "category": "women",
    "price": 2690,
    "originalPrice": 3200,
    "discount": 16,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-blue/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "air-force-brown",
    "slug": "air-force-brown",
    "title": "Air Force Brown",
    "brand": "Air Force",
    "category": "women",
    "price": 2750,
    "originalPrice": 3200,
    "discount": 14,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-brown/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-brown/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-brown/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Brown"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "air-force-coffee-black",
    "slug": "air-force-coffee-black",
    "title": "Air Force Coffee / Black",
    "brand": "Air Force",
    "category": "women",
    "price": 2790,
    "originalPrice": 3200,
    "discount": 13,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-coffee-black/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-coffee-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-coffee-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Coffee",
      "Black"
    ],
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "air-force-gray-black",
    "slug": "air-force-gray-black",
    "title": "Air Force Gray / Black",
    "brand": "Air Force",
    "category": "women",
    "price": 2850,
    "originalPrice": 3200,
    "discount": 11,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gray-black/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gray-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-gray-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 5
  },
  {
    "id": "air-force-the-north-face",
    "slug": "air-force-the-north-face",
    "title": "Air Force The North Face",
    "brand": "Air Force",
    "category": "women",
    "price": 2890,
    "originalPrice": 3200,
    "discount": 10,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-the-north-face/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-the-north-face/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-the-north-face/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "The North Face"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "air-force-white",
    "slug": "air-force-white",
    "title": "Air Force White",
    "brand": "Air Force",
    "category": "women",
    "price": 2950,
    "originalPrice": 3200,
    "discount": 8,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-white/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-white/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-white/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/air-force/air-force-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "White"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "campus-black-white",
    "slug": "campus-black-white",
    "title": "Campus Black / White",
    "brand": "Campus",
    "category": "women",
    "price": 3000,
    "originalPrice": 3200,
    "discount": 6,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/campus/campus-black-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/campus/campus-black-white/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/campus/campus-black-white/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/campus/campus-black-white/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/campus/campus-black-white/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/campus/campus-black-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/campus/campus-black-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "dunk-gray",
    "slug": "dunk-gray",
    "title": "Dunk Gray",
    "brand": "Dunk",
    "category": "women",
    "price": 2150,
    "originalPrice": 3200,
    "discount": 33,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-gray/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-gray/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-gray/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-gray/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-gray/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-gray/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-gray/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Gray"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "dunk-green",
    "slug": "dunk-green",
    "title": "Dunk Green",
    "brand": "Dunk",
    "category": "women",
    "price": 2190,
    "originalPrice": 3200,
    "discount": 32,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-green/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-green/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-green/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-green/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": true,
    "isNew": true,
    "stock": 10
  },
  {
    "id": "dunk-panda",
    "slug": "dunk-panda",
    "title": "Dunk Panda",
    "brand": "Dunk",
    "category": "women",
    "price": 2250,
    "originalPrice": 3200,
    "discount": 30,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-panda/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-panda/1.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-panda/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/dunk/dunk-panda/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Panda"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "on-cloud-black-white",
    "slug": "on-cloud-black-white",
    "title": "On Cloud Black / White",
    "brand": "On Cloud",
    "category": "women",
    "price": 2290,
    "originalPrice": 3200,
    "discount": 28,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/on-cloud/on-cloud-black-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/on-cloud/on-cloud-black-white/1.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/on-cloud/on-cloud-black-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/on-cloud/on-cloud-black-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "samba-black",
    "slug": "samba-black",
    "title": "Samba Black",
    "brand": "Samba",
    "category": "women",
    "price": 2350,
    "originalPrice": 3200,
    "discount": 27,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-black/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-black/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-black/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-black/3.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-black/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-black/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Black"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "samba-blue",
    "slug": "samba-blue",
    "title": "Samba Blue",
    "brand": "Samba",
    "category": "women",
    "price": 2390,
    "originalPrice": 3200,
    "discount": 25,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-blue/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-blue/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-blue/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-blue/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-blue/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-blue/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-blue/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "samba-green",
    "slug": "samba-green",
    "title": "Samba Green",
    "brand": "Samba",
    "category": "women",
    "price": 2450,
    "originalPrice": 3200,
    "discount": 23,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 7
  },
  {
    "id": "samba-green",
    "slug": "samba-green",
    "title": "Samba Green",
    "brand": "Samba",
    "category": "women",
    "price": 2490,
    "originalPrice": 3200,
    "discount": 22,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-green/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Green"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "samba-gray",
    "slug": "samba-gray",
    "title": "Samba Gray",
    "brand": "Samba",
    "category": "women",
    "price": 2550,
    "originalPrice": 3200,
    "discount": 20,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-gray/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-gray/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-gray/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Gray"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "samba-pink",
    "slug": "samba-pink",
    "title": "Samba Pink",
    "brand": "Samba",
    "category": "women",
    "price": 2590,
    "originalPrice": 3200,
    "discount": 19,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-pink/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-pink/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-pink/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-pink/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-pink/4.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-pink/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-pink/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Pink"
    ],
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "samba-red",
    "slug": "samba-red",
    "title": "Samba Red",
    "brand": "Samba",
    "category": "women",
    "price": 2650,
    "originalPrice": 3200,
    "discount": 17,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-red/cover.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-red/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-red/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "Red"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "samba-white",
    "slug": "samba-white",
    "title": "Samba White",
    "brand": "Samba",
    "category": "women",
    "price": 2690,
    "originalPrice": 3200,
    "discount": 16,
    "images": [
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/cover.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/1.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/2.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/3.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/4.webp",
      "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/5.webp"
    ],
    "poster": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/thumb.webp",
    "cover": "https://ik.imagekit.io/luivuvevia/cavo/products/women/samba/samba-white/cover.webp",
    "description": "Premium mirror-quality build with a clean luxury silhouette, cushioned comfort, and a fast everyday flex.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "White"
    ],
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 4
  }
];

export const featuredProducts = products.filter((product) => product.featured).slice(0, 10);
export const offerProducts = products.filter((product) => product.offer).slice(0, 10);
export const menProducts = products.filter((product) => product.category === "men");
export const womenProducts = products.filter((product) => product.category === "women");
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const getProductsByCategory = (category: ProductCategory) => products.filter((product) => product.category === category);
