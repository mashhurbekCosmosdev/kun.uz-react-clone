import React from "react";
import "./Left_div.css"
import "./Left_div-responsive.css"

function Left(){
    return(
        <div className="left row"> 
         <div className="end_left">
        <h5><box-icon name='circle' color='#0807a9' ></box-icon>So'ngi yangiliklar</h5><br />
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>15:04</p><br />
        <h4>PGO: About 500 persons committed bribe-related crimes over 2 years</h4>
        <hr className="hr3"/>
        </div>
        <div className="end_left">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>13:22</p><br />
        <h4>Silk Avia plane en route Tashkent – Termez lands in Karshi due to a dust storm</h4><br />
        <hr className="hr3"/>
        </div>
        <div className="end_left">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>12:23</p><br />
        <h4>Uzenergoinspektsiya official in Bukhara detained for accepting $50,000 in bribe</h4><br />
        <hr className="hr3"/>
        </div>
        <div className="end_left">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>11:45</p><br />
        <h4>Air Samarkand performs its first demo flight</h4><br />
        <hr className="hr3"/>
        </div>
        <div className="end_left">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>11:00</p><br />
        <h4>Masdar to invest $2.6 billion in new wind farm and energy storage</h4><br />
        <hr className="hr3"/>
        </div>
        <div className="end_left">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>10:01</p><br />
        <h4>Uzbekistan, Kyrgyzstan to launch production of 12 car models from 2024</h4><br />
        <hr className="hr3"/>
        </div>
        <div className="end_left">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>09:00</p><br />
        <h4>Court verdict on blogger Olimjon Haydarov’s case remains unchanged</h4><br />
        <hr className="hr3"/>
        </div>
        <div className="end_left">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>20:38</p><br />
        <h4>Duty-free regime for a number of food products extended </h4><br />
        <hr className="hr3"/>
        </div>
        <div className="end_left"><br />
        <button>More News<box-icon name='right-arrow-alt' color='#18181b' ></box-icon></button>
        </div>
        </div>
        )
}
export default Left;