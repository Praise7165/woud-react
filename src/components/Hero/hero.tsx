import Container from "../Container";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-10">
      {/* has class 'hero-container' */}
      <Container className="flex">
        <div className="flex m-auto text-center flex-col items-center sm:max-w-[90%] md:max-w-[80%]">
          <h1>Find Luxurious furniture with the best quality</h1>
          <p className="mt-4 mx-auto mb-8 max-w-160">
            Discover the best unique furniture for your home. We provide the
            most unique sophisticated pieces mainly for your comfort. Comfort is
            our main goal for our customers.
          </p>
          <div>
            <button className="main-button">Shop Now</button>
            <button className="sec-button">Explore collection</button>
          </div>
        </div>
      </Container>
      <div className="hero-image"></div>
    </section>
  );
}
