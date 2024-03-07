import { useNavigate } from "react-router-dom";
import QuizContext from "../context/QuizContext";
import { useContext } from "react";
function Home() {
  const { setCategory } = useContext(QuizContext);
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-purple-400 to-violet-500  h-[calc(100vh-3rem)] flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <h3 className="font-Poppins px-3 py-2 rounded-xl  text-2xl text-white">
          Welcome to Quizzie
        </h3>
        <button
          onClick={() => {
            setCategory(undefined);
            navigate("/quiz");
          }}
          className="bg-yellow-400 px-2 py-1 md:px-3 md:py-2 text-xl text-white rounded-xl"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;
