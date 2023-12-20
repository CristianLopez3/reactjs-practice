import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const FooterContext = ({text}) =>  {
    const {theme} = useContext(ThemeContext);
    return ( 
        <footer className={theme}>
            <p>&copy; {text.footerTitle}</p>
        </footer>
     );
}

export default FooterContext;