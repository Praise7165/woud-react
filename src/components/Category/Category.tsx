import Container from "../Container";
import Room from "./Room";
import defaultImg from "../../assets/images/default-img.jpg";

export default function Category() {
  return (
    <section className="category py-26">
      <Container>
        {/* class = header-content */}
        <div className="flex mb-16 flex-col gap-4 md:gap-12 md:flex-row md:items-end md:justify-between lg:gap-26">
          <div className="max-w-full md:max-w-1/2">
            {/* class = subheading */}
            <span className="text-[#dc2f02] leading-normal font-medium">
              Category
            </span>
            <h2>Shop By Category</h2>
          </div>
          <p className="max-w-full md:max-w-1/2 flex">
            Our pieces are made out of the most aesthetic looking wood. We
            produce the best furniture to meet our customers satisfaction.
          </p>
        </div>

        {/* class = section-content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex gap-8 flex-col">
            <Room>
              <span>Living room</span>
            </Room>
            <Room>
              <span>Dining room</span>
            </Room>
            <Room>
              <span>Kitchen</span>
            </Room>
            <Room>
              <span>Bedroom</span>
            </Room>
            <Room>
              <span>Office</span>
            </Room>
          </div>

          <div
            className={`relative h-100 rounded-lg overflow-hidden  md:h-auto md:rounded-2xl`}
          >
            <img
              src={defaultImg}
              alt="Image of sitting room"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

{
  /* 
            <div className="room">
              <div className="last">
                <span>Office</span>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="room-image room-five"></div>
            </div>
          </div>
          <div id="placeholder-img"></div>
          */
}
