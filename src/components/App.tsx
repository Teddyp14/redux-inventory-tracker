// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectInventory } from '../redux/inventorySlice'
import { selectPageView } from '../redux/pageViewSlice'
import { addItem, selectItem, updateItem, deleteItem, purchaseItem, updateInventory } from '../redux/inventorySlice'
import { changeView } from '../redux/pageViewSlice'
import type { ItemData } from '../types'
import inventoryList from '../defaultList';
import Header from './Header';
import Catalog from './Catalog';
import ItemSpecifics from "./ItemSpecifics";
import ItemForm from './ItemForm';
import './App.css'

const App: React.FC = () => {

  const inventory = useSelector(selectInventory)
  const page = useSelector(selectPageView)
  const dispatch = useDispatch()

  const pageView = {
    home: 0,
    itemSpecifics: 1,
    addItemForm: 2,
    updateItemForm: 3
  }

  // const [pageView, setPageView] = useState<number>(0)

  const displayItemSpecifics = (id: string) => {
    dispatch(selectItem(id))
    dispatch(changeView(pageView.itemSpecifics))
  }

  const changePage = (page: number) => {
    changeView(page)
  }

  const backToHome = () => {
    dispatch(changeView(pageView.home))
  }

  const addNewItem = (formData: ItemData) => {
    dispatch(addItem(formData))
    dispatch(changeView(pageView.home))
  }

  const changeItem = (formData: ItemData) => {
    dispatch(updateItem(formData))
    dispatch(selectItem(formData.id))
    dispatch(changeView(pageView.itemSpecifics))
  }

  const recordSale = () => {
    dispatch(purchaseItem())
    dispatch(updateInventory())
  }

  const editPage = () => {
    dispatch(changeView(pageView.updateItemForm))
  }

  const deleteAnItem = (id: string) => {
    dispatch(deleteItem(id))
    dispatch(changeView(pageView.home))
  }

  let currentView;

  if (page.view === pageView.home) {
    currentView =
      <>
        <Catalog
          inventoryList={inventory.inventoryList}
          viewItemFunction={displayItemSpecifics}
          pageChange={changePage} />
      </>
  }
  else if (page.view === 1 && inventory.selectedItem) {
    currentView =
      <>
        <ItemSpecifics
          item={inventory.selectedItem}
          editItem={editPage}
          purchaseItem={recordSale}
          deleteItem={deleteAnItem} />

      </>
  }
  else if (page.view === 2) {
    currentView =
      <ItemForm
        handleFormSubmission={addNewItem}
        selectedItem={inventoryList[0]}
        isNewItem={true}
        buttonText="Add item"
      />
  }
  else if (page.view == 3) {
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
