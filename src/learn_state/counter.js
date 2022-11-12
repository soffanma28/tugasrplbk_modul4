import React, { useState } from "react";
import logo from "../logo.svg";
import "./counter.css";

import { Merk } from "../learn_context";
export const MerkContext = React.createContext("");

export default function Counter() {
  const [showImage, setShowImage] = useState(true);
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const hideImage = () => {
    setShowImage(!showImage);
  };

  const [inputValue, setInputValue] = useState('Text yang diubah');
  const inputHandler = (event) => {
      setInputValue(event.target.value)
  }

  const [inputContext, setInputContext] = useState("");

  return (
    <div className="Main">
      <p className="Text">Counter with useState</p>
      <p>KELOMPOK 29</p>
      <input type='text' onChange={inputHandler}/>
      <p className="Text">{ inputValue }</p>

      <MerkContext.Provider value={{ setInputContext }}>
        <p>{inputContext}</p>
        <Merk/>
      </MerkContext.Provider>
      <div className="ViewImage">
        <div className="ViewImage1">
          <img
            className="App-logo"
            style={{ display: showImage === true ? "flex" : "none" }}
            src={logo}
            alt="logo"
          />
        </div>
        <button className="Button" onClick={hideImage}>
          {showImage !== true ? "show" : "hide"}
        </button>
      </div>
      <p className="Text">{count}</p>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={countUp}>
            Up
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={countDown}>
            Down
          </button>
        </div>
      </div>
    </div>
  );
}
