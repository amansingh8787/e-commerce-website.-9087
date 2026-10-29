const $ = id => document.getElementById(id);
const rs = n => "₹" + n.toLocaleString("en-IN");
const waLink = text => "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
let cat = "All", cart = [], wish = [], pick = {}, showWish = false;

try { cart = JSON.parse(localStorage.getItem("af_cart") || "[]"); wish = JSON.parse(localStorage.getItem("af_wish") || "[]"); } catch (e) {}
const save = () => { try { localStorage.setItem("af_cart", JSON.stringify(cart)); localStorage.setItem("af_wish", JSON.stringify(wish)); } catch (e) {} };
let tt; const toast = m => { const t = $("toast"); t.textContent = m; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 2000); };
const byId = id => PRODUCTS.find(p => p.id === id);
const size = p => pick[p.id] || SIZES[p.c][0];

/* ---------- shop details ---------- */
document.title = CONFIG.shopName + " | Order on WhatsApp";
const words = CONFIG.shopName.split(" ");
$("logo").innerHTML = words[0] + " <span>" + words.slice(1).join(" ") + "</span>";
$("heroTitle").innerHTML = "<em>" + words[0] + "</em> " + words.slice(1).join(" ") + ".<br>" + CONFIG.tagline;
$("perks").innerHTML = "<span>🚚 " + rs(CONFIG.freeShipAbove) + " se upar free delivery</span><span>💬 Order seedha WhatsApp pe</span><span>📍 " + CONFIG.city + "</span>";
$("foot").textContent = "© " + new Date().getFullYear() + " " + CONFIG.shopName + ". All rights reserved.";
$("waFloat").href = waLink("Hello " + CONFIG.shopName + ", mujhe kuch puchna hai.");
$("theme").onclick = () => { const r = document.documentElement, d = r.dataset.theme === "dark" || (!r.dataset.theme && matchMedia("(prefers-color-scheme:dark)").matches); r.dataset.theme = d ? "light" : "dark"; };

/* ---------- products ---------- */
const pic = p => {
  const bg = "linear-gradient(135deg," + p.g[0] + "," + p.g[1] + ")";
  return { bg, html: p.img ? '<img src="' + p.img + '" alt="' + p.n + '" loading="lazy" onerror="this.remove()">' : "" };
};
$("chips").innerHTML = ["All", ...Object.keys(SIZES)].map(c => '<button class="chip' + (c === "All" ? " on" : "") + '" data-c="' + c + '">' + c + "</button>").join("");
$("chips").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; cat = b.dataset.c; showWish = false; document.querySelectorAll(".chip").forEach(x => x.classList.toggle("on", x === b)); render(); };
$("q").oninput = () => { showWish = false; render(); };
$("sort").onchange = render;
$("wishBtn").onclick = () => { showWish = !showWish; render(); $("shop").scrollIntoView(); toast(showWish ? "Wishlist dikha rahe hain" : "Saare products"); };

function render() {
  const q = $("q").value.trim().toLowerCase();
  const list = PRODUCTS.filter(p => (cat === "All" || p.c === cat) && p.n.toLowerCase().includes(q) && (!showWish || wish.includes(p.id)));
  const s = $("sort").value;
  if (s === "lh") list.sort((a, b) => a.p - b.p); else if (s === "hl") list.sort((a, b) => b.p - a.p); else if (s === "r") list.sort((a, b) => b.r - a.r);
  $("grid").innerHTML = list.length ? list.map(p => {
    const z = size(p), off = Math.round((1 - p.p / p.o) * 100), v = pic(p);
    return '<article class="card"><div class="pic" data-v="' + p.id + '" style="background:' + v.bg + '">' + p.e + v.html +
      (p.t ? '<span class="tag">' + p.t + "</span>" : "") +
      '<button class="heart" data-w="' + p.id + '" aria-label="Wishlist">' + (wish.includes(p.id) ? "❤️" : "🤍") + "</button>" +
      '<span class="d3">🔄 3D View</span></div>' +
      '<div class="info"><small>' + p.c + " · ⭐ " + p.r + "</small><h3>" + p.n + '</h3><div class="price">' + rs(p.p) + "<s>" + rs(p.o) + "</s> <small>" + off + "% off</small></div>" +
      '<div class="sizes">' + SIZES[p.c].map(x => '<button class="sz' + (x === z ? " on" : "") + '" data-s="' + p.id + "|" + x + '">' + x + "</button>").join("") + "</div>" +
      '<button class="add" data-a="' + p.id + '">Cart me daalo</button></div></article>';
  }).join("") : '<p class="empty">' + (showWish ? "Wishlist khali hai. Kisi product pe heart dabao." : "Koi product nahi mila.") + "</p>";
  $("wc").textContent = wish.length;
}
function addToCart(p) {
  const z = size(p), k = p.id + "|" + z, f = cart.find(x => x.k === k);
  f ? f.q++ : cart.push({ k, id: p.id, z, q: 1 });
  save(); drawCart(); toast(p.n + " (" + z + ") cart me add hua");
}
$("grid").onclick = e => {
  const w = e.target.closest("[data-w]"), s = e.target.closest("[data-s]"), a = e.target.closest("[data-a]"), v = e.target.closest("[data-v]");
  if (w) { const id = +w.dataset.w; wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id]; save(); render(); }
  else if (s) { const [id, z] = s.dataset.s.split("|"); pick[id] = z; render(); }
  else if (a) addToCart(byId(+a.dataset.a));
  else if (v) openViewer(byId(+v.dataset.v));
};

