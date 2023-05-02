import React from 'react';
import {BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Search from './Component/Search';
import User from './Component/User';
import Menu from './Component/Menu';
import Service from './Component/Service';


const App2 = () => {
  return (
    <>

      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<About />}/>
          <Route path='/Service' element={<Service />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/user' element={<User/>} />
          <Route exact path='/Contact' element={<Contact />}/>
          <Route  element={Error}/>
          
        </Routes>
      </Router>

      {/* <About />
      <Contact /> */}
    </>
  )
}

export default App2;

