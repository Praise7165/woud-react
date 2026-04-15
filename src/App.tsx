import { useState } from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/Hero/hero";
import Marquee from "./components/Marquee/Marquee";
import Category from "./components/Category/Category";
import Featured from "./components/Featured/Featured";

function App() {
  // generics
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      <header
        className={`py-6 ${isOpen ? "h-100" : "h-18"} bg-white border-b border-b-[#f2f2f2] overflow-hidden transition-[height] duration-500 ease-in-out fixed z-2000 w-full md:pt-5 md:pb-4 md:h-auto md:overflow-visible`}
      >
        <Navbar onToggle={handleOpen} isOpen={isOpen} />
      </header>

      <main>
        <Hero />
        <Marquee />
        <Category />
        <Featured />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
