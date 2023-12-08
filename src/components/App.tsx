import { useState } from 'react';
import inventoryList from '../InventoryList';
import Header from './Header'
import './App.css'

interface ItemData {
  title: string,
  image: string,
  description: string,
  price: number,
  id: string
}

const App: React.FC = () => {

  const [inventory, setInventory] = useState<ItemData[]>(inventoryList)
  return (
    <>
      <Header />
    </>
  )
}

export default App
