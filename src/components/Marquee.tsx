import Basset from "../assets/icons/Bassett.svg";
import Forbes from "../assets/icons/Forbes.svg";
import Hayneedle from "../assets/icons/Hayneedle.svg";
import Silhouette from "../assets/icons/Silhouette.svg";
import Container from "./Container";

export default function Marquee() {
  return (
    <>
      {/* class = marque */}
      <section className="marquee bg-[#dc2f02] py-12 px-0 overflow-hidden">
        <Container className="flex justify-center gap-30 animate-marquee-mobile md:animate-marquee">
          <img src={Basset} />
          <img src={Forbes} />
          <img src={Hayneedle} />
          <img src={Silhouette} />
          <img src={Basset} />
          <img src={Forbes} />
          <img src={Hayneedle} />
          <img src={Silhouette} />
        </Container>
      </section>
    </>
  );
}
