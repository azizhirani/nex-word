import React ,{useState} from 'react'


export default function TextForm(props) {
    
    // text ="new text " //wrong way to change state
    // setText ("set text Here"); //correct way to change state

    //convert text in upper case using usestate --> store in newText   
    const handleUpclick =()=>{
        console.log("Uppercase was Clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);

    }
    //convert text in lower case using usestate ->store in newText
    const handleLoclick =()=>{
        console.log("Uppercase was Clicked" +text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    //define onchange function when change happens
    const handleOnchange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");    
  return (
    <div className='container'>
        <h2>{props.heading}</h2>
    <div className="mb-3">
  {/* <label for="exampleFormControlMail" className="form-label">Email address</label> */}
  <input type="email" className="form-control" id="exampleFormControlMail" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  {/* <label for="exampleFormControltext" className="form-label" >Example text</label> */}
  <textarea className="form-control" onChange={handleOnchange} id="exampleFormControltext" rows="3" value={text} ></textarea>
</div >
<button className="btn btn-secondary m-1 w-10" onClick={handleUpclick} >Convert Uppercase</button>
<button className="btn btn-success m-1 w-10" onClick={handleLoclick} >Convert Lowercase</button>
<br />
<div className='container'>
    <h1> Your Text Summary: </h1>
    {/* <p> {text}</p> */}

    <p className='my-2'>{text.split(" ").length} words and {text.length} characters</p>
    <p className='my-2'>{0.008*text.split(" ").length} Minutes to Read -  {text.length} characters</p>
    <h3>Preview</h3>
    <p>{text}</p>

    </div>


</div>
  )
}
