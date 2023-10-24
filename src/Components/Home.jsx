import React from "react";
import Databiz from "../assets/images/client-databiz.svg";
import Maker from "../assets/images/client-maker.svg";
import Meet from "../assets/images/client-meet.svg";
import AudioPhile from "../assets/images/client-audiophile.svg";

function Home() {
  return (
    <section>
      <div className="bg-hero-mobile bg-cover bg-center h-96">
        {/* image from Hero  */}
      </div>
      <div className="px-5 ">
        <h1 className="text-4xl font-bold text-center my-4">Make Remote Work</h1>
        <p className="max-w-xs text-center mt-6"> 
          Get your teamm in sync, no matter your location. Streamline processs,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-almostBlack text-almostWhite p-4 px-8 rounded-lg my-6 ml-20">Learn More</button>
      </div>
      <div className=" flex justify-center items-center px-2 mt-10">
        <div className="mx-2">
          <img src={Databiz} alt="" />
        </div>
        <div className="mx-2">
          <img src={Maker} alt="" />
        </div>
        <div className="mx-2">
          <img src={Meet} alt="" />
        </div>
        <div className="mx-2">
          <img src={AudioPhile} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
