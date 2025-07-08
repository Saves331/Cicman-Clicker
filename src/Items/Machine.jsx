import React from 'react'
import MachineImg from "../images/Machine.jpg"


function Machine(props) {
  const { numberOfItem, price, name, onBuy } = props;

  function handleClick() {
    onBuy(); 
  }

  return (
    <div>
      <button onClick={handleClick}>Buy {name} ({price})
        <img src={MachineImg} alt={name} className='w-40 h-40'/>
      <h2>Owned: {numberOfItem}</h2>
      </button>
      
    </div>
  );
}

export default Machine