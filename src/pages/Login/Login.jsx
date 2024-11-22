import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { saveUser } from '../../api/auth';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success('Logged-in successfully');
        setLoading(false);
        navigate(from, { replace: true });
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

  const handleResetPassword = (email) => {
    if (email.length === 0) {
      toast.error('Please provide your email address');
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success('Please check your email to reset password');
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 text-gray-900 bg-gray-100 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
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
        <div className="space-y-1">
          <button
            onClick={() => handleResetPassword(email)}
            className="text-xs text-gray-400 hover:text-rose-500 hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px dark:bg-gray-700 sm:w-16"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
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
          Don't have an account yet?{' '}
          <Link
            to="/signup"
            className="text-gray-600 hover:text-rose-500 hover:underline"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
