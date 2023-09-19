import difficulty1 from "./sentenceBuilder/difficulty1";
import difficulty2 from "./sentenceBuilder/difficulty2";
import difficulty3 from "./sentenceBuilder/difficulty3";

const sentenceList = {
  1: [...difficulty1],
  2: [...difficulty2],
  3: [...difficulty3],
};

//++++++++++++++++++++++++++++++++++++++++++++

const getQuizzesByDifficulty = (difficulty) => {
  return sentenceList[difficulty];
};

const getQuizById = (id) => {
  return sentenceList.find((sentence) => sentence.id === id);
};

export default { getQuizById, sentenceList, getQuizzesByDifficulty };
