import React from "react";
import AliceCarousel from "react-alice-carousel";

const ImpactPage = () => {

  return (
    <div className="pb-10 relative">
      <div className="relative mb-28">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center imgg "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/695342/pexels-photo-695342.jpeg)",
            filter: "blur(0px) brightness(0.7) contrast(1.2)",
          }}
        />
        <div className="relative z-1 text-white text-center pt-44">
          <h1 className="text-4xl font-bold mb-4">Our social impact</h1>
          <p className="text-lg mb-8 text-white">
            Join the Green Revolution: Transforming Banking for a Sustainable
            Tomorrow{" "}
          </p>
        </div>
      </div>
      <div className="pt-56 px-12 text-l text-bold text-black pl-44 pr-44 text-center">
        <h1>
          Take a stand for the planet with every dollar. Protect the Earth by
          banking with Aspiration – where your money fights climate change and
          finds a greener home.
        </h1>
      </div>

      <div className="flex gap-14 mt-20 pl-44">
        <div className="text-bold text-3xl "> Deposit Impact Calculator</div>
        <div>
          <input

            className="border-2   border-black rounded-lg px-auto py-2 pl-12 "
            placeholder="Your Deposit"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5 pl-44 w-1/2">

        <div className="flex justify-between">

        <div className="pl-3">Green Infrastructure Projects</div>
        <div className="pr-3">₹ 0</div>

        </div>

        <div className="bg-green-700 h-0.5"></div>

        <div className="flex justify-between">
        <div className="pl-3">Sustainable Agriculture</div>
        <div className="pr-3">₹ 0</div>
        </div>
        <div className="bg-green-700 h-0.5"></div>

        <div className="flex justify-between">
        <div className="pl-3">Social Impact Bonds</div>
        <div className="pr-3">₹ 0</div>
        </div>
        <div className="bg-green-700 h-0.5"></div>

        <div className="flex justify-between">
        <div className="pl-3">Water and Sanitation Projects</div>
        <div className="pr-3">₹ 0</div>
        </div>
        <div className="bg-green-700 h-0.5"></div>

        <div className="flex justify-between">
        <div className="pl-3">Sustainable Transportation</div>
        <div className="pr-3">₹ 0</div>
        </div>

        <div className="bg-green-700 h-0.5"></div>
        
        <div className="flex justify-between">
        <div className="pl-3">Microfinance Initiatives</div>
        <div className="pr-3">₹ 0</div>
</div>
        <div className="bg-green-700 h-0.5"></div>

      </div>

      <div className="pl-44 font-bold text-3xl pt-20">From Dollars to Difference: Trace Your Investments, Drive Change</div>

    </div>

  );
};

export default ImpactPage;
