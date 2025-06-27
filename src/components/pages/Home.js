import React from 'react';
import '../../App.css';
import { useState, useEffect } from 'react';
import Intro from '../Intro';
import NavHead from '../Nav';
import Gallery from '../Gallery';
import Footer from '../Footer';
import Comment from '../Comment';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

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
      <NavHead isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <Intro />
      <Gallery isNightMode={isNightMode} />
      <Comment isNightMode={isNightMode} />
      <Footer />
    </div>
  );
}

export default React.memo(Home);