/* ---------- cart + WhatsApp order ---------- */
const openCart = v => { $("drawer").classList.toggle("open", v); $("shade").classList.toggle("open", v); };
$("cartBtn").onclick = () => openCart(true); $("closeCart").onclick = () => openCart(false); $("shade").onclick = () => openCart(false);
const totals = () => { const sub = cart.reduce((t, c) => t + byId(c.id).p * c.q, 0); const ship = sub === 0 || sub >= CONFIG.freeShipAbove ? 0 : CONFIG.shipCharge; return { sub, ship, tot: sub + ship }; };
function drawCart() {
  $("items").innerHTML = cart.length ? cart.map(c => { const p = byId(c.id), v = pic(p); return '<div class="row"><div class="t" style="background:' + v.bg + '">' + (p.img ? v.html : p.e) + '</div><div class="m"><b>' + p.n + "</b><br><small>Size " + c.z + " · " + rs(p.p) + '</small></div><div class="q"><button data-m="' + c.k + '" aria-label="Kam">−</button><span>' + c.q + '</span><button data-p="' + c.k + '" aria-label="Zyada">+</button></div></div>'; }).join("") : '<p class="empty">Cart khali hai.</p>';
  const t = totals();
  $("sub").textContent = rs(t.sub); $("ship").textContent = t.ship ? rs(t.ship) : "Free"; $("tot").textContent = rs(t.tot);
  $("free").textContent = t.sub === 0 ? "" : t.sub >= CONFIG.freeShipAbove ? "🎉 Free delivery mil gayi!" : rs(CONFIG.freeShipAbove - t.sub) + " aur add karo, free delivery milegi";
  $("cc").textContent = cart.reduce((n, c) => n + c.q, 0); save();
}
$("items").onclick = e => {
  const m = e.target.closest("[data-m]"), p = e.target.closest("[data-p]");
  if (p) cart.find(x => x.k === p.dataset.p).q++;
  if (m) { const c = cart.find(x => x.k === m.dataset.m); c.q--; if (c.q <= 0) cart = cart.filter(x => x !== c); }
  drawCart();
};
$("pay").onclick = () => {
  if (!cart.length) return toast("Pehle cart me product daalo");
  const name = $("cName").value.trim(), addr = $("cAddr").value.trim();
  if (!name || !addr) return toast("Naam aur address likho");
  const t = totals();
  const lines = cart.map((c, i) => { const p = byId(c.id); return (i + 1) + ". " + p.n + " | Size " + c.z + " | Qty " + c.q + " | " + rs(p.p * c.q); });
  const msg = "*New Order - " + CONFIG.shopName + "*\n\n" + lines.join("\n") + "\n\nSubtotal: " + rs(t.sub) + "\nDelivery: " + (t.ship ? rs(t.ship) : "Free") + "\n*Total: " + rs(t.tot) + "*\n\nNaam: " + name + "\nAddress: " + addr;
  window.open(waLink(msg), "_blank", "noopener");
};

