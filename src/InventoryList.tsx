import { ItemData } from './interfaces';
import { v4 } from 'uuid'


const inventoryList: ItemData[] = [{
    title: "Wavestorm longboard",
    image: "./img/wavestorm.webp",
    description: "An 8' soft-top perfect for summer waves!",
    price: 150,
    quantity: 10,
    id: v4()
},
{
    title: "5mm Wetsuit",
    image: "./img/wetsuit.webp",
    description: "A wetsuit with a built in hood, made for the North Pacific.",
    price: 220,
    quantity: 20,
    id: v4()
},
{
    title: "Thermos",
    image: "./img/thermos.webp",
    description: "Have some hot soup after a cold session!",
    price: 30,
    quantity: 50,
    id: v4()
}
]

export default inventoryList;