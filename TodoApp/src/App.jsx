import { Add } from './components/Add'
import './App.css'
import { ItemsContainer } from './components/ItemsContainer'
import { useState } from 'react'

function App() {

  const [listItems,setListItems] = useState([])

  // const handleNewItem = (input,date) => {
  //   console.log(`name = ${input} date = ${date}`)
  //   let newListItem = [...listItems,{name : input,date : date}]
  //   setListItems(newListItem)
  // }

  const handleNewItem = (input,date) => {
    setListItems(pre => [...pre,{name : input,date : date}])
  }


  const handleDeleteButton = (type) => {
    console.log("delete button clicked!",type)
    const newListItem = listItems.filter(item => item.name !== type)
    setListItems(newListItem)
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='max-w-lg bg-slate-400'>
          <Add handleOnClick={handleNewItem}/>
          <ItemsContainer listItems= {listItems} handleDeleteButton= {handleDeleteButton} />
        </div>
      </div>
    </>
  )
}

export default App
