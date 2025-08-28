import { useEffect, useState } from "react"
import ciciman from './images/cicmania.jpg'
import ProteinUpgrade from "./Upgrades/ProteinUpgrade"
import { getItemList, getUpgradeList } from "./Data"
import CicBtn from "./features/CicClick"


function Count() {

    const INTERVAL = 10

    const [count, setCount] = useState(1_000)
    
    
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


    function formatNumber(num, isUpgrade = false, decimals = 0) {
       if(num >= 1_000_000) {
        if (isUpgrade && num >= 1_000_000) {
        return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(num/1000) + "m";
      }
      else {
         return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(num/1000) + "milions ";
      }

      }
      else {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(num);
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
    <div class="grid grid-cols-[minmax(380px,3fr)_minmax(300px,6fr)_minmax(75px,1fr)] lg:grid-cols-[minmax(380px,3fr)_minmax(300px,6fr)_minmax(250px,1fr)] h-screen max-w-auto mx-auto">

      {/* Left Column */}
      <div className="flex h-screen items-center justify-center flex-col bg-gradient-to-br from-amber-400 to-orange-600">
        <h1 className="text-4xl text-white font-bold">
          CicCount: {formatNumber(count, false, 0)}Cic
        </h1>
        <h2 className="mb-6 text-white text-2xl font-medium">
          Cicman per sec: {formatNumber(parseFloat(totalCPS()), false, 1)}
        </h2>
        <CicBtn ciciman={ciciman} handleClick={handleClick}></CicBtn>
      </div>

      {/* Middle Column */}
      <div className="overflow-y-auto h-screen grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 p-4">
        {getItemList(items).map((item) => (
          <div key={item.id} className="p-4 bg-blue-600 border-4 flex items-center justify-items-center">
            <button
              onClick={() => addItem(item.key)}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-md hover:bg-gray-100 transition w-full h-full"
            >
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="mb-2">Price: {formatNumber(item.price)}</p>
              <img
                src={item.img}
                alt={item.name}
                className="w-full max-w-[160px] aspect-square object-cover mb-2"
              />
              <p>Owned: {item.numberOfItem}</p>
            </button>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="h-screen space-y-1 overflow-y-auto flex-shrink-0">
        {getUpgradeList(upgrades).map((upgrade) => (
         <div key={upgrade.id} className="bg-amber-100 border-2 rounded">
  <button
    onClick={() => handleUpgrade(upgrade.key)}
    className="w-full cursor-pointer 
               flex lg:items-center 
               p-0"
  >
    {/* Image: full on small screens, small on lg+ */}
    <div className="w-full max-w-[160px] aspect-square object-cover lg:w-15 lg:h-15 flex-shrink-0">
      <img
        src={upgrade.img}
        alt={upgrade.name}
        className="w-full h-full object-cover rounded"
      />
    </div>

    {/* Text: hidden < lg */}
    <div className="flex-1 hidden lg:block">
      <h2 className="text-center text-base font-semibold">
        <span>2x for {upgrade.displayName}</span>
      </h2>
      <h2 className="text-center text-base font-semibold">
        <span>({formatNumber(upgrade.price, true)} Cic)</span>
      </h2>
    </div>
  </button>
</div>
        ))}
      </div>
    </div>


  )
}
export default Count
