import './App.css'; 
import Alert from './components/Alert';
// import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() { 
  // default theme: light
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#393c3fff'; // dark mode background
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="ReactFirst" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <div className='container my-2'>
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Form Heading="Enter Your Details" showAlert={showAlert} />} />
          </Routes> */}
          <Form Heading="Enter Your Details" showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
