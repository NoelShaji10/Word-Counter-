import React, {useState} from 'react'


export default function TextForm(props){
    const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor: 'white'
    })
    const[btnText,setBtnText]=useState("Enable Dark Mode");
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    
    const handleClearClick=()=>{
        let newText="";
        setText(newText)
    }

    const handleColorClick=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor: 'black'  
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'  
            })
            setBtnText("Enable Dark Mode")
        }
     }
    
    // const handleCopyClick=()=>{
    //     if(textRef.current){
    //         textRef.current.select();
    //         document.execCommand("copy");
    //         alert("Text Copied To Clipboard" + text);
    //     }
    // }
    const handleOnChange=(event)=>{
        setText(event.target.value)

    }
    const [text,setText]=useState("");
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={myStyle}></textarea>
            </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleColorClick}>{btnText}</button>

        {/* <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button> */}
                
        </div>
        <div className="container my-3">
            <h1>Your Summary</h1>
            <p>{text.split(" ").length} Word and {text.length} Letters</p>
            <h2>Review</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
