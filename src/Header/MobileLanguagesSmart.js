import React,{useState} from 'react';
import MobileLanguages from "./MobileLanguages";


const MobileLanguagesSmart = () => {
  const [lang, setLang] = useState(0);

  return <>
    <MobileLanguages getter={lang} setter={setLang} />
  </>
};

export default MobileLanguagesSmart;
