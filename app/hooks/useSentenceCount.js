import { useState, useEffect } from "react";

import cache from "../utility/cache";

const useSentenceCounts = (level = 1) => {
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);

  const fetchSentenceCount = async () => {
    try {
      const data = await cache.getData("sentenceBuilder");
      if (data && data[level]) {
        setTotal(data[level].total || 0);
        setCompleted(data[level].compltedQuizIds.length || 0);
      }
    } catch (error) {
      console.error("Error fetching sentence count from cache: ", error);
    }
  };
  useEffect(() => {
    fetchSentenceCount();
  }, [level]);

  return { total, completed, fetchSentenceCount };
};

export default useSentenceCounts;
