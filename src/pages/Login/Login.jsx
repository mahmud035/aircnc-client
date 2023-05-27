import { Link } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex max-w-md flex-col rounded-md bg-gray-100 p-6 text-gray-900 sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          noValidate=""
          action=""
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div className="space-y-4">
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
              Continue
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs text-gray-400 hover:text-rose-500 hover:underline">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center space-x-1 pt-4">
          <div className="h-px flex-1 dark:bg-gray-700 sm:w-16"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="h-px flex-1 dark:bg-gray-700 sm:w-16"></div>
        </div>
        <div className="border-rounded m-3 flex cursor-pointer items-center justify-center space-x-2 border border-gray-300 p-2">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-center text-sm text-gray-400">
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