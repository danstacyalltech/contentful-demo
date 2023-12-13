import Image from "next/image";
import React from "react";

const SpeciesHeader = () => {
  return (
    <header className="py-10 text-white font-bold flex justify-around px-20">
      <div className="content-center flex-col">
        <Image
          src="https://creative.alltech.com/m/897ef1214d44f694/Digital_PNG-icon-check-circle-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">All</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/4226208808dac688/Digital_PNG-icon-dairy-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Dairy</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/8df82d8dabce5fc3/Digital_PNG-icon-cattle-grazing-P431.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Beef</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/6f4429c17d7184ca/Digital_PNG-icon-chicken-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Poultry</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/b441a848ce8fbc2f/Digital_PNG-icon-pig-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Pig</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/f4b96c0784ddd6a9/Digital_PNG-icon-fish-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Aquaculture</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/06ed7679db594aea/Digital_PNG-icon-horse-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Equine</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/f4464bb7211cf804/Digital_PNG-icon-dog-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Pet</p>
      </div>
      <div className="content-center place-items-center">
        <Image
          src="https://creative.alltech.com/m/33e6859145cb5d54/Digital_PNG-icon-lightbulb-P431-ai.png"
          alt="checkmark"
          width={40}
          height={40}
        />
        <p className="text-black ">Features</p>
      </div>
    </header>
  );
};

export default SpeciesHeader;
