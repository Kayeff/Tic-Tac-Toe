import { useState } from "react";
import {RiEdit2Line} from '@remixicon/react';

export default function Player({symbol, name , isActive, onNameChange}) {
    const [playerName, setPlayername] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(editing => !editing);

        if(isEditing){
            onNameChange(symbol, playerName);
        }
    }
    
    function handleNameChange(e){
        setPlayername(e.target.value);
    }
    
  return (
    <div className={`bg-basix-brown p-4 w-full relative cursor-default ${isActive ? 'shadow-border' : ''}`}>
        {
            isEditing ? 
            <input
                onChange={handleNameChange}
                className="outline-none bg-transparent font-Urbanist"
                value={playerName} /> : 
            <h1
                className="font-Urbanist text-xl font-medium">{playerName}</h1>
        }
        <div>
            <button
                onClick={handleClick}
                className="font-Urbanist text-sm tracking-wide hover:underline">
                {isEditing ? 'Save': <RiEdit2Line size={15} />}
            </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-default">
            <h1 className="font-Urbanist font-normal text-4xl">{symbol}</h1>
        </div>
    </div>
  )
}
