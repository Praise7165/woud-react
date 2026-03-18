import Stroke from "./Stroke";

export default function Hamburger() {
  return (
    <div className="flex flex-col gap-y-1 justify-center md:hidden">
      <Stroke />
      <Stroke />
      <Stroke />
    </div>
  );
}
