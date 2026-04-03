import { forwardRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`max-w-310 mx-auto px-4 sm:px-6 md:px-4 ${className}`}
      >
        {children}
      </div>
    );
  },
);

export default Container;
