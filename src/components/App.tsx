import { useState } from 'react';
import inventoryList from '../InventoryList';
import Header from './Header';
import Catalog from './Catalog';

interface ItemData {
  title: string,
  image: string,
  description: string,
  price: number,
  id: string
}

const App: React.FC = () => {

  const [inventory, setInventory] = useState<ItemData[]>(inventoryList)
  const [cartList, setCartList] = useState<ItemData[]>()

  return (
    <>
      <Header />
      <Catalog
        inventoryList={inventoryList} />

    </>
  )
}

export default App
