import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
    <Route path='' element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
