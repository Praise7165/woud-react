import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/cart.svg";
import logo from "../../assets/icons/woud.svg";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

interface NavbarProps {
  onToggle: () => void;
  isOpen: boolean;
}

export default function Navbar({ onToggle, isOpen }: NavbarProps) {
  return (
    <div className="container flex flex-col relative justify-between md:flex-row md:static">
      <div className="flex justify-between items-center relative">
        <div>
          <a href="./index.html">
            <img src={logo} alt="Woud logo" />
          </a>
        </div>

        <Hamburger onToggle={onToggle} isOpen={isOpen} />
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
