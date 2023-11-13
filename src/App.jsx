import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/Note/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [alertMsg, setAlertMsg] = useState(null); //alert messgae

  const showAlert = (message, type) => {
    setAlertMsg({
      message,
      type,
    });
    setTimeout(() => {
      setAlertMsg(null);
    }, 3000);
  };

  return (
    <BrowserRouter>
      <NoteState>
        <Navbar />
        <Alert alert={alertMsg} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
