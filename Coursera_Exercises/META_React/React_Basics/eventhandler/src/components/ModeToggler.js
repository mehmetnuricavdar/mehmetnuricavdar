function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;
  const styles = { background: "gray", border: "1px solid red" };

  const handleClick = () => {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true){
        console.log("Dark Mode is On")
    }else{
        console.log("Light Mode is On")
    }
  };

  return (
    <div style={styles}>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default ModeToggler;
