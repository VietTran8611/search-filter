import React, { useState } from 'react'

export const Filter = () => {
  const fruits =[
    "Banana",
    "Apricot",
    "Apple",
    "Blueberry",
    "Cherry",
    "Date"
  ]  

  const [search,setSearch] = useState("")
  const handleInputChange =(e)=>{
    setSearch(e.target.value)
    console.log(fruitData)
    console.log(search)
  }

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
        <input type="text" placeholder='text here' onChange={handleInputChange}/>
        {filteredFruits.map((fruit)=>{
            return(
                <p>{fruit}</p>
            )
        })}
    </div>
  )
}
