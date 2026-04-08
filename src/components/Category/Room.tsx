import arrow from "../../assets/icons/arrow.svg";

{
  /* className = room */
}
export default function Room({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border border-b-[#f2f2f2] justify-between items-center pb-8">
      {children}
      <img className="h-5" src={arrow} alt="arrow" />
    </div>
  );
}
