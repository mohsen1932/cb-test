import React from "react";
import keygen from "Helpers/keygen";
import Pack from "./Pack";

const ThemePacks = () => {
  const packs = [
    {
      title: "Christmas Pack",
      image: "/assets/christmas-min.png",
      url: "#",
      images: 25,
      vectors: 0,
    },
    {
      title: "Autumn Pack",
      image: "/assets/bundle21.png",
      url: "#",
      images: 22,
      vectors: 3,
    },
  ];
  return (
    <div>
      <div className="row align-items-center ">
        <div class="col-auto mr-auto">
          <h2>Save 80% with Theme Packs</h2>
        </div>
        <div class="col-auto">
          <a href="#">See all Theme Packs</a>
        </div>
      </div>
      <div className="row">
        {packs.map((item) => (
          <div className="col-12 col-lg-6 packs " key={keygen()}>
            <Pack item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemePacks;
