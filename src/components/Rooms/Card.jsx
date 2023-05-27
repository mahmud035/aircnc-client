import HeartButton from '../Buttons/HeartButton';

const Card = ({ room }) => {
  const { location, image, dateRange, price, category } = room;

  return (
    <div className="group col-span-1 cursor-pointer">
      <div className="flex w-full flex-col gap-2">
        <div
          className="
            relative 
            aspect-square 
            w-full 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              h-full 
              w-full 
              object-cover 
              transition 
              group-hover:scale-110
            "
            src={image}
            alt="Room"
          />
          <div
            className="
            absolute
            right-3
            top-3
          "
          >
            <HeartButton />
          </div>
        </div>
        <div className="text-lg font-semibold">{location}</div>
        <div className="font-light text-neutral-500">{dateRange}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          <div className="font-light">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
