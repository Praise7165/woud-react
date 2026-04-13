import Container from "./Container";

export default function Featured() {
  return (
    <section className="border py-26 bg-[#fbfbfb]">
      <Container>
        <div className="flex mb-16 flex-col gap-4 justify-between md:gap-12 md:flex-row md:items-end lg:gap-26">
          <div>
            <span className="text-[#dc2f02] leading-normal font-medium">
              Products
            </span>
            <h2>Our Featured Products</h2>
          </div>
          <div className="flex gap-6"></div>
        </div>

        <div className="product-wrapper grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-4 gap-y-12 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:gap-x-6">
          <div className="product-card">
            <div>
              <img src="./assets/product1.png" />
            </div>
            <div>
              <h3>Grey Low Armchair</h3>
              <p>Grey swivel chair made out of plywood</p>
              <span>#20,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product2.png" />
            </div>
            <div>
              <h3>Counter Stool</h3>
              <p>Grey swivel chair made out of plywood</p>
              <span>#10,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product3.png" />
            </div>
            <div>
              <h3>Cane Armchair</h3>
              <p>Grey swivel chair made out of plywood</p>
              <span>#8,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product4.png" />
            </div>
            <div>
              <h3>Velvet Armchair</h3>
              <p>Grey arm chair made out of velvet</p>
              <span>#25,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product5.png" />
            </div>
            <div>
              <h3>Wooden Lounge Chair</h3>
              <p>Grey swivel chair made out of plywood</p>
              <span>#20,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product6.png" />
            </div>
            <div>
              <h3>Bar Stool</h3>
              <p>Grey swivel chair made out of plywood</p>
              <span>#10,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product7.png" />
            </div>
            <div>
              <h3>Wooden Chair</h3>
              <p>Brown colored rattan chair</p>
              <span>#12,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product8.png" />
            </div>
            <div>
              <h3>Lounge Armchair</h3>
              <p>Armchair made out of sturdy wood</p>
              <span>#20,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <div>
              <img src="./assets/product9.png" />
            </div>
            <div>
              <h3>Office Chair</h3>
              <p>Swivel chair made out of plywood</p>
              <span>#30,000</span>
              <button className="sec-button product-button">Shop Now</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
