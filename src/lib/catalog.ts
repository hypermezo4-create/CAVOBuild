export type Category = "men" | "women" | "kids";

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  variant: string;
  category: Category;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  poster: string;
  description: string;
  sizes: string[];
  colors: string[];
  featured: boolean;
  offer: boolean;
  isNew: boolean;
  stock: number;
};

export const products: Product[] = [
  {
    "id": "men-alexander-mcqueen-w-b",
    "slug": "men-alexander-mcqueen-w-b",
    "title": "Alexander McQueen White / Black",
    "brand": "Alexander McQueen",
    "variant": "White / Black",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/Alexander_McQueen/w_b/Alexander_McQueen1.webp",
      "/catalog/images/men/Alexander_McQueen/w_b/Alexander_McQueen2.webp",
      "/catalog/images/men/Alexander_McQueen/w_b/Alexander_McQueen3.webp",
      "/catalog/images/men/Alexander_McQueen/w_b/Alexander_McQueen4.webp"
    ],
    "poster": "/catalog/images/men/Alexander_McQueen/w_b/Alexander_McQueen1.webp",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "men-jordan4-black-cat",
    "slug": "men-jordan4-black-cat",
    "title": "Jordan 4 Retro Black Cat",
    "brand": "Jordan 4",
    "variant": "Black Cat",
    "category": "men",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/men/Jordan4/black_cat/black_cat1.jpg",
      "/catalog/images/men/Jordan4/black_cat/black_cat2.jpg",
      "/catalog/images/men/Jordan4/black_cat/black_cat3.jpg",
      "/catalog/images/men/Jordan4/black_cat/black_cat4.jpg"
    ],
    "poster": "/catalog/images/men/Jordan4/black_cat/black_cat1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "men-jordan4-red-sander",
    "slug": "men-jordan4-red-sander",
    "title": "Jordan 4 Retro Red Sand",
    "brand": "Jordan 4",
    "variant": "Red Sand",
    "category": "men",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/men/Jordan4/red_sander/red_sander1.jpg",
      "/catalog/images/men/Jordan4/red_sander/red_sander2.jpg",
      "/catalog/images/men/Jordan4/red_sander/red_sander3.jpg",
      "/catalog/images/men/Jordan4/red_sander/red_sander4.jpg"
    ],
    "poster": "/catalog/images/men/Jordan4/red_sander/red_sander1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "men-newbalance-530-blue",
    "slug": "men-newbalance-530-blue",
    "title": "New Balance 530 Blue",
    "brand": "New Balance 530",
    "variant": "Blue",
    "category": "men",
    "price": 2590,
    "originalPrice": 3870,
    "discount": 33,
    "images": [
      "/catalog/images/men/Newbalance_530/blue/nb_blue1.jpg",
      "/catalog/images/men/Newbalance_530/blue/nb_blue2.jpg",
      "/catalog/images/men/Newbalance_530/blue/nb_blue3.jpg"
    ],
    "poster": "/catalog/images/men/Newbalance_530/blue/nb_blue1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": true,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "men-travis-scott-b-w",
    "slug": "men-travis-scott-b-w",
    "title": "Travis Scott Low Black / White",
    "brand": "Travis Scott",
    "variant": "Black / White",
    "category": "men",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/men/Travis_Scott/b_w/Travis_Scott.png"
    ],
    "poster": "/catalog/images/men/Travis_Scott/b_w/Travis_Scott.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "isNew": true,
    "stock": 3
  },
  {
    "id": "men-travis-scott-black-big",
    "slug": "men-travis-scott-black-big",
    "title": "Travis Scott Low Black",
    "brand": "Travis Scott",
    "variant": "Black",
    "category": "men",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/men/Travis_Scott/black_big/Travis_Scott.png"
    ],
    "poster": "/catalog/images/men/Travis_Scott/black_big/Travis_Scott.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 4
  },
  {
    "id": "men-travis-scott-brown",
    "slug": "men-travis-scott-brown",
    "title": "Travis Scott Low Brown",
    "brand": "Travis Scott",
    "variant": "Brown",
    "category": "men",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/men/Travis_Scott/brown/Travis_Scott.png"
    ],
    "poster": "/catalog/images/men/Travis_Scott/brown/Travis_Scott.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": false,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "men-travis-scott-brown-black",
    "slug": "men-travis-scott-brown-black",
    "title": "Travis Scott Low Brown / Black",
    "brand": "Travis Scott",
    "variant": "Brown / Black",
    "category": "men",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/Travis_Scott/brown_black/Travis_Scott.png"
    ],
    "poster": "/catalog/images/men/Travis_Scott/brown_black/Travis_Scott.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "men-travis-scott-green-big",
    "slug": "men-travis-scott-green-big",
    "title": "Travis Scott Low Green",
    "brand": "Travis Scott",
    "variant": "Green",
    "category": "men",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/men/Travis_Scott/green_big/Travis_Scott.png"
    ],
    "poster": "/catalog/images/men/Travis_Scott/green_big/Travis_Scott.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "men-travis-scott-gren-big",
    "slug": "men-travis-scott-gren-big",
    "title": "Travis Scott Low Green",
    "brand": "Travis Scott",
    "variant": "Green",
    "category": "men",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/men/Travis_Scott/gren_big/Travis_Scott.png"
    ],
    "poster": "/catalog/images/men/Travis_Scott/gren_big/Travis_Scott.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "id": "men-aciss-blue",
    "slug": "men-aciss-blue",
    "title": "ASICS Blue",
    "brand": "ASICS",
    "variant": "Blue",
    "category": "men",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/aciss/blue/assic_1.jpg",
      "/catalog/images/men/aciss/blue/assic_2.jpg",
      "/catalog/images/men/aciss/blue/assic_3.jpg",
      "/catalog/images/men/aciss/blue/assic_4.jpg",
      "/catalog/images/men/aciss/blue/assic_5.jpg"
    ],
    "poster": "/catalog/images/men/aciss/blue/assic_1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 6
  },
  {
    "id": "men-air-force-beige-brown",
    "slug": "men-air-force-beige-brown",
    "title": "Air Force 1 Beige / Brown",
    "brand": "Air Force",
    "variant": "Beige / Brown",
    "category": "men",
    "price": 2490,
    "originalPrice": 3870,
    "discount": 36,
    "images": [
      "/catalog/images/men/air_force/Beige_brown/Beige_brown.png"
    ],
    "poster": "/catalog/images/men/air_force/Beige_brown/Beige_brown.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "men-air-force-beige-green",
    "slug": "men-air-force-beige-green",
    "title": "Air Force 1 Beige / Green",
    "brand": "Air Force",
    "variant": "Beige / Green",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/air_force/Beige_green/Beige_green.png"
    ],
    "poster": "/catalog/images/men/air_force/Beige_green/Beige_green.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 10
  },
  {
    "id": "men-air-force-gray-petrol",
    "slug": "men-air-force-gray-petrol",
    "title": "Air Force 1 Gray / Petrol",
    "brand": "Air Force",
    "variant": "Gray / Petrol",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/air_force/Gray_petrol/Gray_petrol.png"
    ],
    "poster": "/catalog/images/men/air_force/Gray_petrol/Gray_petrol.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 10
  },
  {
    "id": "men-air-force-air-force-gucci",
    "slug": "men-air-force-air-force-gucci",
    "title": "Air Force 1 Gucci",
    "brand": "Air Force",
    "variant": "Gucci",
    "category": "men",
    "price": 2590,
    "originalPrice": 3870,
    "discount": 33,
    "images": [
      "/catalog/images/men/air_force/air_force_gucci/gucci.png"
    ],
    "poster": "/catalog/images/men/air_force/air_force_gucci/gucci.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "isNew": true,
    "stock": 8
  },
  {
    "id": "men-air-force-air-force-undeeated",
    "slug": "men-air-force-air-force-undeeated",
    "title": "Air Force 1 Undefeated",
    "brand": "Air Force",
    "variant": "Undefeated",
    "category": "men",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/men/air_force/air_force_undeeated/air_force_undeeated.png"
    ],
    "poster": "/catalog/images/men/air_force/air_force_undeeated/air_force_undeeated.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": true,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "men-air-force-b",
    "slug": "men-air-force-b",
    "title": "Air Force 1 Black",
    "brand": "Air Force",
    "variant": "Black",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/air_force/b/air_force1.jpg",
      "/catalog/images/men/air_force/b/air_force2.jpg",
      "/catalog/images/men/air_force/b/air_force3.jpg",
      "/catalog/images/men/air_force/b/air_force4.jpg"
    ],
    "poster": "/catalog/images/men/air_force/b/air_force1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 10
  },
  {
    "id": "men-air-force-berlue",
    "slug": "men-air-force-berlue",
    "title": "Air Force 1 Blue",
    "brand": "Air Force",
    "variant": "Blue",
    "category": "men",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/men/air_force/berlue/betrule.png"
    ],
    "poster": "/catalog/images/men/air_force/berlue/betrule.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": false,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "men-air-force-brwon-wajnzarari",
    "slug": "men-air-force-brwon-wajnzarari",
    "title": "Air Force 1 Brown",
    "brand": "Air Force",
    "variant": "Brown",
    "category": "men",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/men/air_force/brwon_Wajnzarari/brwen.png"
    ],
    "poster": "/catalog/images/men/air_force/brwon_Wajnzarari/brwen.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": false,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "men-air-force-cofe-black",
    "slug": "men-air-force-cofe-black",
    "title": "Air Force 1 Coffee / Black",
    "brand": "Air Force",
    "variant": "Coffee / Black",
    "category": "men",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/men/air_force/cofe_black/cofe_black.png"
    ],
    "poster": "/catalog/images/men/air_force/cofe_black/cofe_black.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "isNew": true,
    "stock": 5
  },
  {
    "id": "men-air-force-grey-black",
    "slug": "men-air-force-grey-black",
    "title": "Air Force 1 Gray / Black",
    "brand": "Air Force",
    "variant": "Gray / Black",
    "category": "men",
    "price": 2590,
    "originalPrice": 3870,
    "discount": 33,
    "images": [
      "/catalog/images/men/air_force/grey_black/grey_black.png"
    ],
    "poster": "/catalog/images/men/air_force/grey_black/grey_black.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "men-air-force-the-northe-face",
    "slug": "men-air-force-the-northe-face",
    "title": "Air Force 1 North Face",
    "brand": "Air Force",
    "variant": "North Face",
    "category": "men",
    "price": 2890,
    "originalPrice": 3870,
    "discount": 25,
    "images": [
      "/catalog/images/men/air_force/the_northe_face/the_northe_face.png"
    ],
    "poster": "/catalog/images/men/air_force/the_northe_face/the_northe_face.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
    "sizes": [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "colors": [
      "North Face"
    ],
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 11
  },
  {
    "id": "men-air-force-w",
    "slug": "men-air-force-w",
    "title": "Air Force 1 White",
    "brand": "Air Force",
    "variant": "White",
    "category": "men",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/air_force/w/air_force1.jpg",
      "/catalog/images/men/air_force/w/air_force2.jpg",
      "/catalog/images/men/air_force/w/air_force3.jpg",
      "/catalog/images/men/air_force/w/air_force4.jpg"
    ],
    "poster": "/catalog/images/men/air_force/w/air_force1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": false,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "men-cambos-cambos-black-withe",
    "slug": "men-cambos-cambos-black-withe",
    "title": "Campus Black / White",
    "brand": "Campus",
    "variant": "Black / White",
    "category": "men",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/cambos/cambos_black_withe/cambos1.jpg",
      "/catalog/images/men/cambos/cambos_black_withe/cambos2.jpg",
      "/catalog/images/men/cambos/cambos_black_withe/cambos3.jpg",
      "/catalog/images/men/cambos/cambos_black_withe/cambos4.jpg",
      "/catalog/images/men/cambos/cambos_black_withe/cambos5.jpg"
    ],
    "poster": "/catalog/images/men/cambos/cambos_black_withe/cambos1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 6
  },
  {
    "id": "men-dank-gray",
    "slug": "men-dank-gray",
    "title": "Dunk Gray",
    "brand": "Dunk",
    "variant": "Gray",
    "category": "men",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/dank/gray/dank_gray1.jpg",
      "/catalog/images/men/dank/gray/dank_gray2.jpg",
      "/catalog/images/men/dank/gray/dank_gray3.jpg",
      "/catalog/images/men/dank/gray/dank_gray4.jpg",
      "/catalog/images/men/dank/gray/dank_gray5.jpg"
    ],
    "poster": "/catalog/images/men/dank/gray/dank_gray1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "isNew": true,
    "stock": 6
  },
  {
    "id": "men-dank-green",
    "slug": "men-dank-green",
    "title": "Dunk Green",
    "brand": "Dunk",
    "variant": "Green",
    "category": "men",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/dank/green/dank_green1.jpg",
      "/catalog/images/men/dank/green/dank_green2.jpg",
      "/catalog/images/men/dank/green/dank_green3.jpg",
      "/catalog/images/men/dank/green/dank_green4.jpg"
    ],
    "poster": "/catalog/images/men/dank/green/dank_green1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 6
  },
  {
    "id": "men-dank-panda",
    "slug": "men-dank-panda",
    "title": "Dunk Panda",
    "brand": "Dunk",
    "variant": "Panda",
    "category": "men",
    "price": 2890,
    "originalPrice": 3870,
    "discount": 25,
    "images": [
      "/catalog/images/men/dank/panda/dank_panda1.jpg",
      "/catalog/images/men/dank/panda/dank_panda2.webp"
    ],
    "poster": "/catalog/images/men/dank/panda/dank_panda1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 11
  },
  {
    "id": "men-one-cloud-black-withe",
    "slug": "men-one-cloud-black-withe",
    "title": "On Cloud Black / White",
    "brand": "On Cloud",
    "variant": "Black / White",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/one_cloud/black_withe/b_w1.jpg",
      "/catalog/images/men/one_cloud/black_withe/b_w2.jpg"
    ],
    "poster": "/catalog/images/men/one_cloud/black_withe/b_w1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "id": "men-samba-b",
    "slug": "men-samba-b",
    "title": "Samba Black",
    "brand": "Samba",
    "variant": "Black",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/samba/b/smaba_b1.jpg",
      "/catalog/images/men/samba/b/smaba_b2.jpg",
      "/catalog/images/men/samba/b/smaba_b3.jpg",
      "/catalog/images/men/samba/b/smaba_b4.jpg"
    ],
    "poster": "/catalog/images/men/samba/b/smaba_b1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 10
  },
  {
    "id": "men-samba-blue",
    "slug": "men-samba-blue",
    "title": "Samba Blue",
    "brand": "Samba",
    "variant": "Blue",
    "category": "men",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/samba/blue/smaba_blue1.jpg",
      "/catalog/images/men/samba/blue/smaba_blue2.jpg",
      "/catalog/images/men/samba/blue/smaba_blue3.jpg",
      "/catalog/images/men/samba/blue/smaba_blue4.jpg",
      "/catalog/images/men/samba/blue/smaba_blue5.jpg"
    ],
    "poster": "/catalog/images/men/samba/blue/smaba_blue1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": false,
    "isNew": true,
    "stock": 6
  },
  {
    "id": "men-samba-g",
    "slug": "men-samba-g",
    "title": "Samba Green",
    "brand": "Samba",
    "variant": "Green",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/samba/g/smaba_g1.jpg",
      "/catalog/images/men/samba/g/smaba_g2.jpg",
      "/catalog/images/men/samba/g/smaba_g3.jpg",
      "/catalog/images/men/samba/g/smaba_g4.jpg",
      "/catalog/images/men/samba/g/smaba_g5.jpg"
    ],
    "poster": "/catalog/images/men/samba/g/smaba_g1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "id": "men-samba-green",
    "slug": "men-samba-green",
    "title": "Samba Green",
    "brand": "Samba",
    "variant": "Green",
    "category": "men",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/men/samba/green/samba_green.png"
    ],
    "poster": "/catalog/images/men/samba/green/samba_green.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": true,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "men-samba-grey",
    "slug": "men-samba-grey",
    "title": "Samba Gray",
    "brand": "Samba",
    "variant": "Gray",
    "category": "men",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/men/samba/grey/smaba_gray.png"
    ],
    "poster": "/catalog/images/men/samba/grey/smaba_gray.png",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "men-samba-p",
    "slug": "men-samba-p",
    "title": "Samba Pink",
    "brand": "Samba",
    "variant": "Pink",
    "category": "men",
    "price": 2490,
    "originalPrice": 3870,
    "discount": 36,
    "images": [
      "/catalog/images/men/samba/p/smaba_p1.jpg",
      "/catalog/images/men/samba/p/smaba_p2.jpg",
      "/catalog/images/men/samba/p/smaba_p3.jpg",
      "/catalog/images/men/samba/p/smaba_p4.jpg",
      "/catalog/images/men/samba/p/smaba_p5.jpg"
    ],
    "poster": "/catalog/images/men/samba/p/smaba_p1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "stock": 7
  },
  {
    "id": "men-samba-red",
    "slug": "men-samba-red",
    "title": "Samba Red",
    "brand": "Samba",
    "variant": "Red",
    "category": "men",
    "price": 2590,
    "originalPrice": 3870,
    "discount": 33,
    "images": [
      "/catalog/images/men/samba/red/smaba_red.jpeg"
    ],
    "poster": "/catalog/images/men/samba/red/smaba_red.jpeg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "isNew": true,
    "stock": 8
  },
  {
    "id": "men-samba-w",
    "slug": "men-samba-w",
    "title": "Samba White",
    "brand": "Samba",
    "variant": "White",
    "category": "men",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/men/samba/w/smaba_w1.jpg",
      "/catalog/images/men/samba/w/smaba_w2.jpg",
      "/catalog/images/men/samba/w/smaba_w3.jpg",
      "/catalog/images/men/samba/w/smaba_w4.jpg",
      "/catalog/images/men/samba/w/smaba_w5.jpg",
      "/catalog/images/men/samba/w/smaba_w6.jpg"
    ],
    "poster": "/catalog/images/men/samba/w/smaba_w1.jpg",
    "description": "Mirror-quality premium finish with layered comfort, clean structure, and a luxury street silhouette built for daily flex.",
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
    "offer": true,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "women-alexander-mcqueen-w-b",
    "slug": "women-alexander-mcqueen-w-b",
    "title": "Alexander McQueen White / Black",
    "brand": "Alexander McQueen",
    "variant": "White / Black",
    "category": "women",
    "price": 2890,
    "originalPrice": 3870,
    "discount": 25,
    "images": [
      "/catalog/images/women/Alexander_McQueen/w_b/Alexander_McQueen1.webp",
      "/catalog/images/women/Alexander_McQueen/w_b/Alexander_McQueen2.webp",
      "/catalog/images/women/Alexander_McQueen/w_b/Alexander_McQueen3.webp",
      "/catalog/images/women/Alexander_McQueen/w_b/Alexander_McQueen4.webp"
    ],
    "poster": "/catalog/images/women/Alexander_McQueen/w_b/Alexander_McQueen1.webp",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 11
  },
  {
    "id": "women-jordan4-black-cat",
    "slug": "women-jordan4-black-cat",
    "title": "Jordan 4 Retro Black Cat",
    "brand": "Jordan 4",
    "variant": "Black Cat",
    "category": "women",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/women/Jordan4/black_cat/black_cat1.jpg",
      "/catalog/images/women/Jordan4/black_cat/black_cat2.jpg",
      "/catalog/images/women/Jordan4/black_cat/black_cat3.jpg",
      "/catalog/images/women/Jordan4/black_cat/black_cat4.jpg"
    ],
    "poster": "/catalog/images/women/Jordan4/black_cat/black_cat1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "offer": false,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "women-jordan4-red-sander",
    "slug": "women-jordan4-red-sander",
    "title": "Jordan 4 Retro Red Sand",
    "brand": "Jordan 4",
    "variant": "Red Sand",
    "category": "women",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/women/Jordan4/red_sander/red_sander1.jpg",
      "/catalog/images/women/Jordan4/red_sander/red_sander2.jpg",
      "/catalog/images/women/Jordan4/red_sander/red_sander3.jpg",
      "/catalog/images/women/Jordan4/red_sander/red_sander4.jpg"
    ],
    "poster": "/catalog/images/women/Jordan4/red_sander/red_sander1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 3
  },
  {
    "id": "women-newbalance-530-blue",
    "slug": "women-newbalance-530-blue",
    "title": "New Balance 530 Blue",
    "brand": "New Balance 530",
    "variant": "Blue",
    "category": "women",
    "price": 2590,
    "originalPrice": 3870,
    "discount": 33,
    "images": [
      "/catalog/images/women/Newbalance_530/blue/nb_blue1.jpg",
      "/catalog/images/women/Newbalance_530/blue/nb_blue2.jpg",
      "/catalog/images/women/Newbalance_530/blue/nb_blue3.jpg"
    ],
    "poster": "/catalog/images/women/Newbalance_530/blue/nb_blue1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 8
  },
  {
    "id": "women-aciss-blue",
    "slug": "women-aciss-blue",
    "title": "ASICS Blue",
    "brand": "ASICS",
    "variant": "Blue",
    "category": "women",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/women/aciss/blue/assic_1.jpg",
      "/catalog/images/women/aciss/blue/assic_2.jpg",
      "/catalog/images/women/aciss/blue/assic_3.jpg",
      "/catalog/images/women/aciss/blue/assic_4.jpg",
      "/catalog/images/women/aciss/blue/assic_5.jpg"
    ],
    "poster": "/catalog/images/women/aciss/blue/assic_1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 9
  },
  {
    "id": "women-air-force-beige-brown",
    "slug": "women-air-force-beige-brown",
    "title": "Air Force 1 Beige / Brown",
    "brand": "Air Force",
    "variant": "Beige / Brown",
    "category": "women",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/women/air_force/Beige_brown/Beige_brown.png"
    ],
    "poster": "/catalog/images/women/air_force/Beige_brown/Beige_brown.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "women-air-force-beige-green",
    "slug": "women-air-force-beige-green",
    "title": "Air Force 1 Beige / Green",
    "brand": "Air Force",
    "variant": "Beige / Green",
    "category": "women",
    "price": 2490,
    "originalPrice": 3870,
    "discount": 36,
    "images": [
      "/catalog/images/women/air_force/Beige_green/Beige_green.png"
    ],
    "poster": "/catalog/images/women/air_force/Beige_green/Beige_green.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": false,
    "offer": false,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "women-air-force-gray-petrol",
    "slug": "women-air-force-gray-petrol",
    "title": "Air Force 1 Gray / Petrol",
    "brand": "Air Force",
    "variant": "Gray / Petrol",
    "category": "women",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/women/air_force/Gray_petrol/Gray_petrol.png"
    ],
    "poster": "/catalog/images/women/air_force/Gray_petrol/Gray_petrol.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "offer": true,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "women-air-force-air-force-gucci",
    "slug": "women-air-force-air-force-gucci",
    "title": "Air Force 1 Gucci",
    "brand": "Air Force",
    "variant": "Gucci",
    "category": "women",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/women/air_force/air_force_gucci/gucci.png"
    ],
    "poster": "/catalog/images/women/air_force/air_force_gucci/gucci.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": false,
    "isNew": true,
    "stock": 10
  },
  {
    "id": "women-air-force-air-force-undeeated",
    "slug": "women-air-force-air-force-undeeated",
    "title": "Air Force 1 Undefeated",
    "brand": "Air Force",
    "variant": "Undefeated",
    "category": "women",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/women/air_force/air_force_undeeated/air_force_undeeated.png"
    ],
    "poster": "/catalog/images/women/air_force/air_force_undeeated/air_force_undeeated.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "isNew": false,
    "stock": 3
  },
  {
    "id": "women-air-force-b",
    "slug": "women-air-force-b",
    "title": "Air Force 1 Black",
    "brand": "Air Force",
    "variant": "Black",
    "category": "women",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/women/air_force/b/air_force1.jpg",
      "/catalog/images/women/air_force/b/air_force2.jpg",
      "/catalog/images/women/air_force/b/air_force3.jpg",
      "/catalog/images/women/air_force/b/air_force4.jpg"
    ],
    "poster": "/catalog/images/women/air_force/b/air_force1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 5
  },
  {
    "id": "women-air-force-berlue",
    "slug": "women-air-force-berlue",
    "title": "Air Force 1 Blue",
    "brand": "Air Force",
    "variant": "Blue",
    "category": "women",
    "price": 2790,
    "originalPrice": 3870,
    "discount": 28,
    "images": [
      "/catalog/images/women/air_force/berlue/betrule.png"
    ],
    "poster": "/catalog/images/women/air_force/berlue/betrule.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "women-air-force-brwon-wajnzarari",
    "slug": "women-air-force-brwon-wajnzarari",
    "title": "Air Force 1 Brown",
    "brand": "Air Force",
    "variant": "Brown",
    "category": "women",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/women/air_force/brwon_Wajnzarari/brwen.png"
    ],
    "poster": "/catalog/images/women/air_force/brwon_Wajnzarari/brwen.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 5
  },
  {
    "id": "women-air-force-cofe-black",
    "slug": "women-air-force-cofe-black",
    "title": "Air Force 1 Coffee / Black",
    "brand": "Air Force",
    "variant": "Coffee / Black",
    "category": "women",
    "price": 2090,
    "originalPrice": 3870,
    "discount": 46,
    "images": [
      "/catalog/images/women/air_force/cofe_black/cofe_black.png"
    ],
    "poster": "/catalog/images/women/air_force/cofe_black/cofe_black.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": false,
    "offer": false,
    "isNew": true,
    "stock": 3
  },
  {
    "id": "women-air-force-grey-black",
    "slug": "women-air-force-grey-black",
    "title": "Air Force 1 Gray / Black",
    "brand": "Air Force",
    "variant": "Gray / Black",
    "category": "women",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/women/air_force/grey_black/grey_black.png"
    ],
    "poster": "/catalog/images/women/air_force/grey_black/grey_black.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "women-air-force-the-northe-face",
    "slug": "women-air-force-the-northe-face",
    "title": "Air Force 1 North Face",
    "brand": "Air Force",
    "variant": "North Face",
    "category": "women",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/women/air_force/the_northe_face/the_northe_face.png"
    ],
    "poster": "/catalog/images/women/air_force/the_northe_face/the_northe_face.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "colors": [
      "North Face"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 6
  },
  {
    "id": "women-air-force-w",
    "slug": "women-air-force-w",
    "title": "Air Force 1 White",
    "brand": "Air Force",
    "variant": "White",
    "category": "women",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/women/air_force/w/air_force1.jpg",
      "/catalog/images/women/air_force/w/air_force2.jpg",
      "/catalog/images/women/air_force/w/air_force3.jpg",
      "/catalog/images/women/air_force/w/air_force4.jpg"
    ],
    "poster": "/catalog/images/women/air_force/w/air_force1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 4
  },
  {
    "id": "women-cambos-cambos-black-withe",
    "slug": "women-cambos-cambos-black-withe",
    "title": "Campus Black / White",
    "brand": "Campus",
    "variant": "Black / White",
    "category": "women",
    "price": 2890,
    "originalPrice": 3870,
    "discount": 25,
    "images": [
      "/catalog/images/women/cambos/cambos_black_withe/cambos1.jpg",
      "/catalog/images/women/cambos/cambos_black_withe/cambos2.jpg",
      "/catalog/images/women/cambos/cambos_black_withe/cambos3.jpg",
      "/catalog/images/women/cambos/cambos_black_withe/cambos4.jpg",
      "/catalog/images/women/cambos/cambos_black_withe/cambos5.jpg"
    ],
    "poster": "/catalog/images/women/cambos/cambos_black_withe/cambos1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 11
  },
  {
    "id": "women-dank-gray",
    "slug": "women-dank-gray",
    "title": "Dunk Gray",
    "brand": "Dunk",
    "variant": "Gray",
    "category": "women",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/women/dank/gray/dank_gray1.jpg",
      "/catalog/images/women/dank/gray/dank_gray2.jpg",
      "/catalog/images/women/dank/gray/dank_gray3.jpg",
      "/catalog/images/women/dank/gray/dank_gray4.jpg",
      "/catalog/images/women/dank/gray/dank_gray5.jpg"
    ],
    "poster": "/catalog/images/women/dank/gray/dank_gray1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "isNew": true,
    "stock": 9
  },
  {
    "id": "women-dank-green",
    "slug": "women-dank-green",
    "title": "Dunk Green",
    "brand": "Dunk",
    "variant": "Green",
    "category": "women",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/women/dank/green/dank_green1.jpg",
      "/catalog/images/women/dank/green/dank_green2.jpg",
      "/catalog/images/women/dank/green/dank_green3.jpg",
      "/catalog/images/women/dank/green/dank_green4.jpg"
    ],
    "poster": "/catalog/images/women/dank/green/dank_green1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "isNew": false,
    "stock": 5
  },
  {
    "id": "women-dank-panda",
    "slug": "women-dank-panda",
    "title": "Dunk Panda",
    "brand": "Dunk",
    "variant": "Panda",
    "category": "women",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/women/dank/panda/dank_panda1.jpg",
      "/catalog/images/women/dank/panda/dank_panda2.webp"
    ],
    "poster": "/catalog/images/women/dank/panda/dank_panda1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "offer": false,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "women-one-cloud-black-withe",
    "slug": "women-one-cloud-black-withe",
    "title": "On Cloud Black / White",
    "brand": "On Cloud",
    "variant": "Black / White",
    "category": "women",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/women/one_cloud/black_withe/b_w1.jpg",
      "/catalog/images/women/one_cloud/black_withe/b_w2.jpg"
    ],
    "poster": "/catalog/images/women/one_cloud/black_withe/b_w1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 4
  },
  {
    "id": "women-samba-b",
    "slug": "women-samba-b",
    "title": "Samba Black",
    "brand": "Samba",
    "variant": "Black",
    "category": "women",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/women/samba/b/smaba_b1.jpg",
      "/catalog/images/women/samba/b/smaba_b2.jpg",
      "/catalog/images/women/samba/b/smaba_b3.jpg",
      "/catalog/images/women/samba/b/smaba_b4.jpg"
    ],
    "poster": "/catalog/images/women/samba/b/smaba_b1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 5
  },
  {
    "id": "women-samba-blue",
    "slug": "women-samba-blue",
    "title": "Samba Blue",
    "brand": "Samba",
    "variant": "Blue",
    "category": "women",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/women/samba/blue/smaba_blue1.jpg",
      "/catalog/images/women/samba/blue/smaba_blue2.jpg",
      "/catalog/images/women/samba/blue/smaba_blue3.jpg",
      "/catalog/images/women/samba/blue/smaba_blue4.jpg",
      "/catalog/images/women/samba/blue/smaba_blue5.jpg"
    ],
    "poster": "/catalog/images/women/samba/blue/smaba_blue1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": true,
    "isNew": true,
    "stock": 9
  },
  {
    "id": "women-samba-g",
    "slug": "women-samba-g",
    "title": "Samba Green",
    "brand": "Samba",
    "variant": "Green",
    "category": "women",
    "price": 2890,
    "originalPrice": 3870,
    "discount": 25,
    "images": [
      "/catalog/images/women/samba/g/smaba_g1.jpg",
      "/catalog/images/women/samba/g/smaba_g2.jpg",
      "/catalog/images/women/samba/g/smaba_g3.jpg",
      "/catalog/images/women/samba/g/smaba_g4.jpg",
      "/catalog/images/women/samba/g/smaba_g5.jpg"
    ],
    "poster": "/catalog/images/women/samba/g/smaba_g1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 11
  },
  {
    "id": "women-samba-green",
    "slug": "women-samba-green",
    "title": "Samba Green",
    "brand": "Samba",
    "variant": "Green",
    "category": "women",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/women/samba/green/samba_green.png"
    ],
    "poster": "/catalog/images/women/samba/green/samba_green.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "stock": 6
  },
  {
    "id": "women-samba-grey",
    "slug": "women-samba-grey",
    "title": "Samba Gray",
    "brand": "Samba",
    "variant": "Gray",
    "category": "women",
    "price": 2490,
    "originalPrice": 3870,
    "discount": 36,
    "images": [
      "/catalog/images/women/samba/grey/smaba_gray.png"
    ],
    "poster": "/catalog/images/women/samba/grey/smaba_gray.png",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "women-samba-p",
    "slug": "women-samba-p",
    "title": "Samba Pink",
    "brand": "Samba",
    "variant": "Pink",
    "category": "women",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/women/samba/p/smaba_p1.jpg",
      "/catalog/images/women/samba/p/smaba_p2.jpg",
      "/catalog/images/women/samba/p/smaba_p3.jpg",
      "/catalog/images/women/samba/p/smaba_p4.jpg",
      "/catalog/images/women/samba/p/smaba_p5.jpg"
    ],
    "poster": "/catalog/images/women/samba/p/smaba_p1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "women-samba-red",
    "slug": "women-samba-red",
    "title": "Samba Red",
    "brand": "Samba",
    "variant": "Red",
    "category": "women",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/women/samba/red/smaba_red.jpeg"
    ],
    "poster": "/catalog/images/women/samba/red/smaba_red.jpeg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "isNew": true,
    "stock": 9
  },
  {
    "id": "women-samba-w",
    "slug": "women-samba-w",
    "title": "Samba White",
    "brand": "Samba",
    "variant": "White",
    "category": "women",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/women/samba/w/smaba_w1.jpg",
      "/catalog/images/women/samba/w/smaba_w2.jpg",
      "/catalog/images/women/samba/w/smaba_w3.jpg",
      "/catalog/images/women/samba/w/smaba_w4.jpg",
      "/catalog/images/women/samba/w/smaba_w5.jpg",
      "/catalog/images/women/samba/w/smaba_w6.jpg"
    ],
    "poster": "/catalog/images/women/samba/w/smaba_w1.jpg",
    "description": "Premium mirror-quality finish with soft support, lightweight feel, and a refined profile made for standout daily wear.",
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
    "featured": true,
    "offer": false,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "kids-men-newbalance-530-blue",
    "slug": "kids-men-newbalance-530-blue",
    "title": "New Balance 530 Kids Blue",
    "brand": "New Balance 530",
    "variant": "Blue",
    "category": "kids",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/men/Newbalance_530/blue/nb_blue1.jpg",
      "/catalog/images/men/Newbalance_530/blue/nb_blue2.jpg",
      "/catalog/images/men/Newbalance_530/blue/nb_blue3.jpg"
    ],
    "poster": "/catalog/images/men/Newbalance_530/blue/nb_blue1.jpg",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Blue"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 8
  },
  {
    "id": "kids-men-air-force-beige-brown",
    "slug": "kids-men-air-force-beige-brown",
    "title": "Air Force Kids Beige / Brown",
    "brand": "Air Force",
    "variant": "Beige / Brown",
    "category": "kids",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/air_force/Beige_brown/Beige_brown.png"
    ],
    "poster": "/catalog/images/men/air_force/Beige_brown/Beige_brown.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Beige",
      "Brown"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 7
  },
  {
    "id": "kids-men-air-force-beige-green",
    "slug": "kids-men-air-force-beige-green",
    "title": "Air Force Kids Beige / Green",
    "brand": "Air Force",
    "variant": "Beige / Green",
    "category": "kids",
    "price": 2490,
    "originalPrice": 3870,
    "discount": 36,
    "images": [
      "/catalog/images/men/air_force/Beige_green/Beige_green.png"
    ],
    "poster": "/catalog/images/men/air_force/Beige_green/Beige_green.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Beige",
      "Green"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "kids-men-air-force-gray-petrol",
    "slug": "kids-men-air-force-gray-petrol",
    "title": "Air Force Kids Gray / Petrol",
    "brand": "Air Force",
    "variant": "Gray / Petrol",
    "category": "kids",
    "price": 2590,
    "originalPrice": 3870,
    "discount": 33,
    "images": [
      "/catalog/images/men/air_force/Gray_petrol/Gray_petrol.png"
    ],
    "poster": "/catalog/images/men/air_force/Gray_petrol/Gray_petrol.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Gray",
      "Petrol"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "kids-men-air-force-air-force-gucci",
    "slug": "kids-men-air-force-air-force-gucci",
    "title": "Air Force Kids Gucci",
    "brand": "Air Force",
    "variant": "Gucci",
    "category": "kids",
    "price": 2690,
    "originalPrice": 3870,
    "discount": 30,
    "images": [
      "/catalog/images/men/air_force/air_force_gucci/gucci.png"
    ],
    "poster": "/catalog/images/men/air_force/air_force_gucci/gucci.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Gucci"
    ],
    "featured": true,
    "offer": true,
    "isNew": true,
    "stock": 8
  },
  {
    "id": "kids-men-air-force-air-force-undeeated",
    "slug": "kids-men-air-force-air-force-undeeated",
    "title": "Air Force Kids Undefeated",
    "brand": "Air Force",
    "variant": "Undefeated",
    "category": "kids",
    "price": 2190,
    "originalPrice": 3870,
    "discount": 43,
    "images": [
      "/catalog/images/men/air_force/air_force_undeeated/air_force_undeeated.png"
    ],
    "poster": "/catalog/images/men/air_force/air_force_undeeated/air_force_undeeated.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Undefeated"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 4
  },
  {
    "id": "kids-men-air-force-b",
    "slug": "kids-men-air-force-b",
    "title": "Air Force Kids Black",
    "brand": "Air Force",
    "variant": "Black",
    "category": "kids",
    "price": 2290,
    "originalPrice": 3870,
    "discount": 41,
    "images": [
      "/catalog/images/men/air_force/b/air_force1.jpg",
      "/catalog/images/men/air_force/b/air_force2.jpg",
      "/catalog/images/men/air_force/b/air_force3.jpg",
      "/catalog/images/men/air_force/b/air_force4.jpg"
    ],
    "poster": "/catalog/images/men/air_force/b/air_force1.jpg",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Black"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 10
  },
  {
    "id": "kids-men-air-force-berlue",
    "slug": "kids-men-air-force-berlue",
    "title": "Air Force Kids Blue",
    "brand": "Air Force",
    "variant": "Blue",
    "category": "kids",
    "price": 2390,
    "originalPrice": 3870,
    "discount": 38,
    "images": [
      "/catalog/images/men/air_force/berlue/betrule.png"
    ],
    "poster": "/catalog/images/men/air_force/berlue/betrule.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Blue"
    ],
    "featured": true,
    "offer": true,
    "isNew": false,
    "stock": 5
  },
  {
    "id": "kids-men-air-force-brwon-wajnzarari",
    "slug": "kids-men-air-force-brwon-wajnzarari",
    "title": "Air Force Kids Brown",
    "brand": "Air Force",
    "variant": "Brown",
    "category": "kids",
    "price": 2490,
    "originalPrice": 3870,
    "discount": 36,
    "images": [
      "/catalog/images/men/air_force/brwon_Wajnzarari/brwen.png"
    ],
    "poster": "/catalog/images/men/air_force/brwon_Wajnzarari/brwen.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Brown"
    ],
    "featured": false,
    "offer": true,
    "isNew": false,
    "stock": 9
  },
  {
    "id": "kids-men-air-force-cofe-black",
    "slug": "kids-men-air-force-cofe-black",
    "title": "Air Force Kids Coffee / Black",
    "brand": "Air Force",
    "variant": "Coffee / Black",
    "category": "kids",
    "price": 2590,
    "originalPrice": 3870,
    "discount": 33,
    "images": [
      "/catalog/images/men/air_force/cofe_black/cofe_black.png"
    ],
    "poster": "/catalog/images/men/air_force/cofe_black/cofe_black.png",
    "description": "Premium junior drop with durable grip, all-day comfort, and the same luxury CAVO finish in a lighter kids-ready build.",
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35"
    ],
    "colors": [
      "Coffee",
      "Black"
    ],
    "featured": false,
    "offer": true,
    "isNew": true,
    "stock": 5
  }
];


