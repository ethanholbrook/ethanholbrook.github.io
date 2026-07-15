import React from "react";

const yosemiteImage = new URL("../../images/nps/yose_falls.jpg?as=webp&width=1920&quality=80", import.meta.url).href;

const Yosemite = () => {
  return (
    <main className="park-detail-page">
      <section className="park-detail-shell">
        <p className="parks-kicker">National Parks</p>
        <h1 className="parks-title">Yosemite National Park</h1>
        <p className="parks-copy">Waterfalls, granite, and valley scale.</p>
        <img src={yosemiteImage} alt="Yosemite National Park waterfall landscape" className="park-detail-image" />
      </section>
    </main>
  );
};

export default Yosemite;
