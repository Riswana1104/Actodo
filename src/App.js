
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";


function App() {

  const [users, setusers] = useState(
    [
      {
        username: "ris",
        password: "123"

      },
      {
        username: "taara",
        password: "1996"
      }
    ]
  )


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers} />} />
          <Route path="/Signup" element={<Signup users={users} setusers={setusers} />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
