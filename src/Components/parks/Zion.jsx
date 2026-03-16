import React from "react";

const zionImage = new URL("../../images/nps/angel_landing_front.jpg", import.meta.url).href;

const Zion = () => {
  return (
    <main className="park-detail-page">
      <section className="park-detail-shell">
        <p className="parks-kicker">National Parks</p>
        <h1 className="parks-title">Zion National Park</h1>
        <p className="parks-copy">Desert sandstone, steep trails, and canyon light.</p>
        <img src={zionImage} alt="Zion National Park ridge and canyon landscape" className="park-detail-image" />
      </section>
    </main>
  );
};

export default Zion;
