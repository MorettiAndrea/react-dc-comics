export default function HeaderTop() {
  return (
    <div className="container d-flex">
      <div>
        <img
          src="src/assets/img/favicon.ico"
          className="favicon"
          alt="dc favicon"
        />
      </div>
      <nav className="header-navbar">
        <ul>
          <li>
            <a href="#">CHARACTERS</a>
            <div className="selector"></div>
          </li>
          <li>
            <a href="#">COMICS</a>
          </li>
          <li>
            <a href="#">MOVIES</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">GAMES</a>
          </li>
          <li>
            <a href="#">COLLECTIBLES</a>
          </li>
          <li>
            <a href="#">VIDEOS</a>
          </li>
          <li>
            <a href="#">FANS</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
