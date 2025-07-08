import React from 'react'
import ProteinUpgradeImg from '../images/ProteinUpgrade.png'

function ProteinUpgrade(props) {

    const {price, onBuy} = props;


    function handleClick() {
        onBuy()
    }
  return (

    <div className='bg-amber-100 border-2'>
        <button onClick={handleClick} className='flex items-center cursor-pointer'>
            <img src={ProteinUpgradeImg} alt="" className='w-15'/>
            <h2 className='text-center'>Buy Upgrade 2x for Protein ({price}Cic)</h2>
        </button>
        
    </div>
  )
}

export default ProteinUpgrade