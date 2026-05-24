import { useState } from 'react'
import './index.css'
import Content from './components/layout/Content'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'


function App() {

  const [selectedMenu, setSelectedMenu] = useState('Home')

  return (
    <div className='app'>
      <div className='app-body'>
        <Sidebar 
          selectedMenu={selectedMenu}
          onSelectedMenu={setSelectedMenu}
        />
        <Content 
          selectedMenu={selectedMenu}
        />
      </div>
    <Footer />
    </div>
  )
}

export default App
