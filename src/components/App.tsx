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
    setInventory(inventory => [...inventory, formData])
    setPageView(0)
  }

  const editItem = (formData: ItemData) => {
    setInventory(inventory => inventory.map(item => (item.id === formData.id ? formData : item)))
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
      <>
        <ItemSpecifics
          item={inventoryList.filter((item) => item.id === selectedItem)[0]} />
        <button onClick={() => setPageView(2)}>Edit item</button>
      </>
  }
  else if (pageView === 2) {
    currentView =
      <ItemForm
        handleFormSubmission={addNewItem}
        isNewItem={true}
      />
  }
  else if (pageView == 3) {
    currentView =
      <ItemForm
        handleFormSubmission={editItem}
        isNewItem={false}
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
