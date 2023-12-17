import { ItemData } from './types';
import { v4 } from 'uuid'
import wavestorm from './img/wavestorm.webp'
import wetsuit from './img/wetsuit.webp'
import thermos from './img/thermos.webp'

const defaultList: ItemData[] = [{
    title: "Wavestorm longboard",
    image: wavestorm,
    description: "An 8' soft-top perfect for summer waves!",
    price: 150,
    quantity: 10,
    id: v4()
},
{
    title: "5mm Wetsuit",
    image: wetsuit,
    description: "A wetsuit with a built in hood, made for the North Pacific.",
    price: 220,
    quantity: 20,
    id: v4()
},
{
    title: "Thermos",
    image: thermos,
    description: "Have some hot soup after a cold session!",
    price: 30,
    quantity: 50,
    id: v4()
}
]

export default defaultList;