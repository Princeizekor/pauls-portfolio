import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Service from './pages/Service';
import Contact from './pages/Contact';
import BrowserCursor from './components/BrowserCursor';
import Spinner from './components/Spinner';
import React, { useState } from 'react';
import { Resumedata } from './ResumeData';

function App() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    Resumedata.map((item) => {
      item ? setLoading(false) : setLoading(true)
    })
  }, 5000)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <BrowserCursor />
        {
          loading ? <Spinner /> : null
        }
        <div className="component">
          <Route exact path="/">
            <Home />
          </Route>
          <About />
          <Resume />
          <Portfolio />
          <Service />
          <Contact />
        </div>
        <button className='to-top'><a href="#">Top</a></button>
      </div>
    </Router>
  );
}

export default App;
