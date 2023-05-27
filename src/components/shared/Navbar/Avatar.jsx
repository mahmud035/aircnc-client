import { useContext } from 'react';
import avatar from '../../../assets/images/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <img
        src={user && user?.photoURL ? user.photoURL : avatar}
        className="h-8 w-8 rounded-full"
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
