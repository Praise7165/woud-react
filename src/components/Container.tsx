interface ContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-310 mx-auto px-4 sm:px-6 md:px-4 ${className}`}>
      {children}
    </div>
  );
}
