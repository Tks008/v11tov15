import React from "react";

export default class PropInClass extends React.Component
{
   render()
   {
    return (
     <div>
        <h1>Prop In Class. Called </h1>
        <h1>{this.props.name}</h1>

     </div>
    );
   }
}