export const categories = [
  { key: 'men', label: 'رجالي', subtitle: 'Luxury men drops', poster: '/catalog/images/men/Jordan4/black_cat/black_cat1.jpg' },
  { key: 'women', label: 'حريمي', subtitle: 'Refined women edits', poster: '/catalog/images/women/Alexander_McQueen/w_b/Alexander_McQueen1.webp' },
  { key: 'kids', label: 'أطفال', subtitle: 'Mini premium picks', poster: '/catalog/images/men/samba/w/smaba_w1.jpg' },
  { key: 'offers', label: 'عروض', subtitle: 'Best savings now', poster: '/catalog/images/men/air_force/air_force_gucci/gucci.png' },
  { key: 'videos', label: 'فيديوهات', subtitle: 'Motion edits', poster: '/catalog/images/women/Jordan4/red_sander/red_sander1.jpg' }
] as const;

export const homeHighlights = {
  hero: '/catalog/images/men/Travis_Scott/brown/Travis_Scott.png',
  secondary: '/catalog/images/women/samba/red/smaba_red.jpeg',
  promo: '/catalog/images/men/Alexander_McQueen/w_b/Alexander_McQueen1.webp'
};

export const featuredProducts = products.filter((product) => product.featured).slice(0, 10);
export const offerProducts = products.filter((product) => product.offer).slice(0, 10);
export const videoDrops = products.slice(0, 6).map((product, index) => ({
  id: `video-${product.slug}`,
  title: product.title,
  poster: product.poster,
  duration: ['0:18', '0:24', '0:33', '0:21', '0:27', '0:15'][index % 6]
}));

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const getProductsByCategory = (category: Category) => products.filter((product) => product.category === category);
