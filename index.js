//function to find a random number
function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    return <h1>Your number is {getNum()}</h1>;
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
