import { useEffect, useState } from "react"
import ciciman from './images/cicmania.jpg'
import ProteinUpgrade from "./Upgrades/ProteinUpgrade"
import { getItemList, getUpgradeList } from "./Data"

function Count() {

    const [count, setCount] = useState(1000000)
    
    const [items, setItems] = useState({
      protein: { count: 0, price: 10},
      employee: { count: 0, price: 100},
      machine: { count: 0, price: 1000}
    })

    const [upgrades, setUpragades] = useState({
      proteinUpgrade: { count: 0, price: 100, RATE: 0.2},
      employeeUpgrade: { count: 0, price: 1000, RATE: 1},
      machineUpgrade: { count: 0, price: 10000, RATE: 10}
    })

    const totalCPS = (items.protein.count*upgrades.proteinUpgrade.RATE) + (items.employee.count*upgrades.employeeUpgrade.RATE) + (items.machine.count*upgrades.machineUpgrade.RATE)
    const displayCount = count.toFixed(1)
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

     function handleUpgrade(upgradeName) {
      const upgrade = upgrades[upgradeName]
      if(count >= upgrade.price){
        setCount(prev => prev-upgrade.price)
        setUpragades(prevUpgrades => ({...prevUpgrades, 
          [upgradeName]: {
            count: prevUpgrades[upgradeName].count + 1,
            price: prevUpgrades[upgradeName].price * 5,
            RATE: prevUpgrades[upgradeName].RATE * 2
          }
        }))

      }

   }

    useEffect(() => {
      

      const intervalID = setInterval(() => {
        const totalPassive = Object.keys(items).reduce((total, itemName) => {
          const itemCount = items[itemName].count
          const upgradeName = itemName + "Upgrade"
          const rate = upgrades[upgradeName]?.RATE || 0;
          return total + itemCount * rate
        }, 0)
         setCount(prev => prev + totalPassive)
      }, 1000)
     
      return () => clearInterval(intervalID)
    }, [items, upgrades])

  return (
    <div className="grid grid-cols-9 h-full">
      <div className="flex items-center justify-center flex-col bg-linear-to-br from-amber-400 to-orange-600 col-span-4">
        <h1 className="text-4xl text-white font-bold">CicCount: {displayCount}</h1>
        <h2 className="mb-6 text-white text-2xl font-medium">Cicman per sec: {displayCPS}</h2>
        <button onClick={handleClick} className="cursor-pointer"><img src={ciciman} alt="" /></button>
      </div>


      <div className="col-span-4">
      {getItemList(items).map((item) => (
    <div key={item.id} className="p-4">
      <button onClick={() => addItem(item.key)} className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:bg-gray-100 transition">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="mb-2">Price: {item.price}</p>
        <img src={item.img} alt={item.name} className="w-40 h-40 object-cover mb-2" />
        <p>Owned: {item.numberOfItem}</p>
      </button>
    </div>
  ))}
</div>
      

      <div>
       {getUpgradeList(upgrades).map((upgrade) => (
        <div key={upgrade.id} className='bg-amber-100 border-2'>
             <button onClick={() => handleUpgrade(upgrade.key)} className='flex items-center cursor-pointer'>
                <img src={upgrade.img} alt={upgrade.name} className='w-15'/>
                <h2 className='text-center'>Buy Upgrade 2x for {upgrade.displayName} ({upgrade.price}Cic)</h2>
             </button>
        </div>
       ))}
      </div>
        

        
    </div>
  )
}
export default Count
