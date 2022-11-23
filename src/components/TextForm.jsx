import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    setText("");
  };
  const handleCopyText = () => {
    let text = document.getElementById("TextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const handleChangeMode = () => {
    if (myStyle.backgroundColor === "white") {
      setMyStyle({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div className="mb-3" style={myStyle}>
      <h1>{props.heading}</h1>
      <div className="container">
        <textarea
          id="TextArea"
          rows="8"
          className="form-control"
          value={text}
          onChange={handleChange}
          style={myStyle}
        ></textarea>
      </div>
      <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
        To Uppercase
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
        To Lowercase
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleClearText}>
        Clear
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleCopyText}>
        Copy Text
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleChangeMode}>
        {btnText}
      </button>
      <div className="container">
        <h2>Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Charactares
        </p>
        <p>{0.008 * text.length} Minutes Read</p>
        <h3>{text.length>0?text:"Enter text above to preview it"}</h3>
      </div>
    </div>
  );
}
