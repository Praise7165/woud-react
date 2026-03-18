type HamburgerProps = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function Hamburger({ onToggle, isOpen }: HamburgerProps) {
  return (
    <div
      className="flex flex-col gap-y-1 justify-center md:hidden"
      onClick={onToggle}
    >
      <div
        className={`bg-[#121212] h-0.5 w-6 rounded-xs transition-all duration-300 ease-in ${isOpen ? "rotate-45" : ""}`}
      ></div>
      <div
        className={`bg-[#121212] h-0.5 w-6 rounded-xs transition-all duration-300 ease-in ${isOpen ? "-rotate-45 translate-x-1 -translate-y-1" : ""}`}
      ></div>
      <div
        className={`bg-[#121212] h-0.5 w-6 rounded-xs transition-all duration-300 ease-in ${isOpen ? "hidden" : ""}`}
      ></div>
    </div>
  );
}
