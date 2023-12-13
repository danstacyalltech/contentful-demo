import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
		<header className="flex items-center justify-around">
		<Image
			src="https://creative.alltech.com/m/451c4ab6778e6040/Digital_PNG-Alltech-logo-terracotta-black.png"
			alt="Alltech Logo"
			width={200}
			height={200}
			className="pl-4"
			/>
			<nav className="flex items-center pr-4">
        <div className="flex items-center">
          <Image
            src={
              "https://creative.alltech.com/m/293f56a5e2fe7e21/Digital_JPG-icon-flask-P167-ai.jpg"
            }
            alt="Science Icon"
            width={35}
            height={35}
          />
          <p className="text-xl">Animal Nutrition</p>
        </div>
        <div className="flex items-center pl-4">
          <Image
            src={
              "https://creative.alltech.com/m/48c82bb350ea4d54/Digital_JPG-icon-barley-silage-P167.jpg"
            }
            alt="Crop Icon"
            width={35}
            height={35}
          />
          <p className="text-xl">Crop Science</p>
        </div>
        <div className="flex items-center pl-4">
          <Image
            src={"/favicon.ico"}
            alt="About Icon"
            width={30}
            height={30}
          />
          <p className="text-xl">About</p>
        </div>
        <div className="flex items-center pl-4">
          <Image
            src={
              "https://creative.alltech.com/m/a371de94c9eab9af/Digital_PNG-icon-freeze-dry-P167.png"
            }
            alt="Science Icon"
            width={35}
            height={35}
          />
          <p className="text-xl">News</p>
        </div>
        <div className="flex items-center pl-4">
          <Image
            src={
              "https://creative.alltech.com/m/35257c888fbefded/Digital_PNG-icon-cart-P167-ai.png"
            }
            alt="Science Icon"
            width={35}
            height={35}
          />
          <p className="text-xl">Store</p>
        </div>
        <div className="flex items-center pl-4 pt-2">
          <Image
            src={
              "https://creative.alltech.com/m/81b0792f7111f0f1/Digital_PNG-Planet-of-Plenty-P431-P376-horizontal-logo.png"
            }
            alt="Science Icon"
            width={180}
            height={180}
          />
          {/* <p className="text-xl">Planet of Plenty</p> */}
        </div>
        {/* <Image src={} alt="" width={} height={}/>.
        <Image src={} alt="" width={} height={}/>.
        <Image src={} alt="" width={} height={}/>. */}
      </nav>
    </header>
  )};

	export default Header;