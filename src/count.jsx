import { useEffect, useState } from "react"
import ciciman from './images/cicmania.jpg'
import ProteinUpgrade from "./Upgrades/ProteinUpgrade"
import Items from "./Items"
import Employee from "./Items/Employee"

function Count() {

    const [count, setCount] = useState(10000)
    
    const [PROTEIN_RATE, setPROTEIN_RATE] = useState(0.2)
    const [EMPLOYEE_RATE, setEMPLOYEE_RATE] = useState(1)
    const [MACHINE_RATE, setMACHIEN_RATE] = useState(10)

    const [proteinUpgradePrice, setProteinUpgradePrice] = useState(50)
    const [isProteinUpgradeActive, setIsProteinUpgradeActive] = useState(false)
    
    const [items, setItems] = useState({
      protein: { count: 0, price: 10},
      employee: { count: 0, price: 100},
      machine: { count: 0, price: 1000}
    })

    const totalCPS = (items.protein.count*PROTEIN_RATE) + (items.employee.count*EMPLOYEE_RATE) + (items.machine.count*MACHINE_RATE)

    const displayCount = count.toFixed(1)
    const displayProteinPrice = items.protein.price.toFixed(1)
    const displayEmployeePrice = items.employee.price.toFixed(1)
    const displayMachinePrice = items.machine.price.toFixed(1)
    const displayCPS = totalCPS.toFixed(1)
    

    function handleClick() {
        setCount(prev => prev+1)
    }

    function addItem(itemName) {
     const item = items[itemName]
      if(count >= item.price) {
        setCount(prev => prev - item.price);
        setItems(prevItems => ({...prevItems,
          [itemName]: {
            count: prevItems[itemName].count + 1,
            price: prevItems[itemName].price *1.15
          }
        }))
      }
      
    }

     function handleProteinUpgrade() {
      if(count >= proteinUpgradePrice){
        setCount(prev => prev-proteinUpgradePrice)
        setPROTEIN_RATE(prev => prev*2)
        setProteinUpgradePrice(prev => prev*5)
        setIsProteinUpgradeActive(true)

      }

   }

    useEffect(() => {
      let passiveProtein = items.protein.count*PROTEIN_RATE
      let passiveEmployee = items.employee.count*EMPLOYEE_RATE
      let passiveMachine = items.machine.count*MACHINE_RATE

      const intervalID = setInterval(() => {
         setCount(prev => prev + passiveProtein + passiveEmployee + passiveMachine)
      }, 1000)
     
      return () => clearInterval(intervalID)
    }, [items, PROTEIN_RATE, EMPLOYEE_RATE, MACHINE_RATE])

  return (
    <div className="grid grid-cols-9 h-full">
      <div className="flex items-center justify-center flex-col bg-linear-to-br from-amber-400 to-orange-600 col-span-4">
        <h1 className="text-4xl text-white font-bold">CicCount: {displayCount}</h1>
        <h2 className="mb-6 text-white text-2xl font-medium">Cicman per sec: {displayCPS}</h2>
        <button onClick={handleClick} className="cursor-pointer"><img src={ciciman} alt="" /></button>
      </div>


      <div className="col-span-4">
       
        <Items
            displayEmployeePrice={displayEmployeePrice}
            displayProteinPrice={displayProteinPrice}
            displayMachinePrice={displayMachinePrice}
            items = {items}
            onBuy = {addItem}
          />
      </div>
      

      <div>
        <ProteinUpgrade
        price = {proteinUpgradePrice}
        onBuy = {handleProteinUpgrade}
        ></ProteinUpgrade>
      </div>
        

        
    </div>
  )
}
export default Count