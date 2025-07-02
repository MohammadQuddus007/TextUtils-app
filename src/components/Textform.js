import React, {useState} from "react";
// import propTypes from "prop-types";

export default function Textform(props){
      const handleUpclick = () =>{
                console.log("Uppercase was clicked"+text);
               let newText = text.toUpperCase();
               setText(newText)
            }
      const handleULoclick = (handleULoclick) =>{
                console.log("Uppercase was clicked"+text);
               let newText = text.toLowerCase();
               setText(newText)
            }
       const handleonchange = (event) =>{
                console.log("On change")
                setText(event.target.value)
       }
       const[text,setText] = useState('');
    return(
        <>
        <div>
          
            <h1>{props.heading}</h1>
             <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpclick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleULoclick}>convert to lowercase</button>
        </div>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length}word and {text.length} charaters</p>
        <p>{0.008*text.split(" ").length}Minutes read </p>
        <h2>Preview</h2>
        {text}
        </>
    )
}
