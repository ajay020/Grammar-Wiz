import { useState, useEffect } from "react";

import gameData from "../database/gameData";
import cache from "../utility/cache";

const useGetSentenceQuizzes = (level = 1) => {
  //   console.log("useGetSentenceQuizzes render");
  const [completedSentenceIds, setCompleteSenteceIds] = useState([]);
  const [sentenceQuizzes, setsentenceQuizzes] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // fetch quizzes by difficulty
  const quizList = gameData.getQuizzesByDifficulty(level);

  const filterQuizzes = () => {
    const list = quizList.filter((quiz) => {
      if (completedSentenceIds.indexOf(quiz.id) < 0) {
        return quiz;
      }
    });
    setsentenceQuizzes([...list]);
  };

  useEffect(() => {
    fetchCompletdSenteceQuizIds();
  }, [level]);

  useEffect(() => {
    filterQuizzes();
  }, [completedSentenceIds]);

  const fetchCompletdSenteceQuizIds = async () => {
    try {
      let savedSentenceBuilderData = await cache?.getData("sentenceBuilder");
      const ids = savedSentenceBuilderData[level].compltedQuizIds;
      const totalQuizzes = savedSentenceBuilderData[level].total;

      setCompleteSenteceIds([...ids]);
      setIsQuizCompleted(ids.length === totalQuizzes);
    } catch (error) {
      console.log("Error retriving sentece Ids from local storage", error);
    }
  };

  return { sentenceQuizzes, isQuizCompleted };
};

export default useGetSentenceQuizzes;
