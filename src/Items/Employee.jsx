import EmployeeImg from "../images/Employee.png"
import React from 'react'

function Employee(props) {
  const { numberOfItem, price, name, onBuy } = props;

  function handleClick() {
    onBuy(); 
  }

  return (
    <div>
      <button onClick={handleClick}>Buy {name} ({price})
         <img src={EmployeeImg} alt={name} className="w-40 h-40"/>
      <h2>Owned: {numberOfItem}</h2>
      </button>
     
    </div>
  );
}

export default Employee