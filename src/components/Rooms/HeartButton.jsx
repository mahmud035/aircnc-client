import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const HeartButton = () => {
  return (
    <div
      className="
        relative
        cursor-pointer
        transition
        hover:opacity-80
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          absolute
          -right-[2px]
          -top-[2px]
          fill-white
        "
      />
      <AiFillHeart
        size={24}
        className="fill-neutral-500/70 hover:fill-rose-500"
      />
    </div>
  );
};

export default HeartButton;
