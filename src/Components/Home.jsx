import React from "react";
import Databiz from "../assets/images/client-databiz.svg";
import Maker from "../assets/images/client-maker.svg";
import Meet from "../assets/images/client-meet.svg";
import AudioPhile from "../assets/images/client-audiophile.svg";

function Home() {
  return (
    <section className="md:grid md:grid-cols-2 md:container h-screen">
      <div className=" h-96 bg-hero-mobile bg-cover bg-center md:bg-hero-desktop md:bg-contain bg-no-repeat col-start-2 row-span-3 md:h-4/5">
        {/* image from Hero  */}
      </div>
      <div className=" md:col-start-1 md:text-left md:h-0 md:row-start-1 md:pt-20 md:ml-28">
        <h1 className="text-4xl font-bold text-center my-10 md:my-0 md:text-7xl md:max-w-lg md:text-left">
          Make Remote Work
        </h1>
        <p className="max-w-xs text-center mt-6 m-auto md:ml-0 md:text-left ">
          Get your teamm in sync, no matter your location. Streamline processs,
          create team rituals, and watch productivity soar.
        </p>
        <button className="ml-28 bg-almostBlack text-almostWhite p-4 px-8 rounded-lg my-6 md:text-almostWhite sm:ml-72 md:ml-0">
          Learn More
        </button>
      </div>
      <div className=" flex justify-center items-center px-2 mt-10 md:col-span-1 md:mt-0 md:row-start-3 md:h-0">
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
