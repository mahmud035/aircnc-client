import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { saveUser } from '../../api/auth';

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

    // console.log({ name, email, password, image });

    //* Upload Image to imgbb Server
    const formData = new FormData();
    formData.append('image', image);

    const url = import.meta.env.VITE_URL;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData.data);
        // get Image/Photo URL from imgbb Server
        const photo = imageData.data.display_url;
        // console.log(photo);

        //* create user
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
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
                console.log(error.message);
                toast.error(error.message);
                setLoading(false);
              });
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        //* stop spinner if user logged-in successfully
        setLoading(false);

        //* Save user to database
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        //* stop spinner if error happens
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex max-w-md flex-col rounded-md bg-gray-100 p-6 text-gray-900 sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to AirCNC</p>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-rose-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="mb-2 block text-sm">
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
              <label htmlFor="email" className="mb-2 block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-rose-500"
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
                className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-rose-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-rose-500 py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner size={24} className="mx-auto animate-spin" />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center space-x-1 pt-4">
          <div className="h-px flex-1 dark:bg-gray-700 sm:w-16"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            SignUp with social accounts
          </p>
          <div className="h-px flex-1 dark:bg-gray-700 sm:w-16"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="border-rounded m-3 flex cursor-pointer items-center justify-center space-x-2 border border-gray-300 p-2"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-center text-sm text-gray-400">
          Already have an account?{' '}
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
