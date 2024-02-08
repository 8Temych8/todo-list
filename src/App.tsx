import './App.css'
import { useState } from 'react'
import FilterBar from './Header'
import NewTaskBtn from './NewTaskBtn'
import NewTaskModal from './NewTaskModal'

function App() {

  const [openModal, setOpenModal] = useState(false);

  const modalWindowOpenHandler = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div className='container'>
      <h1>TODO LIST</h1>
      <FilterBar />
      <NewTaskBtn isClicked = {modalWindowOpenHandler}/>
      <NewTaskModal isOpen = {openModal} setIsOpen = {closeModal}/>
    </div>
)
}

export default App
