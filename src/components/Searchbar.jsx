import React from 'react'

const Searchbar = () => {
  return (
    <div>
    <input 
        type="text" 
        placeholder="Search for movies..." 
        style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }} 
        onChange={(e) => console.log(e.target.value)} 
    />
    </div>
  )
}

export default Searchbar
