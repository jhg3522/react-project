import React from 'react';

function MainButton({name}){
    return(
        <button className="text-blue-500 p-3 rounded outline-none appearance-none font-medium focus:text-blue-500 hover:bg-gray-200 hover:text-blue-200">
            {name}
        </button>
    );
}

export default MainButton;