import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { validateUser } from "./actions";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateUser());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
