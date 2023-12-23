import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        // console.log("uppercase was click")
        props.showAlert("Converted to UpperCase","success")
        setText(newText)
    }
    const handleloClick=()=>{
      let newText=text.toLowerCase()
      // console.log("uppercase was click")
        props.showAlert("Converted to LowerCase ","success")

      setText(newText)
    }

    
    const handleclearClick=()=>{
      let newText=""
      setText(newText)
      props.showAlert("Text Cleared","success")

   }
  
  const handlerandomClick=()=>{
    let newText="Wikipedia is a free-content online encyclopedia written and maintained by a community of volunteers, collectively known as Wikipedians, through open collaboration and using a wiki-based editing system…"
    setText(newText)
    props.showAlert("Random Text Generated","success")

    }

  const handlecopy=()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Text Copied to clipboard","success")

    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed","success")

    }
    

    const handleOnChange=(event)=>{
        // console.log("onchage")
        setText(event.target.value)
        // console.log("hello")
    }


    
  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==="dark"? "#00111a":"white",color:props.mode==="dark"?"white":"black"}} id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlerandomClick}>Random Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.replace(/\s/g, '').length} Characters </p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
