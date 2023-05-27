import Heading from '../Heading/Heading';

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali, Owl Bamboo House"
        subtitle="Sidemen, Indonesia"
        center={false}
      />
      <div className="w-full overflow-hidden rounded-xl md:h-[60vh]">
        <img
          className="w-full object-cover"
          src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg"
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
