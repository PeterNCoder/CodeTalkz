import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { Forum } from './pages/Forum'
import { Users } from './pages/Users'

function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/forum' element={<Forum/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App