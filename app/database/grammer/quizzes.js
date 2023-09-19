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
  //============= Topic Present perfect ====================
  {
    id: 9,
    topicId: 3, // ID of the topic this quiz belongs to
    questions: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90], // IDs of questions in this quiz
  },
  {
    id: 10,
    topicId: 3, // ID of the topic this quiz belongs to
    questions: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100], // IDs of questions in this quiz
  },
  {
    id: 11,
    topicId: 3, // ID of the topic this quiz belongs to
    questions: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110], // IDs of questions in this quiz
  },
  //============= Topic Present perfect continuous ====================

  {
    id: 12,
    topicId: 4, // ID of the topic this quiz belongs to
    questions: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120], // IDs of questions in this quiz
  },
  {
    id: 13,
    topicId: 4, // ID of the topic this quiz belongs to
    questions: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130], // IDs of questions in this quiz
  },
  {
    id: 14,
    topicId: 4, // ID of the topic this quiz belongs to
    questions: [131, 132, 133, 134, 135, 136, 137, 138, 139, 140], // IDs of questions in this quiz
  },
  //============= Topic Past Simple ====================
  {
    id: 15,
    topicId: 5, // ID of the topic this quiz belongs to
    questions: [141, 142, 143, 144, 145, 146, 147, 148, 149, 150], // IDs of questions in this quiz
  },
  {
    id: 16,
    topicId: 5, // ID of the topic this quiz belongs to
    questions: [151, 152, 153, 154, 155, 156, 157, 158, 159, 160], // IDs of questions in this quiz
  },
  {
    id: 17,
    topicId: 5, // ID of the topic this quiz belongs to
    questions: [161, 162, 163, 164, 165, 166, 167, 168, 169, 170], // IDs of questions in this quiz
  },
  //============= Past continuous ====================
  {
    id: 18,
    topicId: 6, // ID of the topic this quiz belongs to
    questions: [171, 172, 173, 174, 175, 176, 177, 178, 179, 180], // IDs of questions in this quiz
  },
  {
    id: 19,
    topicId: 6, // ID of the topic this quiz belongs to
    questions: [181, 182, 183, 184, 185, 186, 187, 188, 189, 190], // IDs of questions in this quiz
  },
  {
    id: 20,
    topicId: 6, // ID of the topic this quiz belongs to
    questions: [191, 192, 193, 194, 195, 196, 197, 198, 199, 200], // IDs of questions in this quiz
  },
  //============= Past Perfect ====================
  {
    id: 21,
    topicId: 7, // ID of the topic this quiz belongs to
    questions: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210], // IDs of questions in this quiz
  },
  {
    id: 22,
    topicId: 7, // ID of the topic this quiz belongs to
    questions: [211, 212, 213, 214, 215, 216, 217, 218, 219, 220], // IDs of questions in this quiz
  },
  {
    id: 23,
    topicId: 7, // ID of the topic this quiz belongs to
    questions: [221, 222, 223, 224, 225, 226, 227, 228, 229, 230], // IDs of questions in this quiz
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
