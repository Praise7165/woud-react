import arrow from "../../assets/icons/arrow.svg";

{
  /* className = room */
}
export default function Room({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border border-gray-200 justify-between items-center">
      {children}
      <img className="h-5" src={arrow} alt="arrow" />
    </div>
  );
}
