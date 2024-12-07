import { NextPage, NextPageContext } from "next";
const router = require("next/router");

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  if (statusCode === 401) {
    return <Unauthorized />;
  } else if (statusCode === 404) {
    return <NotFound />;
  } else if (statusCode === 500) {
    return <ServerError />;
  }
  return <NotFound />;
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const Unauthorized: NextPage = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">401</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Unauthroized!
        </p>

        <p className="mt-4 text-gray-500">
          You must be logged in to access the page
        </p>

        <button
          type="button"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          onClick={() => router.push("/login")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
const NotFound: NextPage = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Found!
        </p>

        <p className="mt-4 text-gray-500">
          Sorry, we couldn't find the page you are looking for.
        </p>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

const ServerError: NextPage = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">500</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Internal Server Error!
        </p>

        <p className="mt-4 text-gray-500">
          Oops, something went wrong. Please try again later.
        </p>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default Error;
