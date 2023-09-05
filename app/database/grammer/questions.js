import { presentSimple1 } from "./tense/presentSimple1";
import presentSimple2 from "./tense/presentSimple2";

const questions = [
  // ================ present simple quiz 1 ==========================
  ...presentSimple1,
  // ================ present simple quiz 2 ==========================
  ...presentSimple2,
];

// ================ Methods ========================

export const getQuestionById = (id) => {
  return questions.find((question) => question.id === id);
};

export default {
  questions,
  getQuestionById,
};
