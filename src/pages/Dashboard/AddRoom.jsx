import { useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const location = e.target.location.value;
    const title = e.target.title.value;
    // const from = dates.startDate;
    // const to = dates.endDate;
    const price = e.target.price.value;
    const total_guest = e.target.total_guest.value;
    const bedrooms = e.target.bedrooms.value;
    const bathrooms = e.target.bathrooms.value;
    const description = e.target.description.value;
    const category = e.target.category.value;

    const image = e.target.image.files[0];
  };

  // change text: upload image to image name
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);

    console.log(image);
  };

  return (
    <>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
      />
    </>
  );
};

export default AddRoom;
