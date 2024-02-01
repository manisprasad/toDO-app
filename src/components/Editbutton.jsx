import React from "react";
import "../index.css";

const Editbutton = ({editing, onClick}) =>{
    return(
        <>
        <button onClick={onClick} type="button " className={`p-1 ${editing ? 'hidden' : 'block' } bg-green-300 rounded-full`}>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
        </>
    )
}

export default Editbutton;