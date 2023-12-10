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
  const [selectedItem, setSelectedItem] = useState<ItemData>()
  const [itemToEdit, setItemToEdit] = useState<ItemData>()

  const displayItemSpecifics = (id: string) => {
    setPageView(1)
    const item = inventory.filter((item) => item.id === id)[0]
    setSelectedItem(item)
  }

  const addNewItem = (formData: ItemData) => {
    setInventory(oldList => [...oldList, formData])
    setPageView(0)
  }

  const updateItem = (formData: ItemData) => {
    setInventory(inventory => inventory.map(item => (item.id === formData.id ? formData : item)))
    displayItemSpecifics(formData.id)
    setPageView(1)
  }

  const selectItemToEdit = (id: string) => {
    const item = inventory.filter(item => item.id === id)[0]
    setItemToEdit(item)
    setPageView(3)
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
  else if (pageView === 1 && selectedItem) {
    currentView =
      <>
        <ItemSpecifics
          item={selectedItem}
          editItem={selectItemToEdit} />

      </>
  }
  else if (pageView === 2 && selectedItem) {
    currentView =
      <ItemForm
        handleFormSubmission={addNewItem}
        selectedItem={selectedItem}
        isNewItem={true}
        buttonText="Add item"
      />
  }
  else if (pageView == 3 && itemToEdit) {
    currentView =
      <ItemForm
        handleFormSubmission={updateItem}
        selectedItem={itemToEdit}
        isNewItem={false}
        buttonText="Update item"
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
