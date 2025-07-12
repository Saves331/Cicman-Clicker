import ProteinImg from "./images/Protein.webp"
import MachineImg from "./images/Machine.jpg"
import EmployeeImg from "./images/Employee.png"
import supplementStackImg from "./images/SupplementStack.webp"
import ProteinUpgradeImg from "./images/ProteinUpgrade.png"
import opelImg from "./images/Opel.jpg"
import predajnaImg from "./images/predajna.webp"
import skladImg from "./images/sklad.webp"
import mercedesImg from "./images/mercedes.png"
import robotImg from "./images/robot.webp"

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
            
        },

         {
            id: 4,
            key: "supplementStack",
            name: "Supplement Stack",
            price: items.supplementStack.price.toFixed(1),
            numberOfItem: items.supplementStack.count,
            img: supplementStackImg,
           
            
        },

         {
            id: 5,
            key: "opel",
            name: "Opel Insignia",
            price: items.opel.price.toFixed(1),
            numberOfItem: items.opel.count,
            img: opelImg,
           
            
        },

         {
            id: 6,
            key: "predajna",
            name: "Predajna GYMBEAM",
            price: items.predajna.price.toFixed(1),
            numberOfItem: items.predajna.count,
            img: predajnaImg,
           
            
        },


         {
            id: 7,
            key: "sklad",
            name: "Sklad GYMBEAM!!!",
            price: items.sklad.price.toFixed(1),
            numberOfItem: items.sklad.count,
            img: skladImg,
           
            
        }, 
         {
            id: 8,
            key: "mercedes",
            name: "Maybach Brabus",
            price: items.mercedes.price.toFixed(1),
            numberOfItem: items.mercedes.count,
            img: mercedesImg,
           
            
        },
         {
            id: 9,
            key: "robot",
            name: "Roboti",
            price: items.robot.price.toFixed(1),
            numberOfItem: items.robot.count,
            img: robotImg,
           
            
        },
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
        img: EmployeeImg,
        multiplier: 2
    },
    {
        id: 3,
        key: "machineUpgrade",
        name: "MachineUpgrade",
        displayName: "Machine",
        price: upgrades.machineUpgrade.price.toFixed(1),
        numberOfItem: upgrades.machineUpgrade.count,
        img: MachineImg,
        multiplier: 2
    },
    {
        id: 4,
        key: "supplementStackUpgrade",
        name: "SupplementStackUpgrade",
        displayName: "Supplement Stack",
        price: upgrades.supplementStackUpgrade.price.toFixed(1),
        numberOfItem: upgrades.supplementStackUpgrade.count,
        img: supplementStackImg,
        multiplier: 2
    },
    {
        id: 5,
        key: "opelUpgrade",
        name: "OpelUpgrade",
        displayName: "Opel Insignia",
        price: upgrades.opelUpgrade.price.toFixed(1),
        numberOfItem: upgrades.opelUpgrade.count,
        img: opelImg,
        multiplier: 2
    },
    {
        id: 6,
        key: "predajnaUpgrade",
        name: "PredajnaUpgrade",
        displayName: "Predajna GYMBEAM",
        price: upgrades.predajnaUpgrade.price.toFixed(1),
        numberOfItem: upgrades.predajnaUpgrade.count,
        img: predajnaImg,
        multiplier: 2
    },
    {
        id: 7,
        key: "skladUpgrade",
        name: "SkladUpgrade",
        displayName: "Sklad GYMBEAM",
        price: upgrades.skladUpgrade.price.toFixed(1),
        numberOfItem: upgrades.skladUpgrade.count,
        img: skladImg,
        multiplier: 2
    },
    {
        id: 8,
        key: "mercedesUpgrade",
        name: "MercedesUpgrade",
        displayName: "Maybach Brabus",
        price: upgrades.mercedesUpgrade.price.toFixed(1),
        numberOfItem: upgrades.mercedesUpgrade.count,
        img: mercedesImg,
        multiplier: 2
    },
    {
        id: 9,
        key: "robotUpgrade",
        name: "RobotUpgrade",
        displayName: "Roboti",
        price: upgrades.robotUpgrade.price.toFixed(1),
        numberOfItem: upgrades.robotUpgrade.count,
        img: robotImg,
        multiplier: 2
    }
]

