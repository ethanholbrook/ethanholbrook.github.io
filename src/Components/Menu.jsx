// filepath: /workspaces/ethanholbrook.github.io/src/Components/Menu.jsx
import React, { useState } from "react";

// ✅ Force Parcel to bundle this exact file (no path ambiguity)
const bg = new URL("../images/Ethan-Yose-Backpack.jpg", import.meta.url).href;
const veg_scram = new URL("../images/menu-items/veg-scramble.jpg", import.meta.url).href;
const broc_cash = new URL("../images/menu-items/Broc_cash.jpg", import.meta.url).href;
const peach_des = new URL("../images/menu-items/peach_dessert.jpg", import.meta.url).href;
const steak_rice = new URL("../images/menu-items/steak_and_rice.jpg", import.meta.url).href;
const steak_veg = new URL("../images/menu-items/steak_and_veg.jpg", import.meta.url).href;
const sushi = new URL("../images/menu-items/sushi.png", import.meta.url).href;
const chipotle = new URL("../images/menu-items/chipotle.jpg", import.meta.url).href;
const baked_fish = new URL("../images/menu-items/baked_fish.jpg", import.meta.url).href;

const menu = {
  appetizers: [
    { title: "Stuffed Bellies", img: bg,
      description: "Crispy veg rolls with fresh herbs",
      macros: { kcal: 220, protein: 6, carbs: 30, fat: 9 },
      ingredients: ["Rice paper", "Carrot", "Cabbage", "Noodles", "Mint"] },
    { title: "Sushi", img: sushi,
      description: "Sourdough with herbed butter",
      macros: { kcal: 320, protein: 8, carbs: 34, fat: 16 },
      ingredients: ["Sourdough", "Butter", "Garlic", "Parsley", "Salt"] },
    { title: "Caprese Salad", img: bg,
      description: "Tomato, mozzarella, basil",
      macros: { kcal: 180, protein: 9, carbs: 8, fat: 12 },
      ingredients: ["Tomato", "Mozzarella", "Basil", "Olive oil", "Balsamic"] },
  ],
  entrees: [
    { title: "Veg Scramble + Sausage & Waffles", img: veg_scram,
      description: "Savory + sweet, house maple",
      macros: { kcal: 640, protein: 32, carbs: 64, fat: 28 },
      ingredients: ["Eggs", "Veg sausage", "Waffle", "Maple", "Veg mix"] },
    { title: "Baked Fish", img: baked_fish,
      description: "Al dente with seasonal veg",
      macros: { kcal: 520, protein: 18, carbs: 82, fat: 14 },
      ingredients: ["Pasta", "Zucchini", "Tomato", "Peas", "Parmesan"] },
    { title: "Broccoli Cashew", img: broc_cash,
      description: "Lemon + dill, roasted veg",
      macros: { kcal: 480, protein: 34, carbs: 10, fat: 32 },
      ingredients: ["Salmon", "Lemon", "Dill", "Olive oil", "Vegetables"] },
    { title: "Steak-Veg", img: steak_veg,
      description: "Ginger garlic glaze",
      macros: { kcal: 430, protein: 22, carbs: 48, fat: 16 },
      ingredients: ["Tofu", "Broccoli", "Bell pepper", "Ginger", "Garlic"] },
    { title: "Steak-Rice", img: steak_rice,
      description: "Savory steak with garlic rice",
      macros: { kcal: 650, protein: 40, carbs: 70, fat: 25 },
      ingredients: ["Steak", "Rice", "Garlic", "Soy sauce", "Green onions"] },
    { title: "Chipotle Chicken Bowl", img: chipotle,
      description: "Spicy with black beans & corn",
      macros: { kcal: 580, protein: 38, carbs: 60, fat: 18 },
      ingredients: ["Chicken", "Rice", "Black beans", "Corn", "Chipotle sauce"] },
  ],
  desserts: [
    { title: "Peach Dessert", img: peach_des,
      description: "Velvety with graham crust",
      macros: { kcal: 460, protein: 8, carbs: 42, fat: 28 },
      ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham", "Vanilla"] },
    { title: "Chocolate Cookie Dough Ice Cream", img: bg,
      description: "Rich & airy, whipped cream",
      macros: { kcal: 410, protein: 7, carbs: 35, fat: 26 },
      ingredients: ["Dark chocolate", "Cream", "Eggs", "Sugar", "Cocoa"] },
  ],
};

function MenuCard({ item }) {
  const [open, setOpen] = useState(false);
  const { title, description, img, macros, ingredients } = item;

  // ✅ Always have a valid src; fall back to bg if img is missing
  const src = img || bg;

  return (
    <article className={`card ${open ? "open" : ""}`}>
      <div className="media">
        <img
          src={src}
          alt={title}
          loading="lazy"
          width="800"
          height="600"
          decoding="async"
          onError={(e) => {
            // One-shot swap to fallback if a custom src fails
            if (e.currentTarget.src !== bg) {
              e.currentTarget.src = bg;
            }
          }}
        />
      </div>

      <div className="content">
        <p className="item-desc" title={description}>{description}</p>
        <button
          className="reveal-btn"
          aria-expanded={open}
          aria-controls={`panel-${title}`}
          onClick={() => setOpen(v => !v)}
        >
          {open ? "Hide" : "Details"}
        </button>
      </div>

      <div id={`panel-${title}`} className="reveal" role="region" aria-label={`${title} details`}>
        <h3 className="item-title">{title}</h3>
        <div className="panel-grid">
          <div className="macros">
            <h4>Macros</h4>
            <ul>
              <li><span>Calories</span><b>{macros.kcal}</b></li>
              <li><span>Protein</span><b>{macros.protein} g</b></li>
              <li><span>Carbs</span><b>{macros.carbs} g</b></li>
              <li><span>Fat</span><b>{macros.fat} g</b></li>
            </ul>
          </div>
          <div className="ingredients">
            <h4>Ingredients</h4>
            <ul>{ingredients.map(g => <li key={g}>{g}</li>)}</ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Menu() {
  const categories = Object.keys(menu);
  return (
    <>
      <style>{styles}</style>
      <main className="wrap">
        {categories.map((k) => (
          <section key={k} id={k} className="section">
            <h2 className="section-title">
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </h2>
            <div className="grid">
              {menu[k].slice(0, 4).map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

const styles = `
:root{ --bg:#0b0c10; --panel:rgba(255,255,255,0.06); --muted:#b9bcc6; --text:#f2f3f5; --accent:#00c2ff; color-scheme:dark; }
*{ box-sizing:border-box } body{ margin:0; background:var(--bg); color:var(--text); font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Arial }
.wrap{ margin:0; padding:6px 12px 12px; max-width:none; }
.section{ margin:12px 0 24px; scroll-margin-top: var(--header-h, 80px); }
.section:first-of-type{ margin-top:0 } .section-title{ font-size:1.1rem; margin:0 0 10px }
.grid{ display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:10px; justify-items:stretch; }
.card{ position:relative; overflow:hidden; border-radius:12px; border:1px solid rgba(255,255,255,.08); background:var(--panel); min-height:180px; transition:transform .12s, box-shadow .16s, border-color .12s; }
.card:hover{ transform:translateY(-1px); box-shadow:0 6px 14px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.10) inset; border-color:rgba(255,255,255,.12) }
.media{ position:relative; aspect-ratio:4/3; overflow:hidden; min-height:140px }
.media img{ width:100%; height:100%; object-fit:cover; display:block }
.content{ padding:8px 10px 10px } .item-desc{ margin:0; color:var(--muted); font-size:.9rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis }
.reveal-btn{ margin-top:8px; appearance:none; border:1px solid rgba(255,255,255,.14); background:transparent; color:var(--text); border-radius:8px; padding:6px 8px; font-size:.84rem; cursor:pointer; transition:background .16s, border-color .16s; }
.reveal-btn:hover{ background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.22) }
.reveal{ position:absolute; left:0; right:0; bottom:0; background:linear-gradient(180deg, rgba(10,12,16,.98), rgba(10,12,16,.98)); border-top:1px solid rgba(255,255,255,.08); transform:translateY(102%); transition:transform .22s, opacity .22s; opacity:0; padding:12px; }
.card:hover .reveal, .card.open .reveal{ transform:translateY(0); opacity:1 }
.item-title{ margin:0 0 8px; font-size:1.02rem }
.panel-grid{ display:grid; gap:10px; grid-template-columns:1fr 1fr }
.panel-grid h4{ margin:0 0 6px; font-size:.88rem; letter-spacing:.2px }
.macros ul, .ingredients ul{ list-style:none; margin:0; padding:0 }
.macros li{ display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px dashed rgba(255,255,255,.08) }
.macros li:last-child{ border-bottom:0 } .macros li span{ color:var(--muted) } .macros li b{ font-weight:700 }
.ingredients li{ padding:3px 0; color:var(--muted) }
@media (max-width: 520px){ .wrap{ padding:6px 8px 8px } .grid{ grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)) } }
`;
