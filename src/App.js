import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Chathome from "./pages/Chathome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/chat-home/:receiverId" element={<Chathome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
