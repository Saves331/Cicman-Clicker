import EmployeeImg from "../images/Employee.png"


function Employee(props) {
    const {numberOfItem, price, name, onBuy} = props

    function handleClick() {
        onBuy()
    }
  return (
    <div>
        <button onClick={handleClick}>Buy {name} for {price}</button>
        <img src={EmployeeImg} className="w-30 h-30"/>
        <h2>{numberOfItem}</h2>
    </div>
  )
}

export default Employee