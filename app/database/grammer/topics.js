const topics = [
  {
    id: 1,
    title: "Present Simple",
    quizzes: [1, 2], // IDs of quizzes belonging to this topic
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
