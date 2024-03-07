import { useContext, useEffect, useState } from "react";
import QuizContext from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
function Quiz() {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    getQuiz();
    setScore(0);
  }, []);
  const navigate = useNavigate();
  const {
    quiz,
    getQuiz,
    shuffle,
    options,
    setOptions,
    index,
    score,
    setScore,
    setIndex,
  } = useContext(QuizContext);

  return (
    <div>
      <div className="bg-gradient-to-b from-purple-400 to-violet-500  h-[calc(100vh-3rem)] flex flex-col justify-center items-center">
        <div className="md:mb-6 md:p-4 md:w-min w-[70%] mx-auto text-center mb-3 text-2xl items-center text-white font-Poppins font-semibold bg-blue-500 rounded-md">{`${score}/${quiz.length}`}</div>

        <div className="w-full sm:w-[80%] md:w-[50%] mx-auto py-4 bg-slate-300 rounded-md">
          <div className="py-4 px-2 text-xl font-Poppins text-gray-500 text-center font-semibold">
            {quiz?.length && quiz[index].question.text}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-4 py-3 px-2">
            {options?.length &&
              options.map((opt, i) => {
                return (
                  <button
                    onFocus={() => {
                      setSelected(opt);
                    }}
                    key={i}
                    className="bg-yellow-400 focus:bg-blue-400 text-white py-2 rounded-md cursor-pointer"
                  >
                    {opt}
                  </button>
                );
              })}
          </div>
        </div>
        <button
          onClick={() => {
            if (quiz[index].correctAnswer == selected) {
              setScore(score + 1);
            }
            if (index == 9) {
              navigate("/result");
              setIndex(0);
              return;
            }
            setIndex(index + 1);
            setOptions(
              shuffle([
                ...quiz[index + 1].incorrectAnswers,
                quiz[index + 1].correctAnswer,
              ])
            );
          }}
          className="mt-3 px-2 md:px-4 py-1 bg-orange-400 text-xl text-white font-Poppins rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
