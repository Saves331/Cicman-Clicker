import { useState } from "react";
import ProteinImg from "../images/Protein.webp"
import count from "../Count";

function Protein(props) {
  const {numberOfItem, price, name, onBuy} = props
 

  function handleClick() {
    onBuy();
  }

  return (
    <div>
      <button onClick={handleClick}>Buy {name} for {price}</button>
      <img src={ProteinImg} alt="" width={100} height={100}/>
      <h2>{numberOfItem}</h2>
    </div>
  )
}
export default Protein