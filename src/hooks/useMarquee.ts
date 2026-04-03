import { useRef, useEffect } from "react";
import { MarqueeClass } from "../lib/animations/marquee";

interface useMarqueeOptions {
  speed?: number;
  pauseOnHover?: boolean;
}

export function useMarquee(options: useMarqueeOptions = {}) {
  const { speed = 2, pauseOnHover = false } = options;
  const elementRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<MarqueeClass>();

  useEffect(() => {
    if (!elementRef.current) return;

    // create a new instance of class MarqueeClass
    marqueeRef.current = new MarqueeClass(elementRef.current, speed);

    // pause and resume on hover in and out

    const container = elementRef.current.parentElement;

    if (pauseOnHover && container) {
      const handleMouseEnter = () => {
        marqueeRef.current?.pause();
      };

      const handleMouseLeave = () => {
        marqueeRef.current?.resume();
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      // clean up / destroyer function for if block
      return () => {
        marqueeRef.current?.pause();
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    // clean up function
    return () => {
      marqueeRef.current?.pause();
    };
  }, [speed, pauseOnHover]);

  return { ref: elementRef, instance: marqueeRef };
}
