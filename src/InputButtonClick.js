import { useState } from "react";

export default function InputButtonClick()
{
    let [print,SetPrint]=useState("");
    let [value1,SetValue]=useState(false);
    function ChangeData(value)
    {
      SetPrint(value.target.value);
      SetValue(false);
    }
    
  return(
     <div>
          <h1>Text1<input type="textbox" onChange={ChangeData}></input></h1>
          <h1><button onClick={()=>SetValue(true)}>Click Me</button></h1>
          <h1>Text2<input type="textbox" value={
              value1 ? print :""
          }></input></h1>
     </div>
  );
}