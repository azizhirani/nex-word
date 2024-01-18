import React, { useState } from 'react'

const TextForm = (props) => {
  // text ="new text " //wrong way to change state
  // setText ("set text Here"); //correct way to change state

  //convert text in upper case using usestate --> store in newText   
  const handleUpclick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "success");

  }
  //convert text in lower case using usestate ->store in newText
  const handleLoclick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "success");
  }
  //Define Clear Function using useState -> store in newText
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  //Define Clear Function using useState -> store in newText
  const handleCapclick = () => {
    var newText = text
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
    props.showAlert("Text Capitalized", "success");
  }
  //Define Copy Function using navigator.clipboard.writeText()
    const copyToClipboard = () => {
      navigator.clipboard.writeText(text)
      // .then(() => {
      //   alert('Text Copied to clipboard');})
      props.showAlert("Text Copied to clipboard", "success");
    }
    //Define and remove extra spaces from text:
    const removeExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed", "success");
    }
//define onchange function when change happens
const handleOnchange = (event) => {
  setText(event.target.value);
}
const [text, setText] = useState("Enter text Here");

return (
  <div className='container' style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
    <h2>{props.heading}</h2>
  
    <div className="mb-3">
      {/* <label htmlFor="exampleFormControltext" className="form-label" >Example text</label> */}
      <textarea className="form-control rows=8" style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}   onChange={handleOnchange} id="exampleFormControltext" rows="3" value={text} ></textarea>
    </div >
    <button className="btn btn-secondary  m-1 w-10" onClick={handleUpclick} >Convert Uppercase</button> 
    <button className="btn btn-secondary   m-1 w-10" onClick={handleLoclick}>Convert Lowercase</button>
    <button className="btn btn-secondary    m-1 w-10" onClick={handleClearclick}>Clear Text !!</button>
    <button className="btn btn-secondary   m-1 w-10" onClick={handleCapclick}>Capitalize Text</button>
    <button className="btn btn-secondary   m-1 w-10" onClick={copyToClipboard}>Copy Text</button>
    <button className="btn btn-secondary   m-1 w-10" onClick={removeExtraSpaces}>Remove Extra Spaces</button>  
    <br />
    <div className='container' style={{backgroundColor: props.mode==='dark'?'#27282B':'white',color: props.mode==='dark'?'white':'black' }}>
      <h1> Your Text Summary: </h1>
      {/* <p> {text}</p> */}

      <p className='my-2'>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p className='my-2'>{0.008 * text.split(" ").length} Minutes to Read -  {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text to preview it!!"}</p>

    </div>


  </div>
);
};
export default TextForm;


