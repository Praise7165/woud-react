import products from "../../data/product";
import Container from "../Container";
import HeadingTag from "../HeadingTag";
import ProductCard from "./ProductCard";

export default function Featured() {
  return (
    <section className="py-26 bg-[#fbfbfb]">
      <Container>
        <div className="mb-10 md:mb-16">
          <div>
            <HeadingTag>Products</HeadingTag>
            <h2>Our Featured Products</h2>
          </div>
        </div>

        {/*className = 'product-wrapper' */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-4 gap-y-9 lg:gap-y-12 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:gap-x-6">
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
