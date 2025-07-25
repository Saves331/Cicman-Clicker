import ProteinImg from "../images/Protein.webp"
import React from 'react'

function Protein(props) {
  const { numberOfItem, price, name, onBuy } = props;

  function handleClick() {
    onBuy(); 
  }

  return (
    <div>
      <button onClick={handleClick}>Buy {name} ({price})
        <img src={ProteinImg} alt={name} className="w-40 h-40"/>
      <h2>Owned: {numberOfItem}</h2>
      </button>
      
    </div>
  );
}

export default Protein