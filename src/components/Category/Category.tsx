import Container from "../Container";

export default function Category() {
  return (
    <section className="category py-26">
      <Container>
        <div className="header-content flex mb-16 flex-col gap-4 md:gap-12 md:flex-row md:items-end md:justify-between lg:gap-26">
          <div className="max-w-[50%]">
            {/* class = subheading */}
            <span className="text-[#dc2f02] leading-normal font-medium">
              Category
            </span>
            <h2>Shop By Category</h2>
          </div>
          <p className="max-w-[50%]">
            Our pieces are made out of the most aesthetic looking wood. We
            produce the best furniture to meet our customers satisfaction.
          </p>
        </div>
        <div className="section-content">
          <div>
            <div className="room">
              <div>
                <span>Living room</span>
                <img src="./assets/arrow.svg" alt="arrow" />
              </div>
              <div className="room-image room-one"></div>
            </div>
            <div className="room">
              <div>
                <span>Dining room</span>
                <img src="./assets/arrow.svg" alt="arrow" />
              </div>
              <div className="room-image room-two"></div>
            </div>
            <div className="room">
              <div>
                <span>Kitchen</span>
                <img src="./assets/arrow.svg" alt="arrow" />
              </div>
              <div className="room-image room-three"></div>
            </div>
            <div className="room">
              <div>
                <span>Bedroom</span>
                <img src="./assets/arrow.svg" alt="arrow" />
              </div>
              <div className="room-image room-four"></div>
            </div>
            <div className="room">
              <div className="last">
                <span>Office</span>
                <img src="./assets/arrow.svg" alt="arrow" />
              </div>
              <div className="room-image room-five"></div>
            </div>
          </div>

          <div id="placeholder-img"></div>
        </div>
      </Container>
    </section>
  );
}
