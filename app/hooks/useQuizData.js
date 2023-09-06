import React, { useEffect, useState } from "react";

import cache from "../utility/cache";

function useQuizData() {
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  const fetchCompletdQuizzes = async () => {
    try {
      let list = await cache?.getData("completedQuizzes");
      if (list) {
        setCompletedQuizzes([...list]);
      }
    } catch (error) {
      console.log("Error retriving data from local storage", error);
    }
  };

  useEffect(() => {
    fetchCompletdQuizzes();
  }, []);

  return { completedQuizzes, fetchCompletdQuizzes };
}

export default useQuizData;
