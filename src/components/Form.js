import React, { useState } from 'react';

export default function Form(props) {
  const [text, textsetup] = useState("");
  const [findWord, setFindword] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  const Handlechange = (event) => {
    textsetup(event.target.value);
  };

  const upperCase = () => {
    let newtext = text.toUpperCase();
    textsetup(newtext);
    props.showAlert("Converted to UPPERCASE", "success");
  };

  const lowerCase = () => {
    let newtext = text.toLowerCase();
    textsetup(newtext);
    props.showAlert("Converted to lowercase", "success");
  };

  const replaceText = () => {
    if (findWord.trim() === "") {
      props.showAlert("Enter a word to find!", "warning");
      return;
    }
    let newtext = text.replace(new RegExp(findWord, "g"), replaceWord);
    textsetup(newtext);
    props.showAlert(`All occurrences of "${findWord}" replaced with "${replaceWord}"`, "info");
  };

  const Handlefind = (event) => {
    setFindword(event.target.value);
  };

  const Handlereplace = (event) => {
    setReplaceWord(event.target.value);
  };

  const copyText = () => {
    let textElement = document.getElementById("box");
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const clearText = () => {
    textsetup("");
    setFindword("");
    setReplaceWord("");
    props.showAlert("Text cleared", "danger");
  };

  // Word count safe calculation
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div>
        <h3 className='my-4'>{props.Heading}</h3>
        <div className="mb-3">
          <label className="form-label me-2">Replace Text:</label>
          <input
            placeholder="find word"
            className="me-2"
            type="text"
            value={findWord}
            onChange={Handlefind}
          />
          <input
            placeholder="replace word"
            type="text"
            value={replaceWord}
            onChange={Handlereplace}
          />
          <textarea
            value={text}
            className="form-control mt-2"
            id="box"
            onChange={Handlechange}
            rows="8"
          ></textarea>
        </div>
        <div>
          <button onClick={upperCase} className="btn btn-primary me-2">UPPERCASE</button>
          <button onClick={lowerCase} className="btn btn-info me-2">lowercase</button>
          <button onClick={replaceText} className="btn btn-dark me-2">Replace</button>
          <button onClick={copyText} className="btn btn-success me-2">Copy</button>
          <button onClick={clearText} className="btn btn-danger me-2">Clear</button>
        </div>
      </div>

      <div className="container mt-3">
        <h3>Text Summary</h3>
        <h4>{wordCount} Words & {text.length} Characters</h4>
        <h4>{0.008 * wordCount} Minutes To Read</h4>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something above to preview it here..."}</p>
      </div>
    </>
  );
}
