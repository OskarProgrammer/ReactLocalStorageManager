import { useState } from 'react'
import './App.css'
import { Item } from './components/Item'

function App() {
  const [isExtended, setIsExtended] = useState(false)
  const [items, setItems] = useState(localStorage)


  const deleteItem = (key) => {
    localStorage.removeItem(`${key}`)
    setItems(localStorage)
  }

  return (
    <>
      <h1>Local Storage Manager</h1>
      <div>

        <button onClick={()=>{setIsExtended(!isExtended); console.log(localStorage);}}>
          Click to extend the list
        </button>
        {isExtended ?  Object.entries(items).map( ([key, value]) => {
            return (<Item itemKey={key} value={value} onRemove={deleteItem} />)
        } ): ""}

      </div>
    </>
  )
}

export default App
