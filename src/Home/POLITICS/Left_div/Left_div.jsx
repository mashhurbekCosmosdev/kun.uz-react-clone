import React from "react";
import "./Left_div.css"
import "./Left_div-responsive.css"
import Right from "../Right_div/Right_div";

function Left(){
    return(
        <div className="left row"> 
     <h1>left</h1>
     <Right/>
        </div>
        )
}
export default Left;