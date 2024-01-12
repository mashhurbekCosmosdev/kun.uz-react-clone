import React from "react";
import "./home.css"
import "./home-responsive.css"
import Six_div_open1 from "../six_div_open1/six_div_open1";
import Six_div_open2 from "../six_div_open2/six_div_open2";


function Home() {


  return (
    <div className="started">
     
    <div className="six_div_open1">{<Six_div_open1/>}</div>
    <div className="six_div_open2">{<Six_div_open2/>}</div>
    <div className="six_div_open3"></div>
    <div className="six_div_open4"></div>
    <div className="six_div_open5"></div>
    <div className="six_div_open6"></div>
    </div>
  );
}

export default Home;
{/* <h5>{t('six')}</h5><br />
<h1>{t('seven')}</h1><br /> */}
{/* <button class="button2" onClick={changeLanguage('eng')}>ENG</button>
<button class="button2" onClick={changeLanguage('uz')}>UZB</button>  */}
