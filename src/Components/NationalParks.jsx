import React from "react";
import { Link } from "react-router-dom";

const yosemite = new URL("../images/nps/yose_falls.jpg?as=webp&width=1000&quality=80", import.meta.url).href;
const zionFront = new URL("../images/nps/angel_landing_front.jpg?as=webp&width=1000&quality=80", import.meta.url).href;
const zionBack = new URL("../images/nps/angel_landing_back.jpg?as=webp&width=1000&quality=80", import.meta.url).href;

const parks = [
  {
    name: "Yosemite",
    path: "/parks/yosemite",
    image: yosemite,
    note: "Water, granite, and big valley light.",
  },
  {
    name: "Zion",
    path: "/parks/zion",
    image: zionFront,
    note: "Sandstone walls and exposed ridgelines.",
  },
  {
    name: "Zion Back View",
    path: "/parks/zion",
    image: zionBack,
    note: "Alternate angle from the same trail system.",
  },
];

const NationalParks = () => {
  return (
    <main className="parks-page">
      <section className="parks-hero">
        <h1 className="parks-title">Parks Gallery</h1>
        <p className="parks-copy">
          A growing collection of photos from hikes and road trips. Open any card to view park
          pages.
        </p>
      </section>

      <section className="parks-grid" aria-label="National park photos">
        {parks.map((park) => (
          <Link key={park.name + park.note} to={park.path} className="park-card">
            <figure>
              <img src={park.image} alt={park.name} loading="lazy" />
              <figcaption>
                <h2>{park.name}</h2>
                <p>{park.note}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default NationalParks;
