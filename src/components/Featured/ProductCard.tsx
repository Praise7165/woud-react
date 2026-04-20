import Button from "../Button";

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
  // format currency to naira properly
  const ngnFormat = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

  return (
    <div className="product-card bg-white p-4 rounded-lg flex-[00320px] border border-[hsl(0,0%,92%)]">
      <div className="flex items-center justify-center bg-[#fbfbfb] h-80 mb-4 -mx-4 -mt-4 rounded-lg">
        <img src={img} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="block mt-3 mb-5 text-xl">
          {ngnFormat.format(price)}
        </span>
        <Button size="small" type="sec">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
