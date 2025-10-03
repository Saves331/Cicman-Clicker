import React, { useState } from 'react'

function CicClick(props) {
  const {ciciman, handleClick} = props;
  const [clicked, setClicked] = useState(false)
  const [plusOne, setPlusOne] = useState([])  

    const handlePlusOne = (e) => {
        const id = Date.now();

        const rect = e.currentTarget.getBoundingClientRect();


        const newPlus = {
          id,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }

      setPlusOne((prev) => [...prev, newPlus])

      setTimeout(() => {
        setPlusOne((prev) => prev.filter((p) => p.id !== id))
      }, 2000)
    }


  

    const handleMouseDown = () => {
        setClicked(false);
    }

    const handleMouseUp = () => {
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 150) 
    }

    const handleButtonClick = (e) => {
        handleClick()
        handlePlusOne(e)
    }
  return (

    <div className='relative inline-block'>
        {plusOne.map((p) => (
  <div
    key={p.id}
    className="absolute text-gray-600 font-bold animate-fade-up pointer-events-none z-11 text-2xl"
    style={{ left: `${p.x - 10}px`, top: `${p.y - 30}px` }} // move it slightly above cursor
  >
    +1
  </div>
))}

    <button onMouseDown={handleMouseDown}
            onMouseUp = {handleMouseUp}
            onClick={handleButtonClick}
            className={` cursor-pointer
         text-white rounded-full
        transition-transform duration-300 ease-in-out active:scale-95 z-10
        ${clicked ? "scale-105" : ""}
      `}
            
            >
        <img src={ciciman} className="h-100 rounded-full "/>
    </button>

     <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }
        .animate-fade-up {
          animation: fade-up 1.5s ease-out forwards;
        }
      `}</style>
    </div>

     

    
  )
}

export default CicClick