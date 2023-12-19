import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "en";
const translations = {
  es: {
    headerTitle: "Mi aplicacion sin Context API",
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
    headerTitle: "My application without context API",
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

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);
  // console.log(texts);

  const handleTheme = (e) => {
    // console.log(e.target);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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
      <Header
        theme={theme}
        handleTheme={handleTheme}
        text={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} text={texts} auth={auth} />
      <Footer theme={theme} text={texts} />
    </div>
  );
};

export default MyPage;
