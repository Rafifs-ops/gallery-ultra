import './App.css';
import { useState, useEffect } from 'react';
import Intro from './components/Intro';
import NavHead from './components/Nav';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Comment from './components/Comment';
import SplashCursor from './components/SplashCursor';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isNightMode, setIsNightMode] = useState(false);
  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);


  return (
    <div>
      <SplashCursor />
      <NavHead isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <Intro />
      <Gallery isNightMode={isNightMode} />
      <Comment isNightMode={isNightMode} />
      <Footer />
    </div>
  );
}

export default App;
