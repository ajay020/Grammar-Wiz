import { useState, useEffect } from "react";

const useTimer = (initialTime, handleTimerComplete) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [progress, setProgress] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [shouldStart, setShouldStart] = useState(false);

  console.log("usetimer render");

  const startTimer = () => {
    setShouldStart(true);
    console.log("Timer started");
  };

  const resetTimer = () => {
    setProgress(0);
    setTimeLeft(initialTime);
    setTimerId(null);
    setShouldStart(true);
    console.log("Timer restarted");
  };

  const stopTimer = () => {
    setTimerId(null);
    setShouldStart(false);
    console.log("Timer stopped");
  };

  useEffect(() => {
    if (shouldStart) {
      if (timerId) {
        clearTimeout(timerId);
      }

      const id = setTimeout(() => {
        setProgress(((initialTime - timeLeft) / initialTime) * 100);

        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          clearTimeout(id);
          handleTimerComplete();
        }
      }, 400);

      setTimerId(id);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [timeLeft, initialTime, shouldStart]);

  return { timeLeft, progress, startTimer, resetTimer, stopTimer };
};

export default useTimer;
