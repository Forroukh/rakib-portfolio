import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import Main from './components/Main/Main';
import BackTop from './components/BackTop/BackTop';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">

      <Navigation></Navigation>
      <Routes>
        <Route path='' element={<Main></Main>}></Route>
      </Routes>
      <Footer></Footer>
      <BackTop></BackTop>
    </div>


  );
}

export default App;
