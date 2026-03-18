import NavLink from "./Navlink";

export default function NavLinks() {
  return (
    <nav>
      <ol className="flex flex-col my-16 gap-y-6 md:flex-row md:my-0 md:gap-x-6">
        <NavLink text="Product" />
        <NavLink text="Blog" />
        <NavLink text="About" />
      </ol>
    </nav>
  );
}
