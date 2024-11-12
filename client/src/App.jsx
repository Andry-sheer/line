import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/sing-in' element={<SingIn/>} />
        <Route path='/sing-up' element={<SingUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;