import React from 'react';

function MainButton({name}){
    return(
        <button className="text-blue-500 ease-in-out transition-colors p-3 duration-150 rounded outline-none appearance-none font-semibold focus:text-blue-700 hover:bg-gray-200 hover:text-blue-200">
            {name}
        </button>
    );
}

export default MainButton;