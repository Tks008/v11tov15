import React, { useState } from "react";
export default function State()
{
    let [data,setData]=useState(0);
    function UpdateData()
    {
        setData(data+1)
    }
    return(
        <div>
          <h1>State In React {data}</h1>    
          <button onClick={UpdateData}>Update Data</button>
        </div>
    );
  
}
