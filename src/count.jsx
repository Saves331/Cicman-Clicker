import { useEffect, useState } from "react"
import ciciman from './images/cicmania.jpg'
import ProteinUpgrade from "./Upgrades/ProteinUpgrade"
import { getItemList, getUpgradeList } from "./Data"
import CicBtn from "./features/CicClick"


function Count() {

    const INTERVAL = 10

    const [count, setCount] = useState(1_000_000_000)
    
    
    const [items, setItems] = useState({
      protein: { count: 0, price: 10},
      employee: { count: 0, price: 100},
      machine: { count: 0, price: 1000},
      supplementStack: { count: 0, price: 12000},
      opel: { count: 0, price: 45000},
      predajna: { count: 0, price: 100000},
      sklad: {count: 0, price: 5000000},
      mercedes: { count: 0, price: 34000000},
      robot: { count: 0, price: 100000000}
    })

    const [upgrades, setUpragades] = useState({
      proteinUpgrade: { count: 0, price: 100, RATE: 0.002},
      employeeUpgrade: { count: 0, price: 1000, RATE: 0.01},
      machineUpgrade: { count: 0, price: 10000, RATE: 0.1},
      supplementStackUpgrade: {count: 0, price: 120000, RATE: 1.05},
      opelUpgrade: {count: 0, price: 450000, RATE: 84},
      predajnaUpgrade: { count:0, price: 1000000, RATE: 189.5},
      skladUpgrade: { count: 0, price: 50000000, RATE: 400},
      mercedesUpgrade: { count: 0, price: 100000000, RATE: 1600},
      robotUpgrade: { count:0, price: 200000000, RATE: 8200}
    })

    const totalCPS = () => {
      const totalCPS = Object.keys(items).reduce((total, itemName) => {
        const itemCount = items[itemName].count
        const upgradeName = itemName+"Upgrade"
        const rate = upgrades[upgradeName]?.RATE || 0 
        return total + itemCount*rate*100
      }, 0)

      return totalCPS.toFixed(1)
    }

    
    

    function handleClick() {
        setCount(prev => prev+1)
    }


    function formatNumber(num) {
    
       if(num >= 1_000_000) {
        return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(num/1000) + "milions ";
      } else {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(num);
      }
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
      }, INTERVAL)
     
      return () => clearInterval(intervalID)
    }, [items, upgrades])

  return (
    <div className="grid grid-cols-9 h-full">
      <div className="flex items-center justify-center flex-col bg-linear-to-br from-amber-400 to-orange-600 col-span-4">
        <h1 className="text-4xl text-white font-bold">CicCount: {formatNumber(count.toFixed(0))}Cic</h1>
        <h2 className="mb-6 text-white text-2xl font-medium">Cicman per sec: {formatNumber(totalCPS())}</h2>
        <CicBtn 
        ciciman = {ciciman}
        handleClick = {handleClick}></CicBtn>
      </div>


      <div className="col-span-4 grid grid-cols-3 grid-rows-3">
      {getItemList(items).map((item) => (
    <div key={item.id} className="p-4 bg-blue-600 border-4 m-0">
      <button onClick={() => addItem(item.key)} className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:bg-gray-100 transition w-full h-full">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="mb-2">Price: {formatNumber(item.price)}</p>
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
                <h2 className='text-center'>Buy Upgrade 2x for {upgrade.displayName} ({formatNumber(upgrade.price)}Cic)</h2>
             </button>
        </div>
       ))}
      </div>
        

        
    </div>
  )
}
export default Count
