import searchIcon from "../assets/icons/search.svg";
import cartIcon from "../assets/icons/cart.svg";
import logo from "../assets/icons/woud.svg";
import Hamburger from "./header/Hamburger";
import NavLinks from "./header/NavLinks";

export default function Navbar() {
  return (
    <div className="container flex flex-col relative justify-between md:flex-row md:static">
      <div className="flex justify-between relative">
        <div className="logo">
          <a href="./index.html">
            <img src={logo} alt="Woud logo" />
          </a>
        </div>

        <Hamburger />
      </div>

      <NavLinks />

      <div className="flex gap-x-4">
        <span>
          <img src={searchIcon} />
        </span>
        <span>
          <img src={cartIcon} />
        </span>
      </div>
    </div>
  );
}
