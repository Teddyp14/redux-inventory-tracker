import { useState } from 'react';
import { ItemData } from '../interfaces'
import inventoryList from '../InventoryList';
import Header from './Header';
import Catalog from './Catalog';
import ItemSpecifics from "./ItemSpecifics";
import ItemForm from './ItemForm';

const App: React.FC = () => {

  const [pageView, setPageView] = useState<number>(0)
  const [inventory, setInventory] = useState<ItemData[]>(inventoryList)
  const [cartList, setCartList] = useState<ItemData[]>()
  const [selectedItem, setSelectedItem] = useState<string>("")

  const displayItemSpecifics = (id: string) => {
    setPageView(1)
    setSelectedItem(id)
  }

  const addNewItem = (formData: ItemData) => {
    console.log(formData)
    setInventory(inventory => [...inventory, formData])
    console.log(inventory)
    setPageView(0)
  }

  let currentView;

  if (pageView === 0) {
    currentView =
      <>
        <Catalog
          inventoryList={inventory}
          changePageFunction={displayItemSpecifics} />
        <button onClick={() => setPageView(2)}>Add new item!</button>
      </>
  }
  else if (pageView === 1) {
    currentView =
      <ItemSpecifics
        item={inventoryList.filter((item) => item.id === selectedItem)[0]} />
  }
  else if (pageView === 2) {
    currentView =
      <ItemForm
        handleFormSubmission={addNewItem}
      />

  }

  return (
    <>
      <Header />
      {currentView}
    </>
  )
}

export default App
