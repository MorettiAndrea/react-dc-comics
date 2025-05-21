export default function Footer() {
  return (
    <footer>
      {" "}
      <div className="container footer">
        <div>
          <button>
            <a href="#">SIGN-UP NOW!</a>
          </button>
        </div>
        <nav>
          <ul className="d-flex">
            <li>
              <h4>FOLLOW US</h4>
            </li>
            <li>
              <img src="../src/assets/img/footer-facebook.png" alt="facebook" />
            </li>
            <li>
              <img src="../src/assets/img/footer-twitter.png" alt="twitter" />
            </li>
            <li>
              <img src="../src/assets/img/footer-youtube.png" alt="youtube" />
            </li>
            <li>
              <img
                src="../src/assets/img/footer-pinterest.png"
                alt="pintrest"
              />
            </li>
            <li>
              <img
                src="../src/assets/img/footer-periscope.png"
                alt="periscope"
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
