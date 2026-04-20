interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: string;
  type?: string;
}

export default function Button({
  children,
  className,
  size = "big",
  type = "primary",
}: ButtonProps) {
  return (
    <button
      className={`${size == "big" ? "py-3 text-[17px] rounded-xl" : "py-1.5 rounded-lg"} px-4 font-medium not-italic cursor-pointer ${className} ${type == "primary" ? "border-none bg-[#dc2f02] hover:bg-[#cf3812] text-[whitesmoke]" : "bg-transparent hover:bg-[#dc2f02] text-[#dc2f02] hover:text-[whitesmoke] border border-solid border-[#e0d1cd]"}`}
    >
      {children}
    </button>
  );
}
