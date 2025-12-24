import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
      if(text === text.toUpperCase()){
        props.showAlert("Text is already in Uppercase!", "warning");
        return;
      }
        console.log("UpperCase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
       const handleLowClick = ()=>{
        if(text === text.toLowerCase()){
        props.showAlert("Text is already in Lowercase!", "warning");
        return;
      }
        console.log("LowerCase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick =() =>{
      if(text === ""){
        props.showAlert("Text is already empty!", "warning");
        return;
      }
      let newText="";
      setText(newText);
      props.showAlert("Text Cleared!", "success");
    }

    const handleCopyClick =() =>{
      if(text === ""){
        props.showAlert("Nothing to copy, text is empty!", "warning");
        return;
      }
      let textElement = document.getElementById("myBox");
      textElement.select();
      navigator.clipboard.writeText(textElement.value);
      props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces =() =>{
      if(text === ""){
        props.showAlert("Text is already empty!", "warning");
        return;
      }
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange= (event)=>{
        // console.log("ONChange");
        setText(event.target.value);
    }

  return (
    <>
<div style={{color:props.mode==="light" ? "black" : "white"}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
  <label htmlFor="myBox" className="form-label" >write something</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light" ? "white" : "grey", color: props.mode==="light" ? "black" : "white"}} id="myBox" rows="5"></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-2" style={{backgroundColor: props.mode==="light"? "blue" : "skyblue"}} onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-2" style={{backgroundColor: props.mode==="light"? "blue" : "skyblue"}} onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-1 my-2" style={{backgroundColor: props.mode==="light"? "blue" : "skyblue"}} onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-2" style={{backgroundColor: props.mode==="light"? "blue" : "skyblue"}} onClick={handleCopyClick}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-2" style={{backgroundColor: props.mode==="light"? "blue" : "skyblue"}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==="light" ? "black" : "white"}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0 ? text : "Enter something in the text box to preview it here"}</p>
  </div>
</>
  )
}
