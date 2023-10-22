const topics = [
  /**
   * Noun
   */
  {
    id: 13,
    title: "Nouns",
    quizzes: [38, 39, 40], // IDs of quizzes belonging to this topic
  },

  /**
   * Pronoun
   */
  {
    id: 14,
    title: "Pronoun",
    quizzes: [41, 42, 43], // IDs of quizzes belonging to this topic
  },
  /**
   * Adjective
   */
  {
    id: 15,
    title: "Adjective",
    quizzes: [44, 45, 46], // IDs of quizzes belonging to this topic
  },

  /**
   * Article
   */
  {
    id: 16,
    title: "Article",
    quizzes: [47, 48, 49], // IDs of quizzes belonging to this topic
  },
  /**
   * Presnet Tense
   */
  {
    id: 1,
    title: "Present Simple",
    quizzes: [1, 2, 3, 4], // IDs of quizzes belonging to this topic
  },
  {
    id: 2,
    title: "Present Continuous",
    quizzes: [5, 6, 7, 8],
  },
  {
    id: 3,
    title: "Present Perfect",
    quizzes: [9, 10, 11],
  },
  {
    id: 4,
    title: "Present Perfect continuous",
    quizzes: [12, 13, 14],
  },
  /**
   * Past Tense
   */
  {
    id: 5,
    title: "Past Simple",
    quizzes: [15, 16, 17],
  },
  {
    id: 6,
    title: "Past Continuous",
    quizzes: [18, 19, 20],
  },
  {
    id: 7,
    title: "Past Perfect",
    quizzes: [21, 22, 23],
  },
  {
    id: 8,
    title: "Past Perfect Continuous",
    quizzes: [24, 25, 26],
  },
  /**
   * Future Tense
   */
  {
    id: 9,
    title: "Future Simple",
    quizzes: [27, 28, 29],
  },
  {
    id: 10,
    title: "Future Continuous",
    quizzes: [30, 31, 32],
  },
  {
    id: 11,
    title: "Future Perfect",
    quizzes: [33, 34, 35],
  },
  {
    id: 12,
    title: "Future Perfect Continuous",
    quizzes: [36, 37],
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
