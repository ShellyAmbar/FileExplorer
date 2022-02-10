import React, { useState } from "react";

import "./SearchBar.css"

const Index=({ onSearchClicked }) =>{
  const [value, setvalue] = useState("");
  const handleValueChanged = (e) => {
    setvalue(e.target.value);
    const val = e.target.value;
    console.log(val);
   
  };



  return (
    <div className="search-conatiner">
     
    
        <input
          placeholder="Enter directory path"
          className="input"
          value={value}
          onChange={(newVal) => handleValueChanged(newVal)}
        />
  <button   onClick={onSearchClicked}>
          Search
        </button>

     

     
    </div>
  )
}

export default Index;