import { forwardRef } from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MarqueeWrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={`${className}`}>
        {children}
      </div>
    );
  },
);

export default MarqueeWrapper;
