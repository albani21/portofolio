import "./Nav.css";

function Nav() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap"
        rel="stylesheet"></link>
      <nav>
        <h2 className="logo">Alban Misimi</h2>
        <ul>
          <li className="nav-links">
            <a href="#">Projects</a>
          </li>
          <li className="nav-links">
            <a href="#">About</a>
          </li>
          <li className="nav-links">
            <a href="#">Contatcs</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
