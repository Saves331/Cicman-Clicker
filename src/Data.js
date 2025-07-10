import ProteinImg from "./images/Protein.webp"
import MachineImg from "./images/Machine.jpg"
import EmployeeImg from "./images/Employee.png"
import ProteinUpgradeImg from "./images/ProteinUpgrade.png"

    export const getItemList = (items) => [
        {
            id: 1,
            key: "protein",
            name: "Protein",
            price: items.protein.price.toFixed(1),
            numberOfItem: items.protein.count,
            img: ProteinImg,
            
        
        },
          
        {
            id: 2,
            key: "employee",
            name: "Employee",
            price: items.employee.price.toFixed(1),
            numberOfItem: items.employee.count,
            img: EmployeeImg,
           
            
        },

        {
            id: 3,
            key: "machine",
            name:"Machine",
            price:items.machine.price.toFixed(1),
            numberOfItem: items.machine.count,
            img: MachineImg,
            
        }
    ]


    export const getUpgradeList = (upgrades) => [
        {
            id: 1,
            key: "proteinUpgrade",
            name: "ProteinUpgrade",
            displayName: "Protein",
            price: upgrades.proteinUpgrade.price.toFixed(1),
            numberOfItem: upgrades.proteinUpgrade.count,
            img: ProteinUpgradeImg,
            multiplier: 2
        },

        {
            id: 2,
            key: "employeeUpgrade",
            name: "EmployeeUpgrade",
            displayName: "Employee",
            price: upgrades.employeeUpgrade.price.toFixed(1),
            numberOfItem: upgrades.employeeUpgrade.count,
            img: ProteinUpgradeImg,
            multiplier: 2
        },

        {
            id: 3,
            key: "machineUpgrade",
            name: "MachineUpgrade",
            displayName: "Machine",
            price: upgrades.machineUpgrade.price.toFixed(1),
            numberOfItem: upgrades.machineUpgrade.count,
            img: ProteinUpgradeImg,
            multiplier: 2
        }
    ]

