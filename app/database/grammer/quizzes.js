const quizzes = [
  {
    id: 1,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2], // IDs of questions in this quiz
  },
  {
    id: 2,
    topicId: 1,
    questions: [3, 4],
  },
  {
    id: 3,
    topicId: 2,
    questions: [5, 6],
  },
  {
    id: 4,
    topicId: 2,
    questions: [7, 8],
  },
];

// ================ Methods ========================

export const getQuizById = (quizId) => {
  return quizzes.find((quiz) => quiz.id === quizId);
};

export default {
  quizzes,
  getQuizById,
};
