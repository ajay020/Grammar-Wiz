const topics = [
  {
    id: 1,
    title: "Tense",
    quizzes: [1, 2], // IDs of quizzes belonging to this topic
  },
  {
    id: 2,
    title: "Verbs",
    quizzes: [3, 4], // IDs of quizzes belonging to this topic
  },
];

// ================ Methods ========================

export const getTopicById = (id) => {
  return topics.find((topic) => topic.id === id);
};

export default {
  topics,
  getTopicById,
};
