import Apples from "./components/Apples";
import Pears from "./components/Pears";
import Bag from "./components/Bag";

function App() {
  return (
    <div className="App">
      <Apples />
      <Pears />
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />
    </div>
  );
}

export default App;
