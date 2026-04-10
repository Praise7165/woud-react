import arrow from "../../assets/icons/arrow.svg";

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
  return (
    <li
      className="flex border-b border-b-[#f2f2f2] hover:border-b-gray-200 justify-between items-center pb-8 text-2xl text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <img className="h-5" src={arrow} alt="arrow" />
    </li>
  );
}
