import React from "react";

import Header from "../components/Home/Header";
import WhySpacesLounge from "../components/Home/Why-Spaces-Lounge";
import ForHost from "../components/Home/For-Host";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <WhySpacesLounge />
        <ForHost />
      </div>
    </div>
  );
}
