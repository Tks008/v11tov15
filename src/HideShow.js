import { useState } from "react";

export default function HideShow()
{
    let [status,setStatus]=useState(true);
   
  return(
    <div>
        {
            status ?
        <h1>Hello Tushar</h1> 
        : null
}
        {/* <h1><button onClick={()=>setStatus(true)}>Show</button></h1>
        <h1><button onClick={()=>setStatus(false)}>Hide</button></h1> */}
        <h1><button onClick={()=>setStatus(!status)}>Toggle</button></h1>
    </div>
  );
}