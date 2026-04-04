export default function Category() {
  return (
    <section className="category">
      <div className="container">
        <div className="header-content">
          <div>
            <span className="subheading">Category</span>
            <h2>Shop By Category</h2>
          </div>
          <p>
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
      </div>
    </section>
  );
}
