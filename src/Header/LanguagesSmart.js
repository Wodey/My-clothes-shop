import React, {useState} from 'react';

const LanguageSmart = ({Component})  => {
  const [lang, setLang] = useState(0);
  return (
      <>
        {
          <Component getter={lang} setter={setLang} />
        }
      </>
    )
};

export default LanguageSmart;
