import React from "react";
import ReactDOM from "react-dom";

//Inline styles, example #1
// ReactDOM.render(<h1 style={{color: "red"}}>Hello World!</h1>, document.getElementById("root"));

//Inline styles, example #2 - directly injecting as a JS object

const customStyle = {
  color: "red",
  fontSize: "20px"
};

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

//Note that while what we're writing looks like HTML, it's not, so we can't write like HTML
//We're writing JavaScript, so we must use JS conventions like camel case, JS objects, etc.
