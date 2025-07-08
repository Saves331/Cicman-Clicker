import React, { Component } from 'react'
import Employee from './Items/Employee'
import Protein from './Items/Protein'
import Machine from './Items/Machine'
function Items(props) {

    const {
         displayEmployeePrice, 
         displayProteinPrice, 
         displayMachinePrice, 
         NumberOfEmployeeItem, 
         numberOfProteinItem,
         numberOfMachineItem, 
         addEmployee, 
         addProtein, 
         addMachine} = props;

    const items = [
        {
            id: 1,
            name: "Protein",
            price:displayProteinPrice,
            numberOfItem: numberOfProteinItem,
            onBuy: addProtein,
            Component: Protein
        
        },
          
        {
            id: 2,
            name: "Employee",
            price:displayEmployeePrice,
            numberOfItem:NumberOfEmployeeItem,
            onBuy: addEmployee,
            Component: Employee,
            
        },

        {
            id: 3,
            name:"Machine",
            price:displayMachinePrice,
            numberOfItem:numberOfMachineItem,
            onBuy:addMachine,
            Component: Machine
        }
    ]
  return (
    <div className='grid grid-cols-3'>
        {items.map((item) => {
            const Component = item.Component;
            return (
                <Component
                key = {item.id}
                name = {item.name}
                price = {item.price}
                numberOfItem = {item.numberOfItem}
                onBuy = {item.onBuy}
                ></Component>
            )
        })}
    </div>
  )
}

export default Items