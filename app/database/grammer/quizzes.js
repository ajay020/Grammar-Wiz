const quizzes = [
  // Topic present simple
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

  {
    id: 3,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], // IDs of questions in this quiz
  },
  {
    id: 4,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], // IDs of questions in this quiz
  },
  //============= Topic present simple ====================
  {
    id: 5,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50], // IDs of questions in this quiz
  },
  {
    id: 6,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60], // IDs of questions in this quiz
  },
  {
    id: 7,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70], // IDs of questions in this quiz
  },
  {
    id: 8,
    topicId: 2, // ID of the topic this quiz belongs to
    questions: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80], // IDs of questions in this quiz
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
