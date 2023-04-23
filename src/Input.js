import { useState } from "react";

export default function Input()
{
    let [data,SetData]=useState("Hello Input");
    function changeData(val)
    {
      console.log(val.target.value);
      SetData(val.target.value);
    }
  return(
    <div>
        <h1>
        <input type="textbox" onChange={changeData}></input></h1>
        <h1><input type="textbox" value={data}></input></h1> 
       <button onClick={()=>changeData}></button>
    </div>
  );
}