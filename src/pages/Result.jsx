import { useContext } from "react";
import QuizContext from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
function Result() {
  const navigate = useNavigate();
  const { score, quiz, setScore, setOptions, setCategory } =
    useContext(QuizContext);
  return (
    <div className="bg-gradient-to-b from-purple-400 to-violet-500  h-[calc(100vh-3rem)] flex flex-col justify-center items-center">
      <div className="w-full sm:w-[80%] md:w-[50%] mx-auto text-center py-4 bg-slate-300  rounded-md">
        <h4 className="p-2 rounded-md text-xl font-semibold text-gray-500">{`you scored ${score}/${quiz.length}`}</h4>
      </div>
      <button
        className="text-white text-xl font-semibold mt-3 bg-green-500 px-3 py-2 rounded-md font-Poppins"
        onClick={() => {
          setScore(0);
          setOptions([]);
          setCategory(undefined);
          navigate("/quiz");
        }}
      >
        Start again
      </button>
    </div>
  );
}

export default Result;
