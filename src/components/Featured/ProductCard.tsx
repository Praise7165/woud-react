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
    <div className="product-card bg-white p-4 rounded-lg flex-[00320px]">
      <div className="flex items-center justify-center bg-[#fbfbfb] h-80 mb-4 rounded-lg">
        <img src={img} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="block mt-3 mb-5 text-xl">
          {ngnFormat.format(price)}
        </span>
        <button className="sec-button bg-transparent border border-[#dc2f02] text-[#dc2f02] py-1.5 px-2 rounded-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}
