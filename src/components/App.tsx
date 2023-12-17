import { useState } from 'react';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { addItem, selectItem, updateItem, deleteItem, purchaseItem } from '../redux/inventorySlice'
import type { ItemData } from '../types'
import inventoryList from '../defaultList';
import Header from './Header';
import Catalog from './Catalog';
import ItemSpecifics from "./ItemSpecifics";
import ItemForm from './ItemForm';
import './App.css'

const App: React.FC = () => {

  const inventory = useSelector((state: RootState) => state.inventory)
  const dispatch = useDispatch()

  const [pageView, setPageView] = useState<number>(0)
  // const [inventory, setInventory] = useState<ItemData[]>(inventoryList)
  // const [selectedItem, setSelectedItem] = useState<ItemData>(inventory[0])
  // const [itemToEdit, setItemToEdit] = useState<ItemData>()

  const displayItemSpecifics = (id: string) => {
    dispatch(selectItem(id))
    setPageView(1)
  }

  const changePage = (page: number) => {
    setPageView(page)
  }

  const backToHome = () => {
    setPageView(0)
  }

  const addNewItem = (formData: ItemData) => {
    dispatch(addItem(formData))
    setPageView(0)
  }

  const changeItem = (formData: ItemData) => {
    dispatch(updateItem(formData))
    dispatch(selectItem(formData.id))
    setPageView(1)
  }

  const recordSale = () => {
    // dispatch(selectItem(id))
    dispatch(purchaseItem())

    // const item = inventory.inventoryList.filter(item => item.id === id)[0]
    // if (item.quantity > 0) {
    //   const quantity = item.quantity - 1
    //   setSelectedItem({ ...selectedItem, quantity })
    //   const newInventory = inventory.map(item => item.id === id ? { ...item, quantity } : item)
    //   setInventory(newInventory)
    // }
  }

  // const selectItemToEdit = (id: string) => {
  //   const item = inventory.filter(item => item.id === id)[0]
  //   setItemToEdit(item)
  //   setPageView(3)
  // }

  const deleteAnItem = (id: string) => {
    dispatch(deleteItem(id))
    setPageView(0)
  }

  let currentView;

  if (pageView === 0) {
    currentView =
      <>
        <Catalog
          inventoryList={inventory.inventoryList}
          viewItemFunction={displayItemSpecifics}
          pageChange={changePage} />
      </>
  }
  else if (pageView === 1 && inventory.selectedItem) {
    currentView =
      <>
        <ItemSpecifics
          item={inventory.selectedItem}
          editItem={changeItem}
          purchaseItem={recordSale}
          deleteItem={deleteAnItem} />

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
  else if (pageView == 3) {
    currentView =
      <ItemForm
        handleFormSubmission={changeItem}
        selectedItem={inventory.selectedItem}
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
