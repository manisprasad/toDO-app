import React from "react";
import "../index.css";

const MarkComplete = ({showOrNot, onClick}) =>{
    return(
        <>
        <div className="container">
    {
        showOrNot && <svg onClick={onClick} width="49px" height="49px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title></title><path class="cls-1" d="M28.75,55.5a23.5,23.5,0,1,1,14-42.38,2,2,0,0,1-2.38,3.21A19.51,19.51,0,1,0,48.25,32,19.65,19.65,0,0,0,48,28.93a2,2,0,1,1,4-.62A23.85,23.85,0,0,1,52.25,32,23.52,23.52,0,0,1,28.75,55.5Z"></path><path class="cls-2" d="M31.25,39.5a2,2,0,0,1-1.41-.59l-9.5-9.5a2,2,0,0,1,2.82-2.82l8.09,8.08L55.34,10.59a2,2,0,0,1,2.82,2.82l-25.5,25.5A2,2,0,0,1,31.25,39.5Z"></path></g></svg>
    }
        </div>
        </>
    )
}

export default MarkComplete;