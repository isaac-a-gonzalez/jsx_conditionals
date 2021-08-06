//function to find a random number
function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1> Your number is: {num}</h1>
        <p>{num === 7 ? "Congrats" : "Unlucky"}</p>
        {/* {num === 7 ? (
          <img
            src="https://media4.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=ecf05e47i7tyyq1vjz2ixr57usq2fc6vyrjgcye49ascufyi&rid=giphy.webp&ct=g"
            alt="man making 'yes' gesture"
          />
        ) : null} */}
        {num == 7 && (
          <img
            src="https://media4.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=ecf05e47i7tyyq1vjz2ixr57usq2fc6vyrjgcye49ascufyi&rid=giphy.webp&ct=g"
            alt="man making 'yes' gesture"
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
