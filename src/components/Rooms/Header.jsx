import Heading from '../Heading/Heading';

const Header = ({ roomData }) => {
  const { image, location, title } = roomData;

  return (
    <>
      <Heading title={title} subtitle={location} center={false} />
      <div className="w-full overflow-hidden rounded-xl md:h-[60vh]">
        <img className="w-full object-cover" src={image} alt="header image" />
      </div>
    </>
  );
};

export default Header;
