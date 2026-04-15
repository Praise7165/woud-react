interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  img: string;
}

export default function ProductCard({
  name,
  description,
  price,
  img,
}: ProductCardProps) {
  const ngnFormat = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

  return (
    <div className="product-card">
      <div>
        <img src={img} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{ngnFormat.format(price)}</span>
        <button className="sec-button product-button">Shop Now</button>
      </div>
    </div>
  );
}
