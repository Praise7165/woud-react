import Container from "../Container";
import Button from "../Button";

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
            {/* class = main-button */}
            <Button className="bg-[#dc2f02] hover:bg-[#cf3812] text-[whitesmoke] mr-4">
              Shop Now
            </Button>

            {/* class = sec-button */}
            <Button className="bg-transparent hover:bg-[#dc2f02] text-[#dc2f02] hover:text-[whitesmoke] border border-solid border-[#e0d1cd]">
              Explore Collections
            </Button>
          </div>
        </div>
      </Container>

      {/* class = hero-image */}
      <div className="h-120 mt-14 bg-[url('././assets/images/heroImage.jpg')] bg-cover bg-center mx-auto lg:h-160"></div>
    </section>
  );
}
