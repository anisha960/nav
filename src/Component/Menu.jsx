import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {
  const [active, setActive] = useState('About');
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname==='/'){
      setActive('About')
    }else if(location.pathname==='/contact'){
      setActive('contact')
    }
    else if(location.pathname==='/service'){
      setActive('service')
    }
    else if(location.pathname==='/search'){
      setActive('search')
    }
    else if(location.pathname==='/user'){
      setActive('user')
    }


  }, [location])


  return (
    <>
    <div className='menu_style'>
      <div>
        <h2>logo</h2>
      </div>
      <div>
    <NavLink to='/'
    className={`${active==='About' ? 'active_class': ""}`}
    onClick={() =>setActive('About')}
    >About</NavLink>
    
    <NavLink to='/contact'
     className={`${active==='contact' ? 'active_class': ""}`}
     onClick={() =>setActive('contact')}
    >Contact</NavLink>


    <NavLink to='/search' 
    className={`${active==='search' ? 'active_class': ""}`}
    > search</NavLink>

<NavLink to='/service' 
    className={`${active==='service' ? 'active_class': ""}`}
    > Service</NavLink>

    <NavLink to='/user' 
    className={`${active==='user' ? 'active_class': ""}`}
    > user</NavLink>
    </div>
    </div>
    </>
  )
}

export default Menu;
