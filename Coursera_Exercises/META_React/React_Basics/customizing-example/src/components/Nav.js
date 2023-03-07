function Nav(props) {
    console.log(props)
  return (
    <nav className="main-nav">
      <ul>
        <li>Home {props.name}</li>
        <li>Articles {props.color}</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
