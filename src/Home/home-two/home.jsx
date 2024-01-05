import React from "react";
import "./home.css"
import "./home-responsive.css"
import 'boxicons';
import img1 from "./img/xr2TgvLR7AfSIC97qHqd6vxDSx6UGF_H_medium.jpg"
import img2 from"./img/xr2TgvLR7AfSIC97qHqd6vxDSx6UGF_H_medium.jpg"
import img3 from "./img/p7_gmN5Bb6ZK_T_oyUqUhVHsFrvwvf2-_medium.jpg"
import img4 from "./img/map.jpg"
import img5 from"./img/girl.jpg"
import img6 from "./img/building.jpg"
import Nav from "../Navbar/Nav";


function Home() {


  return (
    <>

    {/* HEADER */}

       <header>
     <Nav/>
        </header>

        {/* HEADER  */}

        {/* container */}
        <div className="container">
        <div className="hold">
        <div className="container_center1">
        <div className="put">
        <div className="pivture_next_div1"><img src={img1}/></div>
        <div className="pivture_next_div2"><br />
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4><br />
        <h2>Uzbekistan plans to launch 24 major projects worth $12.7 billion in electrical, chemical and pharmaceutical industries next year</h2><br />
        <p>On December 25, President Shavkat Mirziyoyev chaired a meeting on the development of the electrical, chemical and pharmaceutical industries in Uzbekistan.</p>
        </div>
        </div>
        <div className="four_divded">
        <div className="four_divded1">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img2}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Aziz Voitov suspected of embezzlement and abuse of official power </h3><br /><br />
        <hr className="hr"/>
        </div>
        </div>
        <div className="smal_picture_and_div2">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img3}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Saida Mirziyoyeva speaks about reform of the national alphabet</h3><br /><br /><br />
        <hr className="hr"/>
        
        </div>
        </div>
        </div>
        </div>
        <div className="four_divded2">
        <div className="four_divded1">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img2}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Aziz Voitov suspected of embezzlement and abuse of official power </h3><br /><br />
        <hr className="hr"/>
        </div>
        </div>
        <div className="smal_picture_and_div2">
        <div className="smal_picture_and_div1">
        <div className="picture_img1"><img src={img3}/></div>
        <div className="picture_img2">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Saida Mirziyoyeva speaks about reform of the national alphabet</h3><br /><br /><br />
        <hr className="hr"/>
        </div>
        </div>
        </div>
        </div>
        <div className="picture_top_message">
        <div className="left_right_message1">
        <h1><box-icon name='disc' type='solid' color='#0a0b56' ></box-icon>Editor's Choice</h1>
        <h1>All</h1>
        </div>
        <div className="left_right_message2">
        <div className="three_picture">
        <div className="one_picture"><img src={img4}/></div>
        <div className="one_message">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Draft law: Powers to conduct searches, wiretapping and seizure of property will be transferred from prosecutors to courts</h3>
        </div>
        </div>
        <div className="three_picture">
        <div className="one_picture"><img src={img5}/></div>
        <div className="one_message">
        <h4><box-icon name='box' color='#737373' ></box-icon>15:30 / 25.12.2023</h4>
        <h3>Gold bar prices on the rise in Uzbekistan</h3>
        </div>
        </div>
        <div className="three_picture">
        <div className="one_picture"><img src={img6}/></div>       
        <div className="one_message">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30 / 25.12.2023</h4>
        <h3>Central Bank opposes P2P control</h3>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="container_center2">
        <div className="left_end_divs1">
        <h1><box-icon name='disc' type='solid' color='#0a0b56' ></box-icon>Latest news</h1><br />
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs">
        <h4><box-icon name='box' color='#737373'></box-icon>15:30</h4>
        <h3>Uzbekistan may stop producing AI-80 gasoline by 2026</h3>
        <hr className="hr"/>
        </div>
        <div className="left_end_divs2">
        <button><h3>More News</h3> <box-icon name='right-arrow-alt'></box-icon></button>
        </div>
        </div>
        </div>
        </div>
        {/* container */}
    </>
  );
}

export default Home;
{/* <h5>{t('six')}</h5><br />
<h1>{t('seven')}</h1><br /> */}
{/* <button class="button2" onClick={changeLanguage('eng')}>ENG</button>
<button class="button2" onClick={changeLanguage('uz')}>UZB</button>  */}
