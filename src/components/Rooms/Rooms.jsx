import { useEffect, useState } from 'react';
import Container from '../shared/Container';
import Card from './Card';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('rooms.json')
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 gap-5 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {rooms.map((room, index) => (
            <Card room={room} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Rooms;
