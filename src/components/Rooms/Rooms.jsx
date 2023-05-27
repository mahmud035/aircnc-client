import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../shared/Container';
import Loader from '../shared/Loader';
import Card from './Card';
import Heading from '../Heading/Heading';

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  console.log({ category });

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('rooms.json')
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filteredData = data.filter(
            (room) => room.category === category
          );
          setRooms(filteredData);
        } else {
          setRooms(data);
        }

        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        {rooms && rooms.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-5 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {rooms.map((room, index) => (
                <Card room={room} key={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="pt-12">
            <Heading
              title="No Rooms Available In This Category!"
              subtitle="Please Select Other Categories."
              center={true}
            />
          </div>
        )}
      </Container>
    </>
  );
};

export default Rooms;
