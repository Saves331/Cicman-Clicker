import { useState } from "react"
import ciciman from './images/cicmania.jpg'
function count() {

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count+1)
    }

  return (
    <div>
        <h1>CicCount: {count}</h1>
        <button onClick={handleClick}><img src={ciciman} alt="" /></button>

       
    </div>
  )
}
export default count