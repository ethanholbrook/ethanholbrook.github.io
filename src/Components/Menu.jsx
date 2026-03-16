import React, { useState } from "react";

const bg = new URL("../images/Ethan-Yose-Backpack.jpg", import.meta.url).href;
const vegScramble = new URL("../images/menu-items/veg-scramble.jpg", import.meta.url).href;
const brocCash = new URL("../images/menu-items/Broc_cash.jpg", import.meta.url).href;
const peachDessert = new URL("../images/menu-items/peach_dessert.jpg", import.meta.url).href;
const steakRice = new URL("../images/menu-items/steak_and_rice.jpg", import.meta.url).href;
const steakVeg = new URL("../images/menu-items/steak_and_veg.jpg", import.meta.url).href;
const sushi = new URL("../images/menu-items/sushi.png", import.meta.url).href;
const chipotle = new URL("../images/menu-items/chipotle.jpg", import.meta.url).href;
const bakedFish = new URL("../images/menu-items/baked_fish.jpg", import.meta.url).href;

const menu = {
  appetizers: [
    {
      title: "Stuffed Bellies",
      img: bg,
      description: "Crispy veg rolls with fresh herbs",
      macros: { kcal: 220, protein: 6, carbs: 30, fat: 9 },
      ingredients: ["Rice paper", "Carrot", "Cabbage", "Noodles", "Mint"],
    },
    {
      title: "Sushi",
      img: sushi,
      description: "Sourdough with herbed butter",
      macros: { kcal: 320, protein: 8, carbs: 34, fat: 16 },
      ingredients: ["Sourdough", "Butter", "Garlic", "Parsley", "Salt"],
    },
    {
      title: "Caprese Salad",
      img: bg,
      description: "Tomato, mozzarella, basil",
      macros: { kcal: 180, protein: 9, carbs: 8, fat: 12 },
      ingredients: ["Tomato", "Mozzarella", "Basil", "Olive oil", "Balsamic"],
    },
  ],
  entrees: [
    {
      title: "Veg Scramble + Sausage and Waffles",
      img: vegScramble,
      description: "Savory + sweet, house maple",
      macros: { kcal: 640, protein: 32, carbs: 64, fat: 28 },
      ingredients: ["Eggs", "Veg sausage", "Waffle", "Maple", "Veg mix"],
    },
    {
      title: "Baked Fish",
      img: bakedFish,
      description: "Al dente with seasonal veg",
      macros: { kcal: 520, protein: 18, carbs: 82, fat: 14 },
      ingredients: ["Pasta", "Zucchini", "Tomato", "Peas", "Parmesan"],
    },
    {
      title: "Broccoli Cashew",
      img: brocCash,
      description: "Lemon + dill, roasted veg",
      macros: { kcal: 480, protein: 34, carbs: 10, fat: 32 },
      ingredients: ["Salmon", "Lemon", "Dill", "Olive oil", "Vegetables"],
    },
    {
      title: "Steak-Veg",
      img: steakVeg,
      description: "Ginger garlic glaze",
      macros: { kcal: 430, protein: 22, carbs: 48, fat: 16 },
      ingredients: ["Tofu", "Broccoli", "Bell pepper", "Ginger", "Garlic"],
    },
    {
      title: "Steak-Rice",
      img: steakRice,
      description: "Savory steak with garlic rice",
      macros: { kcal: 650, protein: 40, carbs: 70, fat: 25 },
      ingredients: ["Steak", "Rice", "Garlic", "Soy sauce", "Green onions"],
    },
    {
      title: "Chipotle Chicken Bowl",
      img: chipotle,
      description: "Spicy with black beans and corn",
      macros: { kcal: 580, protein: 38, carbs: 60, fat: 18 },
      ingredients: ["Chicken", "Rice", "Black beans", "Corn", "Chipotle sauce"],
    },
  ],
  desserts: [
    {
      title: "Peach Dessert",
      img: peachDessert,
      description: "Velvety with graham crust",
      macros: { kcal: 460, protein: 8, carbs: 42, fat: 28 },
      ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham", "Vanilla"],
    },
    {
      title: "Chocolate Cookie Dough Ice Cream",
      img: bg,
      description: "Rich and airy, whipped cream",
      macros: { kcal: 410, protein: 7, carbs: 35, fat: 26 },
      ingredients: ["Dark chocolate", "Cream", "Eggs", "Sugar", "Cocoa"],
    },
  ],
};

function MenuCard({ item }) {
  const [open, setOpen] = useState(false);
  const src = item.img || bg;

  return (
    <article className={open ? "menu-card menu-card-open" : "menu-card"}>
      <div className="menu-media">
        <img
          src={src}
          alt={item.title}
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== bg) {
              event.currentTarget.src = bg;
            }
          }}
        />
      </div>

      <div className="menu-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button
          className="menu-reveal-btn"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {open && (
        <div className="menu-reveal">
          <div>
            <h4>Macros</h4>
            <ul>
              <li>
                <span>Calories</span>
                <b>{item.macros.kcal}</b>
              </li>
              <li>
                <span>Protein</span>
                <b>{item.macros.protein} g</b>
              </li>
              <li>
                <span>Carbs</span>
                <b>{item.macros.carbs} g</b>
              </li>
              <li>
                <span>Fat</span>
                <b>{item.macros.fat} g</b>
              </li>
            </ul>
          </div>
          <div>
            <h4>Ingredients</h4>
            <ul>
              {item.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Menu() {
  const categories = Object.keys(menu);

  return (
    <main className="menu-page">
      <div className="menu-shell">
        <section className="menu-hero">
          <p className="menu-kicker">Personal Kitchen Log</p>
          <h1 className="menu-title">Menu</h1>
          <p className="menu-copy">
            A collection of dishes I like cooking. Tap any card for nutrition and ingredients.
          </p>
        </section>

        {categories.map((category) => (
          <section className="menu-section" id={category} key={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="menu-grid">
              {menu[category].map((item) => (
                <MenuCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
