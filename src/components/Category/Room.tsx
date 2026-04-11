import { useRef } from "react";

import Arrow from "./Arrow";

interface RoomType {
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

{
  /* className = room */
}
export default function Room({
  children,
  onMouseEnter,
  onMouseLeave,
}: RoomType) {
  const elementRef = useRef<SVGPathElement>(null);

  function handleImgChange() {
    onMouseEnter();

    if (!elementRef.current) return;
    elementRef.current.setAttribute("stroke", "#101828");
    elementRef.current.style.transform = "rotate(45deg)";
  }

  function handleMouseLeave() {
    onMouseLeave();
    if (!elementRef.current) return;
    elementRef.current?.setAttribute("stroke", "#6a7282");
    elementRef.current.style.transform = "rotate(0deg)";
  }

  return (
    <li
      className="flex border-b border-b-[#f2f2f2] hover:border-b-gray-200 justify-between items-center pb-8 text-2xl text-gray-500 hover:text-gray-900 transition-colors duration-300 ease-in cursor-pointer"
      onMouseEnter={handleImgChange}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <Arrow ref={elementRef} />
    </li>
  );
}
