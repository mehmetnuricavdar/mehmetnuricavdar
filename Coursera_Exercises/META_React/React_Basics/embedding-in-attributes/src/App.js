import tvbank from "./tvbank.png";

function Logo(props) {
  const tvPic = <img src={tvbank} />;
  return tvPic;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Logo />
    </div>
  );
}

export default App;
