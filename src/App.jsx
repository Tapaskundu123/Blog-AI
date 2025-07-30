
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'

function App() {

  return (
   <div>
     <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/Blog/:id' element={<Blogs/>} />
     </Routes>
   </div>
  )
}

export default App
