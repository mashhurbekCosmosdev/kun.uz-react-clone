import i18n from "i18next";
import { initReactI18next } from "react-i18next";
 import trassEng from './components/en.json'
 import trassUz from './components/uz.json'

 const resources = {
    en:{
     translation: trassEng
    },
    uz:{
     translation:trassUz
    }
   }
   


i18n 
 .use(initReactI18next)
 .init({
  resources,
    lng: "en",
    fallbackLng: "en",

   interpolation:{
    escapeValue: false
  }
 });

 export default i18n;
