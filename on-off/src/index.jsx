import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

function Room() {
  const [data, setData] = useState(0);

  const [isLit, setLit] = useState(true);
  const brightness = isLit ? "lit" : "dark";
  return (
    <div className={`room ${brightness}`}><center>
     <b>{isLit ? "Lite" : "Dark"}</b>
      <button className="change"
        onClick={() => {
          setLit(!isLit);
        }}
      >
        Change
      </button>
      <br />
      <br />
      <br />
      {data}
      <button className="add"
        onClick= {() => {
          setData(data + 1);
        }}
      >
        Add
      </button>
      <button className="sub"
        onClick={() => {
          setData(data - 1);
        }}
      >
        Minus
      </button></center>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector("#root"));
