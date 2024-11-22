import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { saveUser } from '../../api/auth';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
  const {
    loading,
    setLoading,
    createUser,
    signInWithGoogle,
    updateUserProfile,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const image = e.target.elements.image.files[0];

    //* Upload Image to imgbb Server
    const formData = new FormData();
    formData.append('image', image);

    const url = import.meta.env.VITE_IMAGE_BB_URL;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // get Image/Photo URL from imgbb Server
        const photo = imageData.data.display_url;

        //* create user
        createUser(email, password)
          .then((result) => {
            toast.success('Account created successfully');
            setLoading(false);

            //* update user profile
            updateUserProfile(name, photo)
              .then(() => {
                toast.success('Signup Successful');

                //* Save user to database
                saveUser(result.user);
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error(error.message);
                setLoading(false);
              });
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        //* stop spinner if user logged-in successfully
        setLoading(false);

        //* Save user to database
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        //* stop spinner if error happens
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 text-gray-900 bg-gray-100 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to AirCNC</p>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="mb-2 text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 text-white rounded-md bg-rose-500"
            >
              {loading ? (
                <TbFidgetSpinner size={24} className="mx-auto animate-spin" />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px dark:bg-gray-700 sm:w-16"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            SignUp with social accounts
          </p>
          <div className="flex-1 h-px dark:bg-gray-700 sm:w-16"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center p-2 m-3 space-x-2 border border-gray-300 cursor-pointer border-rounded"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="text-gray-600 hover:text-rose-500 hover:underline"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
