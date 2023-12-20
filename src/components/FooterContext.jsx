import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";


const FooterContext = () =>  {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);
    return ( 
        <footer className={theme}>
            <p>&copy; {texts.footerTitle}</p>
        </footer>
     );
}

export default FooterContext;