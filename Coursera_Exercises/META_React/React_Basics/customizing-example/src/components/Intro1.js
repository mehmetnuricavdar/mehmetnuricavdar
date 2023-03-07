function Intro1(props) {
  return (
    <div className="blog-post-intro">
      <h2>I've become a {props.title} developer!</h2>
      <div>
        <p>
          I've completed the {props.title} Basics course and I'm happy to announce that
          I'm now a Junior {props.title} Developer!
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default Intro1;