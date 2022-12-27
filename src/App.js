import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/signup';
import Footer from './Components/footer';
import Categoriees from './Components/categories';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/business' element={<Categoriees cat='business'/>}/>
          <Route path='/health' element={<Categoriees cat='health'/>}/>
          <Route path='/science' element={<Categoriees cat='science'/>}/>
          <Route path='/sports' element={<Categoriees cat='sports'/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
