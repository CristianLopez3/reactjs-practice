import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  es: {
    headerTitle: "Mi aplicacion con Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Negro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenid@ Invitad@",
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

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations.es);

  const handleLanguage = (e) => {
    if (e.target.value === "en") {
      setLanguage("en");
      setTexts(translations.en);
    } else {
      setLanguage("es");
      setTexts(translations.es);
    }
  };
  const data = { handleLanguage, texts}
    
  return (
    <LanguageContext.Provider value={data}>
        {children}
    </LanguageContext.Provider>
  )

}

export { LanguageProvider };
export default LanguageContext;