// src/content/products.content.js

const products = [
  // 👗 DRESSES
  {
    id: 1,
    name: "Floral Summer Dress",
    description:
      "Lightweight floral print dress with adjustable straps and a flowy silhouette — perfect for sunny days.",
    price: 69.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses1.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Elegant Black Evening Dress",
    description:
      "A timeless black evening gown featuring a slim fit and subtle side slit for an elegant touch.",
    price: 119.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses2.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Casual Midi Dress",
    description:
      "Comfortable cotton midi dress with pockets and a relaxed fit — ideal for everyday wear.",
    price: 59.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses3.jpg",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Red Bodycon Dress",
    description:
      "Stylish sleeveless red bodycon dress designed to flatter your curves for a bold look.",
    price: 79.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses4.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "The Mocha Elegance Pleated Set",
    description:
      "Step out in timeless elegance with the Mocha Elegance Pleated Set — featuring a cropped mocha blazer paired with a high-waisted pleated skirt.",
    price: 69.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses5.jpg",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Black Evening Dress (Variant)",
    description:
      "Sleek black gown with modern slit detail and subtle shimmer — elegant for any event.",
    price: 119.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses6.jpg",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Casual Midi Dress (Variant)",
    description:
      "Relaxed cotton midi with a modern fit — great for casual or semi-formal outings.",
    price: 59.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses7.jpg",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Red Bodycon Dress (Variant)",
    description:
      "A bold, sleeveless red bodycon dress with extra stretch for comfort.",
    price: 79.99,
    category: "Dresses",
    image: "/images/Dresses/Dresses8.jpg",
    rating: 4.7,
  },

  // 👚 TOPS
  {
    id: 9,
    name: "Classic White T-Shirt",
    description:
      "A soft, breathable cotton T-shirt that pairs perfectly with.",
    price: 19.99,
    category: "Tops",
    image: "/images/Shirts/top1.jpg",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Striped Crop Top",
    description:
      "Trendy striped crop top with a stretchy fit — ideal for casual summer looks.",
    price: 24.99,
    category: "Tops",
    image: "/images/Shirts/top2.jpg",
    rating: 4.4,
  },
  {
    id: 11,
    name: "Satin Blouse",
    description:
      "Elegant satin blouse with balloon sleeves and a flattering neckline, perfect for work or evening wear.",
    price: 49.99,
    category: "Tops",
    image: "/images/Shirts/top3.jpg",
    rating: 4.8,
  },
  {
    id: 12,
    name: "Graphic Oversized Tee",
    description:
      "Relaxed-fit cotton tee featuring a bold graphic print for a streetwear-inspired vibe.",
    price: 29.99,
    category: "Tops",
    image: "/images/Shirts/top4.jpg",
    rating: 4.6,
  },
  {
    id: 13,
    name: "Classic White T-Shirt (Variant)",
    description:
      "Another colorway of our classic tee — same soft cotton, same great fit.",
    price: 19.99,
    category: "Tops",
    image: "/images/Shirts/top5.jpg",
    rating: 4.5,
  },
  {
    id: 14,
    name: "Striped Crop Top (Variant)",
    description:
      "Fresh new stripe pattern with cropped fit — perfect for the season.",
    price: 24.99,
    category: "Tops",
    image: "/images/Shirts/top6.jpg",
    rating: 4.4,
  },
  {
    id: 15,
    name: "Satin Blouse (Variant)",
    description:
      "Shimmering satin blouse with subtle pleats and button cuffs.",
    price: 49.99,
    category: "Tops",
    image: "/images/Shirts/top7.jpg",
    rating: 4.8,
  },
  {
    id: 16,
    name: "Graphic Oversized Tee (Variant)",
    description:
      "Bold print tee with a loose fit and vintage wash finish.",
    price: 29.99,
    category: "Tops",
    image: "/images/Shirts/top8.jpg",
    rating: 4.6,
  },

  // 👖 JEANS
  {
    id: 17,
    name: "Blue Skinny Jeans",
    description:
      "Classic mid-rise skinny jeans with a stretch fit that flatters every shape.",
    price: 49.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS1.jpg",
    rating: 4.7,
  },
  {
    id: 18,
    name: "Ripped Boyfriend Jeans",
    description:
      "This is a Y2K-inspired casual outfit featuring a pink oversized jersey top with “07” printed on it, light-wash ripped wide-leg jeans, and accessories including a pink cap, black sunglasses, denim shoulder bag with ribbons, and white sneakers",
    price: 54.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS2.jpg",
    rating: 4.5,
  },
  {
    id: 19,
    name: "High-Waisted Wide Leg Jeans",
    description:
      "These are high-waisted cargo jeans in a vibrant blue wash. They feature multiple utility pockets and side tie straps, giving them a trendy and edgy streetwear look.",
    price: 59.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS3.jpg",
    rating: 4.6,
  },
  {
    id: 20,
    name: "Black Slim Fit Jeans",
    description:
      "These are dark-wash wide-leg cargo jeans with large flap pockets on both thighs and a high-rise waist.",
    price: 52.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS4.jpg",
    rating: 4.7,
  },
  {
    id: 21,
    name: "Blue Skinny Jeans (Variant)",
    description:
      "Stretch-fit mid-rise skinny jeans — perfect for everyday comfort.",
    price: 49.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS5.jpg",
    rating: 4.7,
  },
  {
    id: 22,
    name: "Ripped Boyfriend Jeans (Variant)",
    description:
      "Relaxed-fit jeans with heavier distress for a bolder look.",
    price: 54.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS6.jpg",
    rating: 4.5,
  },
  {
    id: 23,
    name: "High-Waisted Wide Leg Jeans (Variant)",
    description:
      "Soft denim wide-leg jeans with a flattering silhouette.",
    price: 59.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS7.jpg",
    rating: 4.6,
  },
  {
    id: 24,
    name: "Black Slim Fit Jeans (Variant)",
    description:
      "Black denim jeans with a sleek fit and minimal stretch for structure.",
    price: 52.99,
    category: "Jeans",
    image: "/images/JEANS/JEANS8.jpg",
    rating: 4.7,
  },

  // 👟 SHOES
  {
    id: 25,
    name: "Running Sneakers",
    description:
      "Lightweight sneakers made for all-day comfort with cushioned soles and breathable mesh.",
    price: 79.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker1.jpg",
    rating: 4.8,
  },
  {
    id: 26,
    name: "Classic White Sneakers",
    description:
      "Minimalist leather sneakers that pair perfectly with ,.",
    price: 89.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker2.jpg",
    rating: 4.7,
  },
  {
    id: 27,
    name: "Black Leather Boots",
    description:
      "Durable mid-calf leather boots with a block heel — stylish and practical for colder days.",
    price: 129.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker9.jpg",
    rating: 4.7,
  },
  {
    id: 28,
    name: "Elegant Heeled Sandals",
    description:
      "Strappy heeled sandals that add sophistication to any evening outfit.",
    price: 69.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker4.jpg",
    rating: 4.6,
  },
  {
    id: 29,
    name: "Running Sneakers (Variant)",
    description:
      "Updated mesh sneakers with extra arch support and soft padding.",
    price: 79.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker5.jpg",
    rating: 4.8,
  },
  {
    id: 30,
    name: "Classic White Sneakers (Variant)",
    description:
      "Sleek white sneakers with a modern sole design and premium finish.",
    price: 89.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker6.jpg",
    rating: 4.7,
  },
  {
    id: 31,
    name: "Black Leather Boots (Variant)",
    description:
      "Matte black ankle boots with durable stitching and padded lining.",
    price: 129.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker7.jpg",
    rating: 4.7,
  },
  {
    id: 32,
    name: "Elegant Heeled Sandals (Variant)",
    description:
      "Gold-tone heeled sandals — perfect for formal events.",
    price: 69.99,
    category: "Shoes",
    image: "/images/Sneakers/Sneaker8.jpg",
    rating: 4.6,
  },

  // 🧥 JACKETS
  {
    id: 33,
    name: "Denim Jacket",
    description:
      "A timeless blue denim jacket with a slim fit — perfect for layering over any outfit.",
    price: 59.99,
    category: "Jackets",
    image: "/images/jacket/jacket1.jpg",
    rating: 4.7,
  },
  {
    id: 34,
    name: "Leather Biker Jacket",
    description:
      "Edgy black leather jacket with silver hardware — a must-have wardrobe staple.",
    price: 149.99,
    category: "Jackets",
    image: "/images/jacket/jacket2.jpg",
    rating: 4.9,
  },
  {
    id: 35,
    name: "Beige Trench Coat",
    description:
      "Chic beige trench coat with a belt and lightweight material — perfect for spring and fall.",
    price: 119.99,
    category: "Jackets",
    image: "/images/jacket/jacket3.jpg",
    rating: 4.8,
  },
  {
    id: 36,
    name: "Puffer Jacket (Gray)",
    description:
      "Warm and lightweight gray puffer jacket with a water-resistant finish.",
    price: 99.99,
    category: "Jackets",
    image: "/images/jacket/jacket9.jpg",
    rating: 4.7,
  },
  {
    id: 37,
    name: "Puffer Jacket (Blue)",
    description:
      "Classic blue puffer jacket designed for warmth and comfort.",
    price: 99.99,
    category: "Jackets",
    image: "/images/jacket/jacket5.jpg",
    rating: 4.7,
  },
  {
    id: 38,
    name: "Puffer Jacket (Black)",
    description:
      "Sleek black puffer jacket with minimal stitching and soft padding.",
    price: 99.99,
    category: "Jackets",
    image: "/images/jacket/jacket6.jpg",
    rating: 4.7,
  },
  {
    id: 39,
    name: "Puffer Jacket (Green)",
    description:
      "Military green puffer jacket with water-resistant exterior and zip pockets.",
    price: 99.99,
    category: "Jackets",
    image: "/images/jacket/jacket7.jpg",
    rating: 4.7,
  },
  {
    id: 40,
    name: "Puffer Jacket (Cream)",
    description:
      "Soft cream puffer jacket — stylish and cozy for cold weather.",
    price: 99.99,
    category: "Jackets",
    image: "/images/jacket/jacket8.jpg",
    rating: 4.7,
  },

  // 👜 ACCESSORIES
  {
    id: 41,
    name: "Leather Crossbody Bag",
    description:
      "Elegant crossbody bag crafted from premium leather, ideal for carrying daily essentials.",
    price: 129.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES1.jpg",
    rating: 4.5,
  },
  {
    id: 42,
    name: "Classic Aviator Sunglasses",
    description:
      "Timeless aviator shades with UV400 protection and sleek gold-tone frames.",
    price: 49.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES2.jpg",
    rating: 4.6,
  },
  {
    id: 43,
    name: "Chunky Gold Necklace",
    description:
      "Statement gold-plated chain necklace to elevate any outfit.",
    price: 39.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES3.jpg",
    rating: 4.8,
  },
  {
    id: 44,
    name: "Wool Scarf (Gray)",
    description:
      "Soft, cozy gray wool scarf — ideal for layering during cold weather.",
    price: 34.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES4.jpg",
    rating: 4.7,
  },
  {
    id: 45,
    name: "Wool Scarf (Brown)",
    description:
      "Warm brown wool scarf with classic fringe details.",
    price: 34.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES5.jpg",
    rating: 4.7,
  },
  {
    id: 46,
    name: "Wool Scarf (Cream)",
    description:
      "Light cream wool scarf — soft, cozy, and stylish.",
    price: 34.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES6.jpg",
    rating: 4.7,
  },
  {
    id: 47,
    name: "Wool Scarf (Beige)",
    description:
      "Elegant beige wool scarf with minimal pattern — timeless and soft.",
    price: 34.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES7.jpg",
    rating: 4.7,
  },
  {
    id: 48,
    name: "Wool Scarf (Blue)",
    description:
      "Cool blue wool scarf with soft knit texture — cozy and vibrant.",
    price: 34.99,
    category: "Accessories",
    image: "/images/ACCESSORIES/ACCESSORIES8.jpg",
    rating: 4.7,
  },
];

export default products;
