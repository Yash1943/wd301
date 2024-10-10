import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <button
        id="backToHomeButton"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
