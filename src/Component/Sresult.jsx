import React from 'react'

const Sresult = (props) => {
    const image = `https://loremflickr.com/320/240/${props.name}`;
  return (
    <>
    <div>
      <img src={image} alt="search"/>
    </div>
    </>
  )
}

export default Sresult;
