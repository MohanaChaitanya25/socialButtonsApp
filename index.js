const Button = (props) => {
  let { className, text } = props;
  return <button className={`btn ${className}`}>{text}</button>;
};

const element = (
  <div className="socialButtonsApp-bg-container">
    <h1 className="social-buttons-heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button className="like-btn" text="Like" />
      <Button className="comment-btn" text="Comment" />
      <Button className="share-btn" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
