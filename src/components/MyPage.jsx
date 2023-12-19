import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";


const initialTheme = "light";

const MyPage = () => {

    const [theme, setTheme] = useState(initialTheme);


    const handleTheme = (e) => {
        console.log(e.target);
        if(e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <div>
            <Header theme={theme} handleTheme={handleTheme} />
            <Main theme={theme} />
            <Footer theme={theme} />
        </div>
    )
}

export default MyPage;