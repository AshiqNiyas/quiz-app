import { Link } from "react-router-dom";
import { useContext } from "react";
import QuizContext from "../context/QuizContext";
import axios from "axios";
function Navbar() {
  const categories = ["music", "science", "history"];
  const {
    setQuiz,
    setOptions,
    setScore,
    shuffle,
    index,
    setIndex,
    category,
    setCategory,
  } = useContext(QuizContext);
  const getQuiz = async (value) => {
    const response = await axios.get(
      `https://the-trivia-api.com/v2/questions?categories=${value}`
    );
    setQuiz(response.data);
    setOptions(
      shuffle([
        ...response.data[index].incorrectAnswers,
        response.data[index].correctAnswer,
      ])
    );
  };
  return (
    <div className="bg-gradient-to-r h-12 text-2xl font-Poppins flex justify-between text-white font-bold p-2 from-purple-400 to-violet-500">
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <ul className="text-xl flex gap-3">
        {categories.map((cat, i) => {
          return (
            <button
              className={
                category == cat ? "bg-yellow-400 px-1 rounded-md" : null
              }
              key={i}
              onFocus={() => setCategory(cat)}
              onClick={() => {
                getQuiz(cat);
                setIndex(0);
                setScore(0);
              }}
            >
              {cat}
            </button>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
