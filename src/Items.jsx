import React, { Component } from 'react'
import Employee from './Items/Employee'
import Protein from './Items/Protein'
import Machine from './Items/Machine'
function Items(props) {

   const {
        items,
        onBuy
        } = props;

    const itemList = [
        {
            id: 1,
            key: "protein",
            name: "Protein",
            price: items.protein.price.toFixed(1),
            numberOfItem: items.protein.count,
            Component: Protein
        
        },
          
        {
            id: 2,
            key: "employee",
            name: "Employee",
            price: items.employee.price.toFixed(1),
            numberOfItem: items.employee.count,
            Component: Employee,
            
        },

        {
            id: 3,
            key: "machine",
            name:"Machine",
            price:items.machine.price.toFixed(1),
            numberOfItem: items.machine.count,
            Component: Machine
        }
    ]
  return (
    <div className='grid grid-cols-3'>
        {itemList.map((item) => {
            const Component = item.Component;
            return (
                <Component
                key = {item.id}
                name = {item.name}
                price = {item.price}
                numberOfItem = {item.numberOfItem}
                onBuy = {() => onBuy(item.key)}
                ></Component>
            )
        })}
    </div>
  )
}

export default Items