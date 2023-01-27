import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import SingleUser from './pages/SingleUser'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='User/:username'
          element={
            <ProtectedRoute>
              <SingleUser />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
