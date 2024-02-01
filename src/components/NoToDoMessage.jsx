// NoToDoExistMessage.js
import React from "react";
import "../index.css";

const NoToDoExistMessage = ({onClick, isButton, message}) => {
  return (
    <div className="flex items-center mt-10 ">
      <div className="text-center">
        <p className="text-xl font-bold text-gray-700 mb-4">
            {message}
        {/* Effective time management is crucial for productivity. A to-do list helps in allocating time to specific tasks, preventing procrastination, and ensuring that important tasks are prioritized. */}
        </p>
      {
        isButton &&   <button
        
        onClick={onClick}
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    > 
      Try making First ToDo!
    </button>
      }
      </div>
    </div>
  );
};

export default NoToDoExistMessage;
