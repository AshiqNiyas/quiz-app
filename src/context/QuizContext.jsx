import { createContext, useState } from "react";
import axios from "axios";
const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState(undefined);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const getQuiz = async () => {
    const response = await axios.get("https://the-trivia-api.com/v2/questions");
    setQuiz(response.data);
    setOptions(
      shuffle([
        ...response.data[index].incorrectAnswers,
        response.data[index].correctAnswer,
      ])
    );
  };
  const db = {
    quiz,
    setQuiz,
    score,
    shuffle,
    setScore,
    category,
    setCategory,
    getQuiz,
    options,
    setOptions,
    index,
    setIndex,
  };
  return <QuizContext.Provider value={db}>{children}</QuizContext.Provider>;
}

export { Provider };

export default QuizContext;
