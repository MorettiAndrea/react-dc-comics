// layout
import HeaderTop from "./components/layout/header-Top";
import MainComics from "./components/layout/Main-comics";
import MainIcons from "./components/layout/Main-icons";
import MainLinks from "./components/layout/Main-links";
import Footer from "./components/layout/footer";
import AlertMessage from "./components/layout/Alert-message";
import Jumbotron from "./components/layout/jumbotron";

// data

import comics from "./components/layout/data/comics";
export default function App() {
  return (
    <>
      <HeaderTop />
      <Jumbotron />
      <MainComics comics={comics} />
      <MainIcons />
      <MainLinks />
      <Footer />
      <AlertMessage />
    </>
  );
}
