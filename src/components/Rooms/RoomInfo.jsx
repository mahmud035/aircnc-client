const RoomInfo = ({ roomData }) => {
  const { bathrooms, bedrooms, description, host, total_guest } = roomData;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-2 
            text-xl
            font-semibold
          "
        >
          <div>Hosted by {host.name}</div>

          <img className="h-8 w-8 rounded-full" alt="Avatar" src={host.image} />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>{total_guest} Guests</div>
          <div>{bedrooms} Bedrooms</div>
          <div> {bathrooms} Bathrooms</div>
        </div>
      </div>

      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
    </div>
  );
};

export default RoomInfo;
