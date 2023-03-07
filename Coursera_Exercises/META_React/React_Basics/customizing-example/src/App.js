import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="root">
      <Nav name='Mehmet' color='blue'/>
      <Promo />
      <Intro1 title='React'/>
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;
