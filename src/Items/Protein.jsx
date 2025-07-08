import ProteinImg from "../images/Protein.webp"


function Protein(props) {
  const {numberOfItem, price, name, onBuy} = props
 

  function handleClick() {
    onBuy();
  }

  

  return (
    <div
    className="">
      <button className="cursor-pointer" onClick={handleClick}>Buy {name} for {price} <img src={ProteinImg} className="w-30 h-30"/>
      <h2>{numberOfItem}</h2></button>
    </div>
  )
}
export default Protein