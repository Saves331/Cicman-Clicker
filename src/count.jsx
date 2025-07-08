import { useEffect, useState } from "react"
import ciciman from './images/cicmania.jpg'
import Protein from "./Items/Protein"
import Employee from "./Items/Employee"
import ProteinUpgrade from "./Upgrades/ProteinUpgrade"
function Count() {

    const [count, setCount] = useState(10000)
    const [numberOfProteinItem, setNumberOfProteinItem] = useState(0)
    const [ProteinPrice, setProteinPrice] = useState(10)
    const [NumberOfEmployeeItem, setNumberOfEmployeeItem] = useState(0)
    const [EmployeePrice, setEmployeePrice] = useState(100)
    const [isProteinUpgradeActive, setIsProteinUpgradeActive] = useState(false)
    const [PROTEIN_RATE, setPROTEIN_RATE] = useState(0.2)
    const [EMPLOYEE_RATE, setEMPLOYEE_RATE] = useState(1)
    const [proteinUpgradePrice, setProteinUpgradePrice] = useState(50)

    const totalCPS = (numberOfProteinItem*PROTEIN_RATE) + (NumberOfEmployeeItem*EMPLOYEE_RATE)

    const displayCount = count.toFixed(1)
    const displayProteinPrice = ProteinPrice.toFixed(1)
    const displayEmployeePrice = EmployeePrice.toFixed(1)
    const displayCPS = totalCPS.toFixed(1)

    function handleClick() {
        setCount(prev => prev+1)
    }

    function addProtein() {
     
      if(count >= ProteinPrice) {
        setCount(prev => prev - ProteinPrice);
        setNumberOfProteinItem(prev => prev+1)
        setProteinPrice(prevPrice => prevPrice*1.15)
      }
      
    }

     function addEmployee() {
      if(count >= EmployeePrice) {
        setCount(prev => prev - EmployeePrice)
        setNumberOfEmployeeItem(prev => prev+1)
        setEmployeePrice(prevPrice => prevPrice*1.15)
      }
    }

     function handleProteinUpgrade() {
      if(count >= proteinUpgradePrice){
        setCount(prev => prev-proteinUpgradePrice)
        setPROTEIN_RATE(prev => prev*2)
        setProteinUpgradePrice(prev => prev*10)
        setIsProteinUpgradeActive(true)

      }

   }

   

    useEffect(() => {
      let passiveProtein = numberOfProteinItem*PROTEIN_RATE
      let passiveEmployee = NumberOfEmployeeItem*EMPLOYEE_RATE

      const intervalID = setInterval(() => {
         setCount(prev => prev + passiveProtein + passiveEmployee)
      }, 1000)
     
      return () => clearInterval(intervalID)
    }, [numberOfProteinItem, NumberOfEmployeeItem, PROTEIN_RATE, EMPLOYEE_RATE])


   
   

  return (
    <div className="grid grid-cols-9 h-full">
      <div className="flex items-center justify-center flex-col bg-linear-to-br from-amber-400 to-orange-600 col-span-4">
        <h1 className="text-4xl text-white font-bold">CicCount: {displayCount}</h1>
        <h2 className="mb-6 text-white text-2xl font-medium">Cicman per sec: {displayCPS}</h2>
        <button onClick={handleClick}><img src={ciciman} alt="" /></button>
      </div>


      <div className="col-span-4">
       
        <Protein 
        name = "Protein"
        price = {displayProteinPrice}
        numberOfItem = {numberOfProteinItem}
        onBuy = {addProtein}

        ></Protein>

         {(count >= 100 || NumberOfEmployeeItem >=1) && (<Employee
        name = "Employee"
        price = {displayEmployeePrice}
        numberOfItem = {NumberOfEmployeeItem}
        onBuy = {addEmployee}
        ></Employee>)}
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