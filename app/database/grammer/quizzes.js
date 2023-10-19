const quizzes = [
  //============= Topic present simple id=1 ====================
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
  //============= Past Perfect Continuous ====================
  {
    id: 24,
    topicId: 8, // ID of the topic this quiz belongs to
    questions: [231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
  },
  {
    id: 25,
    topicId: 8,
    questions: [241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
  },
  {
    id: 26,
    topicId: 8,
    questions: [251, 252, 253, 254, 255, 256, 257, 258, 259, 260],
  },
  //============= Future simple====================
  {
    id: 27,
    topicId: 9, // ID of the topic this quiz belongs to
    questions: [261, 262, 263, 264, 265, 266, 267, 268, 269, 270],
  },
  {
    id: 28,
    topicId: 9,
    questions: [271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
  },
  {
    id: 29,
    topicId: 9,
    questions: [281, 282, 283, 284, 285, 286, 287, 288, 289, 290],
  },
  //============= Future continuous====================
  {
    id: 30,
    topicId: 10, // ID of the topic this quiz belongs to
    questions: [291, 292, 293, 294, 295, 299, 297, 298, 299, 300],
  },
  {
    id: 31,
    topicId: 10,
    questions: [301, 302, 303, 304, 305, 306, 307, 308, 309, 310],
  },
  {
    id: 32,
    topicId: 10,
    questions: [311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
  },
  //============= Future Perfect ====================
  {
    id: 33,
    topicId: 11, // ID of the topic this quiz belongs to
    questions: [321, 322, 323, 324, 325, 326, 327, 328, 329, 330],
  },
  {
    id: 34,
    topicId: 11,
    questions: [331, 332, 333, 334, 335, 336, 337, 338, 339, 340],
  },
  {
    id: 35,
    topicId: 11,
    questions: [341, 342, 343, 344, 345, 346, 347, 348, 349, 350],
  },
  //============= Future Perfect  id=36 ====================
  {
    id: 36,
    topicId: 12, // ID of the topic this quiz belongs to
    questions: [351, 352, 353, 354, 355, 356, 357, 358, 359, 360],
  },
  {
    id: 37,
    topicId: 12,
    questions: [361, 362, 363, 364, 365, 366, 367, 368, 369, 370],
  },

  //============= Noun id=38 ====================
  {
    id: 38,
    topicId: 13,
    questions: [371, 372, 373, 374, 375, 376, 377, 378, 379, 380],
  },
  {
    id: 39,
    topicId: 13,
    questions: [381, 382, 383, 384, 385, 386, 387, 388, 389, 390],
  },
  {
    id: 40,
    topicId: 13,
    questions: [391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
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
