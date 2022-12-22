import './App.css';
import Navbar from '../src/Components/Navbar'
import Newsfeed from './newsfeed';
import Categories from './Components/categories';
function App() {
  return (
    <div>
      <Navbar />
      <div className='side'>
        <Categories />
        <Newsfeed />
      </div>
    </div>
  );
}

export default App;
