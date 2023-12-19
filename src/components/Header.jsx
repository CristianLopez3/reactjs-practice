const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>
        My app <b> without Context </b>{" "}
      </h2>
      <h3>My header</h3>
      <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">Light</label>

      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">Dark</label>

      <button>LOGIN</button>
    </header>
  );
};

export default Header;
