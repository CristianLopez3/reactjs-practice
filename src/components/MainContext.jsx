import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MainContext = ({text, auth}) =>  {

    const {theme} = useContext(ThemeContext);

    return ( 
        <main className={theme}>
            {
                auth 
                ? <p> {text.mainHello} </p>
                : <p>{text.mainWelcome} </p>
            }
        </main>
     );
}

export default MainContext;