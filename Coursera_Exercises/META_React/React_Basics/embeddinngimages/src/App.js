import ReactPlayer from "react-player/youtube";
import LogoImage from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img src={LogoImage} width= '200' alt="logo pic" />
      <MyVideo/>
    </div>
  );
}


const MyVideo = () => {
  return <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing={false} volume={0.3} />;
};

export default App;
