
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState("light");
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const changeBlack = ()=>{
    if(mode==="light"){
      showAlert("Please Enable The Dark Mode","warning")
    }
    else{
      document.body.style.backgroundColor = '#000000'
    }
  }
  const changeGrey = ()=>{
    if(mode==="light"){
      showAlert("Please Enable The Dark Mode","warning")
    }
    else{
      document.body.style.backgroundColor = '#2f3037'
    }
  }


  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#00111c";
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled","success")

    }
  }


  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}  changeBlack={changeBlack}  changeGrey={changeGrey} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}  />
    {/* <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}  />}></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
    </Routes>    */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
