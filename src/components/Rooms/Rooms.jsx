import { useEffect, useState } from 'react';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('rooms.json')
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return <div></div>;
};

export default Rooms;
