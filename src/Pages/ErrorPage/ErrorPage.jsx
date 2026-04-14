import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-[#244D3F]">404</h1>

        <h2 className="mt-4 text-2xl font-semibold ">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          Looks like the friendship link is broken.The page you're looking for doesn't exist or has been moved
        </p>

        <div className="mt-6 flex items-center justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-[#244D3F] text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <TiHomeOutline />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;