import Button from '../Buttons/Button';
import DatePicker from './DatePicker';

const RoomReservation = ({ roomData }) => {
  const { price } = roomData;

  return (
    <div className="overflow-hidden rounded-xl border-[1px] border-neutral-200 bg-white">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <DatePicker />
      </div>
      <hr />
      <div className="p-4">
        <Button label="Reserve" />
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between p-4 text-lg font-semibold">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
