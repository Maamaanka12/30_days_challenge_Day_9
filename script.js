// VESTIRE Nº9 — shop data + interactions
const PRODUCTS = [
  { id:1, name:"Navy Two-Piece Suit", cat:"suits", price:349, tag:"120s WOOL",
    img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=700&auto=format&fit=crop" },
  { id:2, name:"Charcoal Double-Breasted", cat:"suits", price:389, tag:"CANVASSED CHEST",
    img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=700&auto=format&fit=crop" },
  { id:3, name:"Ecru Overshirt", cat:"street", price:89, tag:"BRUSHED COTTON",
    img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=700&auto=format&fit=crop" },
  { id:4, name:"Selvedge Indigo Denim", cat:"street", price:129, tag:"14OZ JAPANESE",
    img:"https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=700&auto=format&fit=crop" },
  { id:5, name:"Heavyweight White Tee", cat:"essentials", price:35, tag:"240 GSM · 3-PACK",
    img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=700&auto=format&fit=crop" },
  { id:6, name:"Camel Overcoat", cat:"suits", price:299, tag:"WINTER DROP",
    img:"https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=700&auto=format&fit=crop" },
  { id:7, name:"Black Leather Jacket", cat:"street", price:249, tag:"FULL-GRAIN",
    img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=700&auto=format&fit=crop" },
  { id:8, name:"Oxford Shirt — Sky", cat:"essentials", price:65, tag:"GARMENT WASHED",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=700&auto=format&fit=crop" },
];

const grid = document.getElementById("grid");
const chips = document.querySelectorAll(".chip");
const toast = document.getElementById("toast");
let activeFilter = "all";

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(()=>toast.classList.remove("show"), 2200);
}

function render(){
  grid.innerHTML = "";
  PRODUCTS.filter(p => activeFilter === "all" || p.cat === activeFilter).forEach(p => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="ph"><img loading="lazy" src="${p.img}" alt="${p.name}"><span class="cat mono">${p.cat}</span></div>
      <div class="body">
        <p class="mono small">${p.tag}</p>
        <h3>${p.name}</h3>
        <div class="row"><span class="price">$${p.price}</span></div>
      </div>`;
    grid.appendChild(el);
  });
}

chips.forEach(c => c.addEventListener("click", () => {
  chips.forEach(x => x.classList.remove("active"));
  c.classList.add("active");
  activeFilter = c.dataset.filter;
  render();
}));

// mobile nav
const burger = document.getElementById("burger"), navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// active link on scroll
const secs = ["home","about","clothes","craft","contact"];
window.addEventListener("scroll", () => {
  let cur = "home";
  secs.forEach(id => { const e = document.getElementById(id); if(e && scrollY >= e.offsetTop - 200) cur = id; });
  document.querySelectorAll(".links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
}, { passive:true });

// newsletter
document.getElementById("newsForm").addEventListener("submit", e => {
  e.preventDefault();
  const em = document.getElementById("email").value.trim();
  document.getElementById("newsMsg").textContent = em ? `✓ You're on the list — welcome, ${em}` : "";
  showToast("Subscribed to the drop list ✓");
  e.target.reset();
});

render();
