import React from "react";
// import {useTranslation} from "react-i18next" 
import "./home.css"
import "./home-responsive.css"
import 'boxicons';
import { NavLink } from 'react-router-dom'
import img1 from "./img/xr2TgvLR7AfSIC97qHqd6vxDSx6UGF_H_medium.jpg"
import img2 from"./img/xr2TgvLR7AfSIC97qHqd6vxDSx6UGF_H_medium.jpg"
import img3 from "./img/p7_gmN5Bb6ZK_T_oyUqUhVHsFrvwvf2-_medium.jpg"
import img4 from "./img/map.jpg"
import img5 from"./img/girl.jpg"
import img6 from "./img/building.jpg"


function Home() {


  // const {t,i18n} = useTranslation();

  
  // const changeLanguage = (lng) => {
  //   return () => {
  //     i18n.changeLanguage(lng);
  //   }
  // }

  return (
    <>
       <header>
         <div className="container">
         <div className="picture-and-div2">
         <nav>
         <div className="nav_in_div_divded1">
        <NavLink to='/kun.uz'>KUN.</NavLink><div className="uz">UZ</div>
         </div>
         <div className="nav_in_div_divded2">
        <ul>
        <NavLink to='./ozbekiston'><li>POLITICS</li></NavLink>
        <NavLink to='./dunyo'><li>SOCIETY</li></NavLink>
        <NavLink to='./jamiyat'><li>BUSINESS</li></NavLink>
        <NavLink to='./sport'><li>TECH</li></NavLink>
        <NavLink to='./madaniyat'><li>CULTURE</li></NavLink>
        <NavLink to='./biznes'><li>SPORT</li></NavLink>
        <NavLink to='./turizm'><li>TOURISM</li></NavLink>
        </ul>
        </div>
        <div className="nav_in_div_divded3">
          <select name="til" id="til">
            <option value="uzb">UZB</option>
            <option value="eng">ENG</option>
          </select>
        {/* <button onClick={changeLanguage('eng')}>ENG</button> */}
        </div>
        </nav>
        </div>
        </div>
        </header>


        {/* start now */}

        <div className="two-start-section">
        <div className="section_start">
        <div className="start-end_X1">
        <div className="one_picture_div_write_code">
        <div className="one_picture_div_two_divded1"><img src={img1}/></div>
        <div className="one_picture_div_two_divded2"><br />
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>14:48 / 19.12.2023</p><br />
        <h1>Uzbekistan plans to launch 24 major projects worth $12.7 billion in electrical, chemical and pharmaceutical industries next year
        On December 25, President Shavkat Mirziyoyev chaired a</h1><br />
        <h3>On December 25, President Shavkat Mirziyoyev chaired a meeting on the development of the electrical, chemical and pharmaceutical industries in Uzbekistan.</h3>
        </div>
        </div>
        <div className="long_div_divded">
        <div className="four_section1"><img src={img2}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>09:48 / 18.12.2023</p><br />
        <h3>Aziz Voitov suspected of embezzlement and abuse of official power</h3>
        <hr  className="hr"/>
        </div>
        <div className="four_section1"><img src={img3}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>10:24 / 15.12.2023</p><br />
        <h3>Saida Mirziyoyeva speaks about reform of the national alphabet</h3>
        <hr  className="hr1"/>
        </div>
        </div>

        <div className="long_div_divded1">
        <div className="four_section1"><img src={img2}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>15:53 / 13.12.2023</p><br />
        <h3>President Mirziyoyev instructs officials to localize production of medicines and electrical equipment</h3>
        <hr  className="hr2"/>
        </div>
        <div className="four_section1"><img src={img3}/></div>
        <div className="four_section2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>15:22 / 09.12.2023</p><br />
        <h3>Uzbek migrants illegally traveling to the US will be detained – Embassy</h3>
        <hr  className="hr2"/>
        </div>
        </div>

        <div className="picture_top_wride_text1">
        <div className="picture_top_wride_text2">
        <h4><box-icon name='circle' color='#0807a9' ></box-icon>Actual news</h4>
        <h5>All</h5>
        </div>
        <div className="picture_top_wride_text3">
        <div className="picture_and_text">
        <div className="picture_top_divded1"><img src={img4}/></div>
        <div className="picture_top_divded2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>21:19 / 15.12.2023</p>
        <h2>Draft law: Powers to conduct searches, wiretapping and seizure of property will be transferred from prosecutors to courts</h2>
        </div>
        </div>
        <div className="picture_and_text">
        <div className="picture_top_divded1"><img src={img5}/></div>
        <div className="picture_top_divded2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>20:43 / 07.12.2023</p>
        <h2>Gold bar prices on the rise in Uzbekistan</h2>
        </div>
        </div>
        <div className="picture_and_text">
        <div className="picture_top_divded1"><img src={img6}/></div>
        <div className="picture_top_divded2">
        <p><box-icon name='box' color='#8e8e8e' ></box-icon>12:18 / 21.11.2023</p>
        <h2>Central Bank opposes P2P control</h2>
        </div>
        </div>
        </div>
        </div>
        </div>

        {/* end left */}

        <div className="start-end_X2">
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
        </div>
        </div>
        <div className="salom"></div>
        
    </>
  );
}

export default Home;
{/* <h5>{t('six')}</h5><br />
<h1>{t('seven')}</h1><br /> */}
{/* <button class="button2" onClick={changeLanguage('eng')}>ENG</button>
<button class="button2" onClick={changeLanguage('uz')}>UZB</button>  */}