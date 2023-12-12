import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <Image
        src="https://creative.alltech.com/m/451c4ab6778e6040/Digital_PNG-Alltech-logo-terracotta-black.png"
        alt="Alltech Logo"
        width={200}
        height={200}
        unoptimized={true}
      />
      <nav className="flex items-center">
        <a
          href="www.alltech.com"
          className="ml-6 text-lg text-terracotta font-bold hover:underline">
          Menu
        </a>
      </nav>
    </header>
  );
}

export default Header;
