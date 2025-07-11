import React, { useState } from 'react'

function CicClick(props) {
  const {ciciman, handleClick} = props;
    const [clicked, setClicked] = useState(false)

    const handleMouseDown = () => {
        setClicked(false);
    }

    const handleMouseUp = () => {
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 150) 
    }
  return (
    <button onMouseDown={handleMouseDown}
            onMouseUp = {handleMouseUp}
            onClick={handleClick}
            className={`
         text-white rounded-full
        transition-transform duration-300 ease-in-out active:scale-95
        ${clicked ? "scale-105" : ""}
      `}
            
            >
        <img src={ciciman} className="h-100 rounded-full"/>
    </button>

    
  )
}

export default CicClick