/* ====== SIRF YAHI FILE EDIT KARNI HAI (shop details + products) ====== */
const CONFIG = {
  shopName: "Aftab Fashion Wear",
  tagline: "Quality kapde, sahi daam.",
  whatsapp: "919999999999",        // <-- apna WhatsApp number likho: 91 + 10 digit, bina + ya space ke
  city: "Aapka shehar yahan likho",
  freeShipAbove: 1999,             // is amount ke upar free delivery
  shipCharge: 99
};

/* Size har category ke hisaab se */
const SIZES = {
  Men: ["S", "M", "L", "XL"],
  Women: ["XS", "S", "M", "L"],
  Kids: ["2-4Y", "5-7Y", "8-10Y"],
  Footwear: ["7", "8", "9", "10"],
  Accessories: ["One Size"]
};

/* Product add karne ka tareeka:
   n = naam, c = category, p = sale price, o = purana price (MRP), e = emoji (photo na ho tab dikhega)
   g = 2 colours (card ka background), r = rating, t = tag (New/Bestseller ya khali)
   img = front photo ka path, img2 = back photo ka path (optional)
   Photo daalni ho to images/ folder me rakho aur img: "images/tee1.jpg" likho. */
const PRODUCTS = [
  { id: 1,  n: "Classic Cotton Tee",     c: "Men",   p: 599,  o: 899,  e: "👕", g: ["#f5b94a", "#e4572e"], r: 4.5, t: "Bestseller", img: "", img2: "" },
  { id: 2,  n: "Slim Fit Denim Jeans",   c: "Men",   p: 1799, o: 2499, e: "👖", g: ["#5b8cff", "#2c3e8c"], r: 4.4, t: "",           img: "", img2: "" },
  { id: 3,  n: "Oversized Hoodie",       c: "Men",   p: 1499, o: 1999, e: "🧥", g: ["#8f7cff", "#3a2c8c"], r: 4.7, t: "New",        img: "", img2: "" },
  { id: 4,  n: "Floral Summer Dress",    c: "Women", p: 1299, o: 1899, e: "👗", g: ["#ff9ab5", "#e4572e"], r: 4.6, t: "Trending",   img: "", img2: "" },
  { id: 5,  n: "High-Rise Jeans",        c: "Women", p: 1699, o: 2299, e: "👖", g: ["#6ec3ff", "#2a6fa8"], r: 4.3, t: "",           img: "", img2: "" },
  { id: 6,  n: "Cropped Knit Sweater",   c: "Women", p: 1399, o: 1899, e: "🧶", g: ["#f7c59f", "#c8704a"], r: 4.5, t: "New",        img: "", img2: "" },
  { id: 7,  n: "Kids Dino Tee",          c: "Kids",  p: 399,  o: 599,  e: "🦖", g: ["#a8e063", "#3d8c2c"], r: 4.6, t: "",           img: "", img2: "" },
  { id: 8,  n: "Kids Denim Dungaree",    c: "Kids",  p: 899,  o: 1299, e: "🧒", g: ["#7fb7ff", "#2c5c9c"], r: 4.4, t: "New",        img: "", img2: "" },
  { id: 9,  n: "Everyday Sneakers",      c: "Footwear", p: 2499, o: 3499, e: "👟", g: ["#ffd36b", "#e4572e"], r: 4.7, t: "Trending", img: "", img2: "" },
  { id: 10, n: "Canvas Cap",             c: "Accessories", p: 449, o: 699, e: "🧢", g: ["#ff8a7a", "#a8321c"], r: 4.3, t: "",       img: "", img2: "" }
];
