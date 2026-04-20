import products from "../../data/product";
import Container from "../Container";
import ProductCard from "./ProductCard";

export default function Featured() {
  return (
    <section className="py-26 bg-[#fbfbfb]">
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

        {/*className = 'product-wrapper' */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-4 gap-y-12 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:gap-x-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              description={product.description}
              price={product.price}
              img={product.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
