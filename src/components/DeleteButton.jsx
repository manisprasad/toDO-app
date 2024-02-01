// DeleteButton.js
import React from "react";

const DeleteButton = ({editing, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={`rounded-full p-1 ${editing ? 'hidden': 'block'} bg-red-500`}>
      <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path>
      </svg>
    </button>
  );
};

export default DeleteButton;
