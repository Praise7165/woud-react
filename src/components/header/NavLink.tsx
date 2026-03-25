interface NavLinkProps {
  text: string;
}

export default function NavLink({ text }: NavLinkProps) {
  return (
    <li>
      <a href="" className="leading-[160%] text-[#121212] hover:text-[#dc2f02]">
        {text}
      </a>
    </li>
  );
}
