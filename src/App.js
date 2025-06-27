import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import EvilUltra from './components/pages/EvilUltra';
import Home from './components/pages/Home';
import SplashCursor from './components/SplashCursor';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/EvilUltra" element={<EvilUltra />} />
        </Routes>
      </BrowserRouter>
      <SplashCursor />
    </div>
  );
}

export default App;
