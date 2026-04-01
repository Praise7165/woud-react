interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`py-3 px-4 rounded-lg border-none text-[17px] font-medium not-italic transition-all duration-300 ease-linear cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
