import "./App.css";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Welcome/Welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/bem-vindo" Component={Welcome} />
      </Routes>
    </main>
  );
}

export default App;