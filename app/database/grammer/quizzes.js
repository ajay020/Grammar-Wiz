const quizzes = [
  {
    id: 1,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // IDs of questions in this quiz
  },
  {
    id: 2,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], // IDs of questions in this quiz
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
