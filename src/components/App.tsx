import { useState } from 'react';
import { ItemData } from '../ItemDataInterface'
import inventoryList from '../InventoryList';
import Header from './Header';
import Catalog from './Catalog';
import ItemSpecifics from "./ItemSpecifics";
import ItemForm from './ItemForm';
import './App.css'

const App: React.FC = () => {

  const [pageView, setPageView] = useState<number>(0)
  const [inventory, setInventory] = useState<ItemData[]>(inventoryList)
  const [selectedItem, setSelectedItem] = useState<ItemData>(inventory[0])
  const [itemToEdit, setItemToEdit] = useState<ItemData>()

  const displayItemSpecifics = (id: string) => {
    const item = inventory.filter((item) => item.id === id)[0]
    setSelectedItem(item)
    setPageView(1)
  }

  const changePage = (page: number) => {
    setPageView(page)
  }

  const backToHome = () => {
    setPageView(0)
  }

  const addNewItem = (formData: ItemData) => {
    setInventory(oldList => [...oldList, formData])
    setPageView(0)
  }

  const updateItem = (formData: ItemData) => {
    setInventory(inventory.map(item => (item.id === formData.id ? formData : item)))
    setSelectedItem(formData)
    setPageView(1)
  }

  const purchaseItem = (id: string) => {

    const item = inventory.filter(item => item.id === id)[0]
    if (item.quantity > 0) {
      const quantity = item.quantity - 1
      setSelectedItem({ ...selectedItem, quantity })
      const newInventory = inventory.map(item => item.id === id ? { ...item, quantity } : item)
      setInventory(newInventory)
    }
  }

  const selectItemToEdit = (id: string) => {
    const item = inventory.filter(item => item.id === id)[0]
    setItemToEdit(item)
    setPageView(3)
  }

  const deleteItem = (id: string) => {
    setInventory(inventory.filter(item => item.id !== id))
    setPageView(0)
  }

  let currentView;

  if (pageView === 0) {
    currentView =
      <>
        <Catalog
          inventoryList={inventory}
          viewItemFunction={displayItemSpecifics}
          pageChange={changePage} />
      </>
  }
  else if (pageView === 1 && selectedItem) {
    currentView =
      <>
        <ItemSpecifics
          item={selectedItem}
          editItem={selectItemToEdit}
          purchaseItem={purchaseItem}
          deleteItem={deleteItem} />

      </>
  }
  else if (pageView === 2) {
    currentView =
      <ItemForm
        handleFormSubmission={addNewItem}
        selectedItem={inventoryList[0]}
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
      <Header
        backToHomeFunction={backToHome} />
      {currentView}
    </>
  )
}

export default App
