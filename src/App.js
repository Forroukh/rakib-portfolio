import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Nav/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
