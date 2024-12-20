import { toast } from 'react-hot-toast';

// save a user to database
export const saveUser = async (user) => {
  const currentUser = {
    email: user?.email,
  };

  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        console.log(data);
      }
    });
};

// become a host
export const becomeHost = async (email) => {
  const currentUser = {
    role: 'host',
  };

  fetch(`http://localhost:5000/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        toast.success('You are a host now! Post rooms.');
        console.log(data);
      }
    });
};
