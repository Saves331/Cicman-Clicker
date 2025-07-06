import { useEffect, useState } from "react"
import ciciman from './images/cicmania.jpg'
import Protein from "./Items/Protein"
function Count() {

    const [count, setCount] = useState(0)
    const [numberOfItem, setNumberOfItem] = useState(0)
    const [ProteinPrice, setProteinPrice] = useState(10)

    const displayCount = count.toFixed(1)
    const displayProteinPrice = ProteinPrice.toFixed(1)

    function handleClick() {
        setCount(prev => prev+1)
    }

    function addProtein() {
     
      if(count >= ProteinPrice) {
        setCount(prev => prev - ProteinPrice);
        setNumberOfItem(prev => prev+1)
        setProteinPrice(prevPrice => prevPrice*1.2)
      }
      
    }

    useEffect(() => {
      let passiveProtein = numberOfItem * 0.1

      const intervalID = setInterval(() => {
         setCount(prev => prev + passiveProtein)
      }, 1000)
     
      return () => clearInterval(intervalID)
    }, [numberOfItem])

    

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex items-center justify-center flex-col bg-linear-to-br from-amber-400 to-orange-600">
        <h1 className="text-4xl text-white mb-6 font-bold">CicCount: {displayCount}</h1>
        <button onClick={handleClick}><img src={ciciman} alt="" /></button>
      </div>


      <div>
        <Protein class
        name = "Protein"
        price = {displayProteinPrice}
        numberOfItem = {numberOfItem}
        onBuy = {addProtein}

        ></Protein>
      </div>
      
        

        
    </div>
  )
}
export default Count