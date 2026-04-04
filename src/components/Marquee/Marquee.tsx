import { useMarquee } from "../../hooks/useMarquee";

import Basset from "../../assets/icons/Bassett.svg";
import Forbes from "../../assets/icons/Forbes.svg";
import Hayneedle from "../../assets/icons/Hayneedle.svg";
import Silhouette from "../../assets/icons/Silhouette.svg";
import Container from "../Container";
import MarqueeWrapper from "./MarqueeWrapper";

export default function Marquee() {
  const { ref } = useMarquee({ speed: 2, pauseOnHover: true });

  return (
    <>
      {/* class = marque */}
      <section className="bg-[#dc2f02] py-12 px-0 overflow-hidden relative">
        <Container className="flex relative">
          <MarqueeWrapper
            className="flex gap-30 will-change-transform whitespace-nowrap"
            ref={ref}
          >
            <img src={Basset} />
            <img src={Forbes} />
            <img src={Hayneedle} />
            <img src={Silhouette} />

            {/* Duplicate */}
            <img src={Basset} />
            <img src={Forbes} />
            <img src={Hayneedle} />
            <img src={Silhouette} />
          </MarqueeWrapper>
        </Container>
      </section>
    </>
  );
}
