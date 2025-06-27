import React from 'react';
import '../../App.css';
import { useState, useEffect } from 'react';
import Intro from '../Intro';
import NavHead from '../Nav';
import Footer from '../Footer';
import Comment from '../Comment';
import SplashCursor from '../SplashCursor';
import 'bootstrap/dist/css/bootstrap.min.css';

function EvilUltra() {

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
      <Comment isNightMode={isNightMode} />
      <Footer />
    </div>
  );
}

export default React.memo(EvilUltra);
