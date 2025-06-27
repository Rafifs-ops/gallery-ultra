import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import EvilUltra from './components/pages/EvilUltra';
import Home from './components/pages/Home';
import SplashCursor from './components/SplashCursor';


function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/EvilUltra" element={<EvilUltra />} />
        </Routes>
      </HashRouter>
      <SplashCursor />
    </div>
  );
}

export default App;
