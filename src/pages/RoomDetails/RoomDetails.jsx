import Header from '../../components/Rooms/Header';
import RoomInfo from '../../components/Rooms/RoomInfo';
import RoomReservation from '../../components/Rooms/RoomReservation';
import Container from '../../components/shared/Container';

const RoomDetails = () => {
  return (
    <Container>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-6">
          <Header />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-7 md:gap-10">
            <RoomInfo />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <RoomReservation />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
