import React from "react";
import "./POLITICS.css"
import "./POLITICS-responsive.css"
import Left from "./Left_div/Left_div";
import Right from "./Right_div/Right_div";
import Nav from "../Navbar/Nav";

function POLITICS(){
    return(
        <div className="twise">
        <header>
        <Nav/>
        </header>
        <Right/>
        <Left/>
        </div>
    )
}
export default POLITICS;