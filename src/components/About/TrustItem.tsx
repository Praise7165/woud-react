interface TrustItemProps {
  no: number;
  desc: string;
}

export default function TrustItem({ no, desc }: TrustItemProps) {
  return (
    <div className="flex flex-col justify-between leading-none">
      <h3 className="text-[2rem] md:text-[2.5rem]">{no}+</h3>
      <p>{desc}</p>
    </div>
  );
}
