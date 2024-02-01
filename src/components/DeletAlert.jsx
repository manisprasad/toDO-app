// DeleteAlert.js
import React, { useState } from "react";
import "../index.css";

const DeleteAlert = ({ isVisible }) => {
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    setIsDelete(true);
    // Add your logic for actual delete operation here
  };

  const handleCancel = () => {
    setIsDelete(false);
    // Add your logic for cancel operation here
  };

  return (
    <>
      {isVisible ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-gray-800 bg-opacity-50 fixed top-0 left-0 w-full h-full"></div>
          <div className="Alert-container bg-white p-4 rounded-md shadow-md">
            {/* Your alert content goes here */}
            <p className="text-xl font-bold mb-4">Are you sure?</p>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">
              Delete
            </button>
            <button onClick={handleCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeleteAlert;
