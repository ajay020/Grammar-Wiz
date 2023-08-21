const topics = [
  {
    id: 1,
    title: "Tense",
    quizzes: [1, 2, 3, 4], // IDs of quizzes belonging to this topic
  },
  {
    id: 2,
    title: "Model",
    quizzes: [1, 2, 3, 4], // IDs of quizzes belonging to this topic
  },
  {
    id: 3,
    title: "Passive Voice",
    quizzes: [1, 2, 3, 4], // IDs of quizzes belonging to this topic
  },
  // ... other topics
];

const quizzes = [
  {
    id: 1,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // IDs of questions in this quiz
    completed: false,
  },
  {
    id: 2,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // IDs of questions in this quiz
    completed: false,
  },
  {
    id: 3,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // IDs of questions in this quiz
    completed: false,
  },
  {
    id: 4,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // IDs of questions in this quiz
    completed: false,
  },
  // ... other quizzes
];

const questions = [
  {
    id: 1,
    quizId: 1, // ID of the quiz this question belongs to
    text: "What is the correct tense?",
    options: [
      { id: "a", text: "Present" },
      { id: "b", text: "Past" },
      { id: "c", text: "Future" },
    ],
    correctOptionId: "a", // ID of the correct option
    explanation: "The present tense is used for...",
  },
  {
    id: 2,
    quizId: 1, // ID of the quiz this question belongs to
    text: "What is the correct tense?",
    options: [
      { id: "a", text: "Present" },
      { id: "b", text: "Past" },
      { id: "c", text: "Future" },
    ],
    correctOptionId: "a", // ID of the correct option
    explanation: "The present tense is used for...",
  },
  // ... other questions
];

const getQuizById = (quizId) => {
  return quizzes.find((quiz) => quiz.id === quizId);
};

export default {
  topics,
  quizzes,
  questions,
  getQuizById,
};
