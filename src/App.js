
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }
    , 2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Work - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Work - Light Mode";
    }
  }
  return (
<>
<Router>
<Navbar title="Text Work" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>} />
    </Routes>
</div>
</Router>
</>
  );
}

export default App;
