import { useEffect, useState } from "react";

import cache from "../utility/cache";

function useQuizData() {
  //   console.log("useQuizData render");
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCompletdQuizzes = async () => {
    try {
      setLoading(true);
      let list = await cache?.getData("completedQuizzes");
      if (list) {
        setCompletedQuizzes([...list]);
      }
    } catch (error) {
      console.log("Error retriving data from local storage", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompletdQuizzes();
  }, []);

  return {
    completedQuizzes,
    fetchCompletdQuizzes,
    loading,
  };
}

export default useQuizData;
