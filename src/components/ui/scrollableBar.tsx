import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4,
  },
};

function ScrollableBar({ children }: { children: ReactNode }) {
  return (
    <Carousel containerClass="w-full flex gap-2" responsive={responsive}>
      {children}
    </Carousel>
  );
}

export default ScrollableBar;
