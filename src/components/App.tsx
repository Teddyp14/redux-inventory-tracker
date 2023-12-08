import { useState } from 'react';
import { ItemData } from '../interfaces'
import inventoryList from '../InventoryList';
import Header from './Header';
import Catalog from './Catalog';
import ItemSpecifics from "./ItemSpecifics";

const App: React.FC = () => {

  const [pageView, setPageView] = useState<number>(0)
  const [inventory, setInventory] = useState<ItemData[]>(inventoryList)
  const [cartList, setCartList] = useState<ItemData[]>()
  const [selectedItem, setSelectedItem] = useState<string>("")

  const displayItemSpecifics = (id: string) => {
    setPageView(1)
    setSelectedItem(id)
  }

  let currentView;

  if (pageView === 0) {
    currentView =
      <Catalog
        inventoryList={inventoryList}
        changePageFunction={displayItemSpecifics} />
  }
  else if (pageView === 1) {
    currentView =
      <ItemSpecifics
        item={inventoryList.filter((item) => item.id === selectedItem)[0]} />
  }

  return (
    <>
      <Header />
      {currentView}
    </>
  )
}

export default App
