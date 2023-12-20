import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";


const HeaderContext = () => {

  const {theme, handleTheme} = useContext(ThemeContext);
  const {texts, handleLanguage} = useContext(LanguageContext);
  const {  auth, handleAuth } = useContext(AuthContext);
  
  return (
    <header className={theme}>
      <h2>
        {texts.headerTitle}
      </h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <input
        type="radio"
        name="theme"
        id="lightContext"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="lightContext">{texts.headerLight}</label>

      <input
        type="radio"
        name="theme"
        id="darkContext"
        onClick={handleTheme}
        value="dark"
      />
      
      <label htmlFor="darkContext">{texts.headerDark}</label>

      <button onClick={handleAuth} >{auth ?  texts.buttonLogout : texts.buttonLogin }</button>
    </header>
  );
};

export default HeaderContext;