/* ---------- 3D product viewer (three.js) ---------- */
let R, S, C, mesh, vp = null, raf = 0, last = 0, drag = false, px = 0, py = 0, auto = true, tx = 0, ty = 0;
function faceTexture(p, src) {
  const cv = document.createElement("canvas"); cv.width = 512; cv.height = 640;
  const x = cv.getContext("2d"), g = x.createLinearGradient(0, 0, 512, 640); g.addColorStop(0, p.g[0]); g.addColorStop(1, p.g[1]);
  x.fillStyle = g; x.fillRect(0, 0, 512, 640);
  x.textAlign = "center"; x.font = "230px serif"; x.fillText(p.e, 256, 330);
  x.fillStyle = "rgba(255,255,255,.95)"; x.font = "700 34px sans-serif"; x.fillText(p.n, 256, 520);
  x.font = "26px sans-serif"; x.fillText(CONFIG.shopName, 256, 570);
  const tex = new THREE.CanvasTexture(cv);
  if (src) new THREE.TextureLoader().load(src, t => { mesh && (mesh.material[src === p.img2 && p.img2 ? 5 : 4].map = t, mesh.material[src === p.img2 && p.img2 ? 5 : 4].needsUpdate = true); });
  return tex;
}
function openViewer(p) {
  vp = p; $("vTitle").textContent = p.n; $("vPrice").innerHTML = rs(p.p) + "<s>" + rs(p.o) + "</s>";
  $("vSizes").innerHTML = SIZES[p.c].map(x => '<button class="sz' + (x === size(p) ? " on" : "") + '" data-z="' + x + '">' + x + "</button>").join("");
  $("viewer").classList.add("open"); document.body.style.overflow = "hidden";
  if (!window.THREE) { toast("3D library load nahi hui. Internet check karo."); return; }
  if (!R) {
    R = new THREE.WebGLRenderer({ canvas: $("vc"), alpha: true, antialias: true }); R.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    S = new THREE.Scene(); C = new THREE.PerspectiveCamera(40, 1, .1, 50); C.position.z = 7;
  }
  if (mesh) { S.remove(mesh); mesh.material.forEach(m => { m.map && m.map.dispose(); m.dispose(); }); mesh.geometry.dispose(); }
  const side = new THREE.MeshBasicMaterial({ color: 0x222222 });
  const front = new THREE.MeshBasicMaterial({ map: faceTexture(p), color: 0xffffff }), back = new THREE.MeshBasicMaterial({ map: faceTexture(p), color: 0xffffff });
  mesh = new THREE.Mesh(new THREE.BoxGeometry(3.2, 4, .35), [side, side, side, side, front, back]);
  mesh.rotation.set(.1, -.5, 0); tx = .1; ty = -.5; S.add(mesh);
  const load = (src, i) => src && new THREE.TextureLoader().load(src, t => { mesh.material[i].map = t; mesh.material[i].needsUpdate = true; }, undefined, () => {});
  load(p.img, 4); load(p.img2 || p.img, 5);
  C.position.z = 7; auto = true; sizeViewer(); last = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(vloop);
}
function sizeViewer() { if (!R) return; const c = $("vc"), w = c.clientWidth, h = c.clientHeight; R.setSize(w, h, false); C.aspect = w / h; C.updateProjectionMatrix(); }
function vloop(now) {
  raf = requestAnimationFrame(vloop);
  if (now - last < 33) return; last = now;   // ~30 FPS cap
  if (auto && !drag) ty += .012;
  mesh.rotation.y += (ty - mesh.rotation.y) * .2; mesh.rotation.x += (tx - mesh.rotation.x) * .2;
  R.render(S, C);
}
function closeViewer() { $("viewer").classList.remove("open"); document.body.style.overflow = ""; cancelAnimationFrame(raf); }
const vc = $("vc");
vc.addEventListener("pointerdown", e => { drag = true; auto = false; px = e.clientX; py = e.clientY; vc.setPointerCapture(e.pointerId); vc.style.cursor = "grabbing"; });
vc.addEventListener("pointermove", e => { if (!drag) return; ty += (e.clientX - px) * .01; tx = Math.max(-.8, Math.min(.8, tx + (e.clientY - py) * .006)); px = e.clientX; py = e.clientY; });
const up = () => { drag = false; vc.style.cursor = "grab"; setTimeout(() => { if (!drag) auto = true; }, 2500); };
vc.addEventListener("pointerup", up); vc.addEventListener("pointercancel", up);
vc.addEventListener("wheel", e => { e.preventDefault(); C.position.z = Math.max(4, Math.min(10, C.position.z + e.deltaY * .005)); }, { passive: false });
let pinch = 0;
vc.addEventListener("touchmove", e => { if (e.touches.length === 2) { const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); if (pinch) C.position.z = Math.max(4, Math.min(10, C.position.z - (d - pinch) * .02)); pinch = d; } }, { passive: true });
vc.addEventListener("touchend", () => pinch = 0);
addEventListener("resize", sizeViewer);
$("vClose").onclick = closeViewer;
$("viewer").onclick = e => { if (e.target === $("viewer")) closeViewer(); };
addEventListener("keydown", e => { if (e.key === "Escape") { closeViewer(); openCart(false); } });
$("vSizes").onclick = e => { const b = e.target.closest("[data-z]"); if (!b) return; pick[vp.id] = b.dataset.z; document.querySelectorAll("#vSizes .sz").forEach(x => x.classList.toggle("on", x === b)); render(); };
$("vAdd").onclick = () => { addToCart(vp); };
$("vWa").onclick = () => { window.open(waLink("*" + CONFIG.shopName + "*\nMujhe ye product chahiye:\n" + vp.n + " | Size " + size(vp) + " | " + rs(vp.p)), "_blank", "noopener"); };

render(); drawCart();
