import React from "react";
import "./six_div_open1.css";
import "./six_div_open1.-responsive.css";
import 'boxicons';
import img1 from  "./img/e33c85d9c159c311c3def5fce51b97d2.jpg"
import img2 from "./img/info_section_logo.d752b88.png"
// import img3 from"./img/abuAliIbnSino.e0a6744.jpg"
// import img4 from "./img/alisherNavoiy.98744c6.jpg"
// import img5 from "./img/abuRayhonBeruniy.161723f.jpg"


function Six_div_open1(){
    return(
        <div className="six_div_open1">

          {/* one page code write start   */}
        <div className="container">
        <nav>
        <div className="smal_picture1">
        <div className="smal_picture2">
        <img src={img1}/>
        </div>
        <h1>stipendiya.edu.uz</h1>
        </div>
        <button>ONE ID orqali kirish</button>
        </nav>
        <div className="center_message_and_picture">
        <div className="message_picture1">
        
        {/* keyfrems */}
        <div class="tort_bolish1">
        <div class="animated-text">
        <h3>Navoiy</h3>
        <h3>Ulug'bek</h3>
        <h3>Islom Karimov</h3>
        </div>
        </div><br />
        {/* keyfrems */}
        <p>Talabalar va doktorantlar uchun davlat stipendiyalariga onlayn ariza yuborish portali</p><br /><br />
        <button>Ariza topshirish <box-icon name='right-arrow-alt' color='#ffffff' ></box-icon></button><br /><br /><br />
        <div className="for_number">1.434 <br />Jamiarizalar soni</div>
        </div>
        <div className="message_picture2"><img src={img2}/></div>
        </div>

          {/* one page code write starend   */}

          {/* two page code write start */}

        {/* <div className="put_people">
        <div className="first_message1">
        <h2>Nomdor davlat stipendiyalari</h2><br />
        <p>O‘zbekiston Respublikasi davlat oliy ta’lim muassasalarida o‘qiyotgan talabalarga tayinlanadi.</p>
        </div>
        <div className="first_message2">
        <div className="historiy_picture_put">
        <div className="bottom_picture1">
        <div className="three_picture_put"><img src={img3}/></div>
        </div>
        <div className="bottom_picture2"><br />
        <h1>Abu Rayhon Beruniy</h1><br />
        <p>(4-sentabr, 973, — 13-dekabr, 1048,) — Islom oltin davrining zabardast Xorazmlik qomusiy allomalaridan biri.</p>
        </div>
        </div>
        <div className="historiy_picture_put">
        <div className="bottom_picture1">
        <div className="three_picture_put"><img src={img4}/></div>
        </div>
        <div className="bottom_picture2"><br />
        <h1>Alisher Navoiy</h1><br />
        <p>(9-fevral 1441-yil — 3-yanvar 1501-yil) — ulugʻ oʻzbek va boshqa turkiy xalqlarning shoiri, mutafakkiri va davlat arbobi....</p>
        </div>
        </div>
        <div className="historiy_picture_put">
        <div className="bottom_picture1">
        <div className="three_picture_put"><img src={img5}/></div>
        </div>
        <div className="bottom_picture2"><br />
        <h1>Abu Ali Ibn Sino</h1><br />
        <p>(18-iyun 980-yil — 16-avgust 1037-yil) — oʻrta osiyolik buyuk qomusiy olim, tabib va faylasuf.</p>
        </div>
        </div>
        </div>
        </div>
        two page code write   */}



        </div>
        </div>
    )
}
export default Six_div_open1;