import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import SingleUser from './pages/SingleUser'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='User/:username' element={<SingleUser />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
