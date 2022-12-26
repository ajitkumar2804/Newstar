import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/signup';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
