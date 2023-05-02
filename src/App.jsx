import React, { useState } from 'react'

const App = () => {
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    };

    const handleChange = (onChangeHandle,i) => {
        const inputdata= [...val]
        inputdata[i] = onChangeHandle.target.value;
        setVal(inputdata)
    }
   

    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal.splice(i,1) 
        setVal (deleteVal)
    }
    console.log(val,"data-");
  return (
    <>
      
      {
        
        val.map((data,i)=>{
            return(
                <div>
                    <input value={data} onChange={e=>handleChange(e,i)} placeholder='Description of Service or Product' style={{width:"50%",height:"30px"}}/>
                    <button onClick={()=>handleDelete(i)}>✖</button>
                </div>
            )
        })
      }
      
      <button onClick={()=>handleAdd()} style={{width:"100px", height:"30px", fontSize:"16px"}}>+ Line item</button>
    </>
  )
}

export default App
