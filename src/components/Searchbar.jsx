import React from 'react'

const Searchbar = () => {
  return (
    <div className='text-black'>
    <input 
        type="text" 
        placeholder="Search for movies..." 
        style={{ padding: '6px',backgroundColor: 'whitesmoke', width: '300px', borderRadius: '5px', border: '1px solid #ccc'}} 
        onChange={(e) => console.log(e.target.value)} 
    />
    </div>
  )
}

export default Searchbar
