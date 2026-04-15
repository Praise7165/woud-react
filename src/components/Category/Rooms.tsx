import rooms from "../../../data/room";
import Room from "./Room";

interface RoomsProps {
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

export default function Rooms({ onMouseEnter, onMouseLeave }: RoomsProps) {
  return (
    <ul className="flex gap-8 flex-col">
      {rooms.map((room) => (
        <Room
          key={room.id}
          onMouseEnter={() => onMouseEnter(room.id)}
          onMouseLeave={onMouseLeave}
        >
          <span>{room.name}</span>
        </Room>
      ))}
    </ul>
  );
}
