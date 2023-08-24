const topics = [
  {
    id: 1,
    title: "Tense",
    quizzes: [1, 2], // IDs of quizzes belonging to this topic
  },
  {
    id: 2,
    title: "Model",
    quizzes: [1, 2], // IDs of quizzes belonging to this topic
  },
  // ... other topics
];

const quizzes = [
  {
    id: 1,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2], // IDs of questions in this quiz
    completed: false,
  },
  {
    id: 2,
    topicId: 1, // ID of the topic this quiz belongs to
    questions: [1, 2], // IDs of questions in this quiz
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
    text: "Where are you now?",
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

const getQuestionById = (id) => {
  return questions.find((question) => question.id === id);
};

const getTopicById = (id) => {
  return topics.find((topic) => topic.id === id);
};

export default {
  topics,
  quizzes,
  questions,
  getQuizById,
  getQuestionById,
  getTopicById,
};
