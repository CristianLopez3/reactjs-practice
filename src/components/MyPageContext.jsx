import { useState } from "react";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";


const initialLanguage = "en";
const translations = {
  es: {
    headerTitle: "Mi aplicacion con Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Negro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenid@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
  },
  en: {
    headerTitle: "My application with context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Wellcome Guest",
    mainHello: "Hi User",
    mainContent: "My main content",
    footerTitle: "My foot page",
  },
};
const initialAuth = null;

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);
  // console.log(texts);

  const handleLanguage = (e) => {
    // console.log(e.target);
    if (e.target.value === "en") {
      setLanguage("en");
      setTexts(translations.en);
    } else {
      setLanguage("es");
      setTexts(translations.es);
    }
  };

  const handleAuth = (e) => {
    if(auth){
        setAuth(null);
    } else {
        setAuth(true);  
    }
  };

  return (
    <div className="my-page">
      <ThemeProvider>
        
        <HeaderContext
          text={texts}
          handleLanguage={handleLanguage}
          auth={auth}
          handleAuth={handleAuth}
        />
        <MainContext  text={texts} auth={auth} />
        <FooterContext  text={texts} />

      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
