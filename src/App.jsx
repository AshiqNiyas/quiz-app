import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
