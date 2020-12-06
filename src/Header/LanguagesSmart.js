import React,{useState} from "react";
import Languages from "./Languages";

const LanguagesSmart = () => {
  const [getLang, setLang] = useState(0);
  return <>
    <Languages getter={getLang} setter={setLang}/>
  </>
};

export default LanguagesSmart;
