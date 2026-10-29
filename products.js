/* ====== EDIT ONLY THIS FILE (shop details + products) ====== */
const CONFIG = {
  shopName: "Aftab Fashion Wear",
  tagline: "Quality clothing at fair prices.",
  whatsapp: "919999999999",              // <-- put your WhatsApp number: 91 + 10 digits, no + or spaces
  email: "amansingh98821@gmail.com",
  city: "Your City, India",              // <-- put your shop city/address
  freeShipAbove: 1999,                   // free delivery above this amount
  shipCharge: 99
};

/* Sizes per category */
const SIZES = {
  Men: ["S", "M", "L", "XL"],
  Women: ["XS", "S", "M", "L"],
  Kids: ["2-4Y", "5-7Y", "8-10Y"],
  Footwear: ["7", "8", "9", "10"],
  Accessories: ["One Size"]
};

/* How to add a product:
   n = name, c = category, p = sale price, o = original price (MRP)
   g = two colours for the placeholder background, r = rating, t = tag (New / Bestseller or empty)
   img = front photo path, img2 = back photo path (optional)
   To add a photo: put it in the images/ folder and write img: "images/tee1.jpg"  */
const PRODUCTS = [
  { id: 1,  n: "Classic Cotton Tee",   c: "Men",         p: 599,  o: 899,  g: ["#f5b94a", "#e4572e"], r: 4.5, t: "Bestseller", img: "", img2: "" },
  { id: 2,  n: "Slim Fit Denim Jeans", c: "Men",         p: 1799, o: 2499, g: ["#5b8cff", "#2c3e8c"], r: 4.4, t: "",           img: "images/slim.png", img2: "" },
  { id: 3,  n: "Oversized Hoodie",     c: "Men",         p: 1499, o: 1999, g: ["#8f7cff", "#3a2c8c"], r: 4.7, t: "New",        img: "", img2: "" },
  { id: 4,  n: "Floral Summer Dress",  c: "Women",       p: 1299, o: 1899, g: ["#ff9ab5", "#e4572e"], r: 4.6, t: "Trending",   img: "", img2: "" },
  { id: 5,  n: "High-Rise Jeans",      c: "Women",       p: 1699, o: 2299, g: ["#6ec3ff", "#2a6fa8"], r: 4.3, t: "",           img: "", img2: "" },
  { id: 6,  n: "Cropped Knit Sweater", c: "Women",       p: 1399, o: 1899, g: ["#f7c59f", "#c8704a"], r: 4.5, t: "New",        img: "", img2: "" },
  { id: 7,  n: "Kids Dino Tee",        c: "Kids",        p: 399,  o: 599,  g: ["#a8e063", "#3d8c2c"], r: 4.6, t: "",           img: "", img2: "" },
  { id: 8,  n: "Kids Denim Dungaree",  c: "Kids",        p: 899,  o: 1299, g: ["#7fb7ff", "#2c5c9c"], r: 4.4, t: "New",        img: "", img2: "" },
  { id: 9,  n: "Everyday Sneakers",    c: "Footwear",    p: 2499, o: 3499, g: ["#ffd36b", "#e4572e"], r: 4.7, t: "Trending",   img: "", img2: "" },
  { id: 10, n: "Canvas Cap",           c: "Accessories", p: 449,  o: 699,  g: ["#ff8a7a", "#a8321c"], r: 4.3, t: "",           img: "", img2: "" }
];
