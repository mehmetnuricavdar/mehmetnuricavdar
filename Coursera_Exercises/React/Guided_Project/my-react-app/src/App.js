import React, {useState} from "react";

function App(){
  const [name, setName] = useState("");

  return(
    <div>
      <button onClick={()=> setName("Hello")}>Set Name</button>
      <h1>{name}</h1>
      <MyComponents name={name}/>
    </div>
  )
}

function MyComponents(props) {
  return <h2>{props.name}</h2>
  
}

export default App;