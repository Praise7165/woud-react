import Container from "../Container";
import HeadingTag from "../HeadingTag";
import ImgWrapper from "../ImgWrapper";
import Button from "../Button";
import TrustItem from "./TrustItem";
import aboutImg from "../../assets/images/about-img.jpg";
import fstar from "../../assets/icons/4-star.svg";

export default function About() {
  return (
    <section className="about-us py-26">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 relative">
        {/* className = f-star */}
        <img src={fstar} className="absolute h-12 -top-8 left-6" />

        {/* className = section-image */}
        <ImgWrapper imgLink={aboutImg} alt="image showing a living area" />

        <div className="s-content">
          <div>
            <div>
              <HeadingTag>Who we are</HeadingTag>
              <h2 className="capitalize">
                We Produce Unique aesthetic furniture designed for your comfort
              </h2>
            </div>
            <p className="mt-6 mb-10">
              Our products are made out of premium quality materials produced
              solely to make your home feel modern and for your comfort. We are
              the most trusted & experienced furniture brands and we ensure we
              give our customers the best.
            </p>
          </div>
          <Button size="small">Learn More</Button>
          <div className="trust-banner flex mt-16 gap-4 justify-between md:mt-8 md:gap-8 lg:mt-24">
            <TrustItem no={25} desc="Years of experience" />
            <TrustItem no={604} desc="Happy Customers" />
            <TrustItem no={300} desc="Completed Projects" />
          </div>
        </div>
      </Container>
    </section>
  );
}
