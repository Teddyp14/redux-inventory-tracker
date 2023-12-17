import { useSelector, useDispatch } from 'react-redux'
import { selectPageView } from '../redux/pageViewSlice'
import { selectInventory, addItem, selectItem, updateItem, deleteItem, purchaseItem, updateInventory } from '../redux/inventorySlice'
import { changeView } from '../redux/pageViewSlice'
import type { ItemData } from '../types'
import { pageView } from '../defaultValues';
import Header from './Header';
import Catalog from './Catalog';
import ItemSpecifics from "./ItemSpecifics";
import ItemForm from './ItemForm';
import './App.css'

const App = () => {

  const inventory = useSelector(selectInventory)
  const page = useSelector(selectPageView)
  const dispatch = useDispatch()

  const displayItemSpecifics = (id: string) => {
    dispatch(selectItem(id))
    dispatch(changeView(pageView.itemSpecifics))
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

  const deleteAnItem = (id: string) => {
    dispatch(deleteItem(id))
    dispatch(changeView(pageView.home))
  }

  let currentView;

  if (page.view === pageView.home) {
    currentView =
      <>
        <Catalog
          viewItemFunction={displayItemSpecifics} />
      </>
  }
  else if (page.view === pageView.itemSpecifics && inventory.selectedItem) {
    currentView =
      <>
        <ItemSpecifics
          purchaseItem={recordSale}
          deleteItem={deleteAnItem} />
      </>
  }
  else if (page.view === pageView.addItemForm) {
    currentView =
      <ItemForm
        handleFormSubmission={addNewItem}
        isNewItem={true}
        buttonText="Add item"
      />
  }
  else if (page.view == pageView.updateItemForm) {
    currentView =
      <ItemForm
        handleFormSubmission={changeItem}
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
