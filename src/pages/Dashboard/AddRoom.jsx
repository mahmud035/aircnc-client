import { useContext, useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';
import { imageUpload } from '../../api/image-upload';
import useAuth from '../../hook/useAuth';

const AddRoom = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const location = e.target.location.value;
    const title = e.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = e.target.price.value;
    const total_guest = e.target.total_guest.value;
    const bedrooms = e.target.bedrooms.value;
    const bathrooms = e.target.bathrooms.value;
    const description = e.target.description.value;
    const category = e.target.category.value;

    const image = e.target.image.files[0];

    //* Upload image to imgbb server
    imageUpload(image)
      .then((imageData) => {
        const imageURL = imageData?.data?.display_url;

        // create roomData object
        const roomData = {
          // host info
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          image: imageURL,
          location,
          title,
          from,
          to,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          category,
        };

        console.log(roomData);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // change text: upload image to image name
  const handleImageChange = (image) => {
    // console.log(image);
    setUploadButtonText(image.name);
  };

  // select data range
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };

  return (
    <>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
      />
    </>
  );
};

export default AddRoom;
