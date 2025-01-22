// filepath: /workspaces/ethanholbrook.github.io/src/Components/Menu.jsx
import React from "react";

const menuItems = {
  appetizers: [
    { title: "Spring Rolls", description: "Crispy rolls with vegetables" },
    { title: "Garlic Bread", description: "Toasted bread with garlic butter" },
  ],
  entrees: [
    { title: "Grilled Chicken", description: "Served with steamed vegetables" },
    { title: "Pasta Primavera", description: "Pasta with fresh vegetables" },
  ],
  desserts: [
    { title: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust" },
    { title: "Chocolate Mousse", description: "Rich chocolate mousse with whipped cream" },
  ],
};

const Menu = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <h1>Menu</h1>
      {Object.keys(menuItems).map((category) => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <ul>
            {menuItems[category].map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;