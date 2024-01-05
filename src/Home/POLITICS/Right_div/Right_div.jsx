import React from "react";
import "./Right_div.css"
import "./Right_div-responsive.css"
import img7 from "./img/9OPK3Bou7TzA71p2BlOV5DiGcwoa9NTi_medium.jpg"
import img8 from "./img/SVg_irOqkseDszr68DmXdZkK_X2tcB8I_medium.jpg"
import img9 from './img/VuWs8Ljefz57cvgTFM5tO9_86AXIer8v_medium.png'
import img10 from "./img/HFwb09xAh2AFSGJSmimHk38ac42lNlZU_medium.jpg"
import img11 from "./img/ksallxyjYdUeO4xdIXjbrIVgH-ZgoKGQ_medium.jpg"
import img12 from "./img/Rd-0mI9kl_QZWIZJPIM6mauh0p0kq6rW_medium.jpg"
import img13 from "./img/ksallxyjYdUeO4xdIXjbrIVgH-ZgoKGQ_medium.jpg"
import img14 from "./img/4qTQu43aN4FP24OiZLrO2gvXK5bw4CYH_medium.jpg"


function Right(){
    return(
        <div className="right">
        <div className="right_div_start">
        <div className="right_and_left_div1">
        <div className="box_for_div"><box-icon name='circle' color='#0807a9' ></box-icon>NEWS OF POLITICS</div>
        <img src={img7}/></div>
        <div className="right_and_left_div2">
        <h5><box-icon name='box' color='#8e8e8e' ></box-icon>14:27 / 22.11.2023</h5><br />
        <h2>FM Saidov holds talks with AIIB President Jin Liqun</h2><br />
        <p>On November 21, the Foreign Minister of Uzbekistan Bakhtiyor Saidov met in Beijing with the President of the Asian Infrastructure Investment Bank, Jin Liqun.</p>
        </div>
        </div>
        <div className="long_div_divded">
        <div className="four_section1"><img src={img8}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>09:48 / 18.12.2023</p><br />
        <h3>Uzbekistan sends nearly 100 tons of humanitarian aid to Afghanistan (photos)</h3><br /><br />
        <hr  className="hr4"/>
        </div>
        <div className="four_section1"><img src={img9}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>10:24 / 15.12.2023</p><br />
        <h3>“If they merge without our permission, we will punish them” – Chairman of Competition Committee about merger of Uzum and Click </h3>
        <hr  className="hr4"/>
        </div>
        </div>

        <div className="long_div_divded1">
        <div className="four_section1"><img src={img10}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>15:53 / 13.12.2023</p><br />
        <h3>Vice President of Indonesia arrives in Uzbekistan</h3>
        <hr  className="hr2"/>
        </div>
        <div className="four_section1"><img src={img11}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>15:22 / 09.12.2023</p><br />
        <h3>Shavkat Mirziyoyev congratulates Recep Tayyip Erdoğan on his convincing victory in presidential elections</h3>
        <hr  className="hr4"/>
        </div>
        </div><br />
        <div className="picture_top_wride_text3">
        <div className="picture_and_text">
        <div className="picture_top_divded1"><img src={img12}/></div>
        <div className="picture_top_divded2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>21:19 / 15.12.2023</p>
        <h2>New deputies appointed to the FM of Uzbekistan</h2>
        </div>
        </div>
        <div className="picture_and_text">
        <div className="picture_top_divded1"><img src={img13}/></div>
        <div className="picture_top_divded2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>20:43 / 07.12.2023</p>
        <h2>Masdar to invest $2.6 billion in new wind farm and energy storage</h2>
        </div>
        </div>
        <div className="picture_and_text">
        <div className="picture_top_divded1"><img src={img14}/></div>
        <div className="picture_top_divded2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>12:18 / 21.11.2023</p>
        <h2>Komil Allamjonov, Turkish ambassador discuss prospects of cooperation in 2024</h2>
        </div>
        </div>
        </div>
         </div>
    )
}
export default Right;