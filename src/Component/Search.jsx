import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
  const [Img, setImg] = useState('');
  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
    console.log(data);

  }
  return (
    <div>
       <h1>Hi this is  Search page</h1>
       <div style={{textAlign:'center'}}>
        <input   style={{padding:'10px',fontSize:'18px',marginBottom:'20px',width:'18%'}}
        type='text'
        placeholder='Search Anything'
        value={Img}
        onChange={inputEvent}
        />
        <br/>
      {Img ==="" ? null :<Sresult name={Img}/> } 
       </div>
    </div>
  )
}

export default Search;
