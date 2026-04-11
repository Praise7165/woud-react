import { useState } from "react";
import rooms from "../../data/room";
import Container from "../Container";
import Rooms from "./Rooms";
import defaultImg from "../../assets/images/default-img.jpg";

export default function Category() {
  const [onHover, setOnHover] = useState<number | null>(null);

  function handleImgChange(id: number) {
    setOnHover(id);
  }

  function handleMouseLeave() {
    setOnHover(null);
  }

  const currentImg =
    rooms.find((room) => room.id == onHover)?.image ?? defaultImg;

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
          <Rooms
            onMouseEnter={handleImgChange}
            onMouseLeave={handleMouseLeave}
          />

          <div
            className={`relative h-100 rounded-lg overflow-hidden  md:h-auto md:rounded-2xl`}
          >
            <img
              src={currentImg}
              alt="Image of sitting room"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
