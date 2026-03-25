interface HamburgerProps {
  onToggle: () => void;
  isOpen: boolean;
}

export default function Hamburger({ onToggle, isOpen }: HamburgerProps) {
  return (
    <div
      className="flex flex-col gap-y-1 justify-center items-end cursor-pointer relative size-11 md:hidden"
      onClick={onToggle}
    >
      <div
        className={`bg-[#121212] h-0.5 w-[80%] rounded-xs absolute transition-all duration-300 ease-in ${isOpen ? "rotate-45" : "-translate-y-2"}`}
      ></div>
      <div
        className={`bg-[#121212] h-0.5 w-[80%] rounded-xs absolute transition-all duration-300 ease-in ${isOpen ? "hidden" : ""}`}
      ></div>
      <div
        className={`bg-[#121212] h-0.5 w-[80%] rounded-xs absolute transition-all duration-300 ease-in ${isOpen ? "-rotate-45" : "translate-y-2"}`}
      ></div>
    </div>
  );
}
