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
    elementRef.current.setAttribute("stroke", "#121212");
    elementRef.current.style.transform = "rotate(45deg)";
    // elementRef.current.style.transition = "transform .3s linear";
    // elementRef.current.style.transformOrigin = "center";
  }

  function handleMouseLeave() {
    onMouseLeave();
    if (!elementRef.current) return;
    elementRef.current?.setAttribute("stroke", "#616161");
    elementRef.current.style.transform = "rotate(0deg)";
  }

  return (
    <li
      className="flex border-b border-b-[#f2f2f2] hover:border-b-gray-300 justify-between items-center pb-8 text-2xl text-[#616161] hover:text-[#121212] transition-colors duration-300 ease-in cursor-pointer"
      onMouseEnter={handleImgChange}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <Arrow ref={elementRef} />
    </li>
  );
}
