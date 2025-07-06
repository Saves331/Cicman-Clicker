import ProteinImg from "../images/Protein.webp"


function Protein(props) {
  const {numberOfItem, price, name, onBuy} = props
 

  function handleClick() {
    onBuy();
  }

  

  return (
    <div>
      <button onClick={handleClick}>Buy {name} for {price}</button>
      <img src={ProteinImg} className="w-30 h-30"/>
      <h2>{numberOfItem}</h2>
    </div>
  )
}
export default Protein