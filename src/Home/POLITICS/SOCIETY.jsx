import React from "react";
import "./SOCIETY.css"
import "./SOCIETY-responsive.css"
import Right from "./Right_div/Right_div";
import Left from "./Left_div/Left_div";
import Nav from "../Navbar/Nav";

function SOCIETY(){
    return(
        <div className="twise">
            <Nav/>
        <Right/>
        <Left/>
        </div>
    )
}
export default SOCIETY;