

const Footer = ({theme, text}) =>  {
    return ( 
        <footer className={theme}>
            <p>&copy; {text.footerTitle}</p>
        </footer>
     );
}

export default Footer;