
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';

import React, { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const [redmode, setredMode] = useState(false);

  const [alert, setAlert] = useState(null);


  function toggleMode() {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {        ye humne dynamically title change karne k liay likha
      //   document.title = 'TextUtils is amazing';
      // }, 1000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils NOW!';
      // }, 3000);
    }
  }

  function toggleRedmode() {
    if (redmode === true) {
      setredMode(false);
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';


    }
    else {
      setredMode(true);
      document.body.style.backgroundColor = '#42b342 '; //'#bb8032';
      showAlert("Green mode has been enabled", "success");
      document.title = 'TextUtils - Green Mode';
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  return (

    <>
      <Router>

        <Navbar title="TextUtils" Aboutme="About" mode={mode} toggleRedmode={toggleRedmode} toggleMode={toggleMode} /> {/*Navbar ik Component ha or usma jo hum pas kar rahe wo props ha jo yahan aboutme="something"  ha or title b */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about">
              <About mode={mode} redmode={redmode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to Analyze below" toggleRedmode={toggleRedmode} toggleMode={toggleMode} redmode={redmode} showAlert={showAlert} mode={mode} />

              <Footer />
            </Route>
          </Switch>

        </div>
      </Router>

    </>
  );
}

export default App;
