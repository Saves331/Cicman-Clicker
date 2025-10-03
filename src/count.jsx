import {  useEffect, useState } from "react"
import ciciman from './images/cicmania.jpg'
import ProteinUpgrade from "./Upgrades/ProteinUpgrade"
import { getItemList, getUpgradeList } from "./Data"
import CicBtn from "./features/CicClick"


function Count() {

    const INTERVAL = 10

    
   const defaultGame = {
  count: 1_000,
  items: {
    protein: { count: 0, price: 10 },
    employee: { count: 0, price: 100 },
    machine: { count: 0, price: 1000 },
    supplementStack: { count: 0, price: 12000 },
    opel: { count: 0, price: 45000 },
    predajna: { count: 0, price: 100000 },
    sklad: { count: 0, price: 5000000 },
    mercedes: { count: 0, price: 34000000 },
    robot: { count: 0, price: 100000000 },
  },
  upgrades: {
    proteinUpgrade: { count: 0, price: 100, RATE: 0.002 },
    employeeUpgrade: { count: 0, price: 1000, RATE: 0.01 },
    machineUpgrade: { count: 0, price: 10000, RATE: 0.1 },
    supplementStackUpgrade: { count: 0, price: 120000, RATE: 1.1 },
    opelUpgrade: { count: 0, price: 450000, RATE: 8.4 },
    predajnaUpgrade: { count: 0, price: 1000000, RATE: 18.95 },
    skladUpgrade: { count: 0, price: 50000000, RATE: 40 },
    mercedesUpgrade: { count: 0, price: 100000000, RATE: 160 },
    robotUpgrade: { count: 0, price: 200000000, RATE: 820 },
  },
};




    const [game, setGame] = useState(() => {
      const savedGame = localStorage.getItem("cic-save") //GetItem
      return savedGame ? JSON.parse(savedGame) : defaultGame
    
    })


     useEffect(() =>{
      
      localStorage.setItem("cic-save", JSON.stringify(game))
    }, [game])



    useEffect(() => {
      const intervalID = setInterval(() => {
        const totalPassive = Object.keys(game.items).reduce((total, itemName) => {
          const itemCount = game.items[itemName].count
          const upgradeName = itemName + "Upgrade"
          const rate = game.upgrades[upgradeName]?.RATE || 0;
          return total + itemCount * rate
        }, 0)
        setGame(prev => ({...prev, count: prev.count + totalPassive}))
        
      }, INTERVAL)
     
      return () => clearInterval(intervalID)
    }, [game.items, game.upgrades])


    const totalCPS = () => {
      const totalCPS = Object.keys(game.items).reduce((total, itemName) => {
        const itemCount = game.items[itemName].count
        const upgradeName = itemName+"Upgrade"
        const rate = game.upgrades[upgradeName]?.RATE || 0 
        return total + itemCount*rate*100
      }, 0)

      return totalCPS.toFixed(1)
    }

    
    

    function handleClick() {
        setGame(prev =>({...prev, count: prev.count+1}))
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
     const item = game.items[itemName]
      if(game.count >= item.price) {
        setGame(prev => ({...prev, count: prev.count - item.price,
                items: {
                  ...prev.items, 
                [itemName]: {
                  count: prev.items[itemName].count +1,
                  price: prev.items[itemName].price * 1.15
                }
                }
        }));
       
      }
      
    }

     function handleUpgrade(upgradeName) {
      const upgrade = game.upgrades[upgradeName]
      if(game.count >= upgrade.price){
        setGame(prev => ({...prev, count: prev.count - upgrade.price,
          upgrades: {
            ...prev.upgrades,
            [upgradeName]: {
              count: prev.upgrades[upgradeName].count +1,
              price: prev.upgrades[upgradeName].price * 5,
              RATE: prev.upgrades[upgradeName].RATE *2
            } 
          }
        }))
        
      }

   }


   function resetGame() {
    if (window.confirm("Are you sure you want to reset the game?")) {
      setGame(defaultGame);
      localStorage.setItem("cic-save", JSON.stringify(defaultGame));
    }
   }
                           

return (
    <div class="grid grid-cols-[minmax(380px,3fr)_minmax(300px,6fr)_minmax(75px,1fr)] lg:grid-cols-[minmax(380px,3fr)_minmax(300px,6fr)_minmax(250px,1fr)] h-screen max-w-auto mx-auto">

      {/* Left Column */}
      <div className="flex h-screen items-center justify-center flex-col bg-gradient-to-br from-amber-400 to-orange-600 text-center">
        <h1 className="text-4xl text-white font-bold">
          CicCount: {formatNumber(game.count, false, 0)}Cic
        </h1>
        <h2 className="mb-6 text-white text-2xl font-medium">
          Cicman per sec: {formatNumber(parseFloat(totalCPS()), false, 1)}
        </h2>
        <CicBtn ciciman={ciciman} handleClick={handleClick}></CicBtn>
      </div>

      {/* Middle Column */}
      <div className="overflow-y-auto h-screen grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 p-4 bg-gray-800">
        {getItemList(game.items).map((item) => (
          <div key={item.id} className="p-4 bg-[#1993c4] border-4 flex items-center justify-items-center">
            <button
              onClick={() => addItem(item.key)}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-md hover:bg-gray-100 transition w-full h-full cursor-pointer"
            >
              <h2 className="text-4xl p-4 font-bold">{item.name}</h2>
              
              <img
                src={item.img}
                alt={item.name}
                className="w-full max-w-[160px] aspect-square object-cover mb-2 rounded-full border-2 border-amber-200"
              />
              <div className="flex gap-5 p-3">
               <p className="mb-2">Price: {formatNumber(item.price)}</p>
               <p>Owned: {item.numberOfItem}</p>
              </div>
              
            </button>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="h-screen space-y-1 overflow-y-auto flex-shrink-0">
        {getUpgradeList(game.upgrades).map((upgrade) => (
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


        <button onClick={resetGame} className="absolute top-10 left-10 bg-gray-600 rounded text-white p-5 font-bold text-2xl cursor-pointer">Reset game</button>

    </div>


  )
}
export default Count
