import React from 'react';



export default function Button() {
    function handleButton() {
        alert("You Clicked me! That's Great... :)")
    }    
    
    return (
        <button 
            onClick={handleButton}
            className='ml-10 p-3 rounded-lg shadow-xl  bg-orange-500 hover:bg-orange-300 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-500 ... '
        >
            
            I do nothing!
        </button>
    );
}