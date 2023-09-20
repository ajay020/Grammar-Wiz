import { useState, useEffect } from "react";

import gameData from "../database/gameData";
import cache from "../utility/cache";

const useGetSentenceQuizzes = (level = 1) => {
  //   console.log("useGetSentenceQuizzes render");
  const [sentenceQuizzes, setsentenceQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompletdSenteceQuizIds();
  }, [level]);

  const filterQuizzes = (completedSentenceIds) => {
    // fetch quizzes by difficulty
    const quizList = gameData?.getQuizzesByDifficulty(level);

    const list = quizList?.filter((quiz) => {
      if (completedSentenceIds?.indexOf(quiz.id) < 0) {
        return quiz;
      }
    });

    return list;
  };

  const fetchCompletdSenteceQuizIds = async () => {
    try {
      let savedData = await cache?.getData("sentenceBuilder");
      const ids = savedData[level].compltedQuizIds;
      let filteredList = filterQuizzes(ids);

      setsentenceQuizzes([...filteredList]);
      setLoading(false);
    } catch (error) {
      console.log("Error retriving sentece Ids from local storage", error);
      setLoading(false);
    }
  };

  return { sentenceQuizzes, loading };
};

export default useGetSentenceQuizzes;
