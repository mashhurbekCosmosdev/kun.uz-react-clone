import React from "react";
import "./POLITICS.css"
import "./POLITICS-responsive.css"
import Nav from "../Navbar/Nav";
import img7 from "./img/9OPK3Bou7TzA71p2BlOV5DiGcwoa9NTi_medium.jpg"
import img8 from "./img/SVg_irOqkseDszr68DmXdZkK_X2tcB8I_medium.jpg"
import img9 from "./img/VuWs8Ljefz57cvgTFM5tO9_86AXIer8v_medium (1).png" 
import img10 from "./img/SVg_irOqkseDszr68DmXdZkK_X2tcB8I_medium.jpg"
import img11 from "./img/ZYgi9NIier_-plzmeQIdmHfJCw4TcQeR_medium.jpg"


function POLITICS(){
    return(
        <div className="twise">
        <header>
        <Nav/>
        </header>

        {/* one list start */}
        <div className="political">
        <div className="political_div1">
        <div className="screen_div">
        <div className="initial_part1">
        <h1><box-icon name='disc' type='solid' color='#0a0b56' ></box-icon>Latest news</h1>
        <img src={img7}/></div>
        <div className="initial_part2"><br /><br /><br />
        <h5><box-icon name='box' color='#8b8b8b' ></box-icon>14:27 / 22.11.2023</h5><br />
        <h3>FM Saidov holds talks with AIIB President Jin Liqun</h3><br />
        <p>On November 21, the Foreign Minister of Uzbekistan Bakhtiyor Saidov met in Beijing with the President of the Asian Infrastructure Investment Bank, Jin Liqun.</p>
        </div>
        </div>
        {/* one list end */}

        {/* two list start */}
        <div className="four_divded1">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img8}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Aziz Voitov suspected of embezzlement and abuse of official power </h3><br /><br />
        <hr className="hr"/>
        </div>
        </div>
        <div className="smal_picture_and_div2">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img9}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Saida Mirziyoyeva speaks about reform of the national alphabet</h3><br /><br /><br />
        <hr className="hr"/>
        </div>
        </div>
        </div>
        </div>
        {/* two list end */}

        {/* two list start */}
        <div className="four_divded1">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img10}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Aziz Voitov suspected of embezzlement and abuse of official power </h3><br /><br />
        <hr className="hr"/>
        </div>
        </div>
        <div className="smal_picture_and_div2">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img11}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Saida Mirziyoyeva speaks about reform of the national alphabet</h3><br /><br /><br />
        <hr className="hr"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* two list end */}
        <div className="political_div2"></div>
        </div>
        </div>
    )
}
export default POLITICS;