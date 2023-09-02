const quizzes = [
  {
    id: 0,
    difficulty: 1,
    words: [
      {
        id: 1,
        text: "Who",
        position: 1,
      },
      {
        id: 2,
        text: "are",
        position: 2,
      },
      {
        id: 3,
        text: "you",
        position: 3,
      },
      {
        id: 4,
        text: "?",
        position: 4,
      },
    ],
  },
  {
    id: 1,
    difficulty: 2,
    words: [
      {
        id: 5,
        text: "I",
        position: 1,
      },
      {
        id: 6,
        text: "don't",
        position: 2,
      },
      {
        id: 7,
        text: "know,",
        position: 3,
      },
      {
        id: 8,
        text: "why?",
        position: 4,
      },
    ],
  },
  {
    id: 2,
    difficulty: 3,
    words: [
      {
        id: 9,
        text: "Wow!",
        position: 1,
      },
      {
        id: 10,
        text: "amazing",
        position: 2,
      },
      {
        id: 11,
        text: "incredible",
        position: 3,
      },
      {
        id: 12,
        text: "achievement",
        position: 4,
      },
    ],
  },
  {
    id: 3,
    difficulty: 1,
    words: [
      {
        id: 13,
        text: "Why",
        position: 1,
      },
      {
        id: 14,
        text: "not",
        position: 2,
      },
      {
        id: 15,
        text: "try",
        position: 3,
      },
      {
        id: 16,
        text: "again",
        position: 4,
      },
      {
        id: 17,
        text: "?",
        position: 5,
      },
    ],
  },
  {
    id: 4,
    difficulty: 2,
    words: [
      {
        id: 18,
        text: "I",
        position: 1,
      },
      {
        id: 19,
        text: "can't",
        position: 2,
      },
      {
        id: 20,
        text: "believe",
        position: 3,
      },
      {
        id: 21,
        text: "it",
        position: 4,
      },
      {
        id: 22,
        text: "!",
        position: 5,
      },
    ],
  },
  {
    id: 5,
    difficulty: 3,
    words: [
      {
        id: 23,
        text: "What",
        position: 1,
      },
      {
        id: 24,
        text: "a",
        position: 2,
      },
      {
        id: 25,
        text: "wonderful",
        position: 3,
      },
      {
        id: 26,
        text: "surprise",
        position: 4,
      },
      {
        id: 27,
        text: "!",
        position: 5,
      },
    ],
  },
  {
    id: 6,
    difficulty: 1,
    words: [
      {
        id: 28,
        text: "It's",
        position: 1,
      },
      {
        id: 29,
        text: "impossible",
        position: 2,
      },
      {
        id: 30,
        text: "!",
        position: 3,
      },
    ],
  },
  {
    id: 7,
    difficulty: 2,
    words: [
      {
        id: 31,
        text: "Don't",
        position: 1,
      },
      {
        id: 32,
        text: "worry",
        position: 2,
      },
      {
        id: 33,
        text: "about",
        position: 3,
      },
      {
        id: 34,
        text: "it",
        position: 4,
      },
      {
        id: 35,
        text: ".",
        position: 5,
      },
    ],
  },
  {
    id: 8,
    difficulty: 3,
    words: [
      {
        id: 36,
        text: "You're",
        position: 1,
      },
      {
        id: 37,
        text: "the",
        position: 2,
      },
      {
        id: 38,
        text: "best",
        position: 3,
      },
      {
        id: 39,
        text: "!",
        position: 4,
      },
    ],
  },
  {
    id: 9,
    difficulty: 1,
    words: [
      {
        id: 40,
        text: "No",
        position: 1,
      },
      {
        id: 41,
        text: "way",
        position: 2,
      },
      {
        id: 42,
        text: "!",
        position: 3,
      },
    ],
  },
  // Quiz 10
  {
    id: 10,
    difficulty: 2,
    words: [
      {
        id: 43,
        text: "Exploring",
        position: 1,
      },
      {
        id: 44,
        text: "ancient",
        position: 2,
      },
      {
        id: 45,
        text: "ruins",
        position: 3,
      },
      {
        id: 46,
        text: "is",
        position: 4,
      },
      {
        id: 47,
        text: "fascinating",
        position: 5,
      },
    ],
  },

  // Quiz 11
  {
    id: 11,
    difficulty: 3,
    words: [
      {
        id: 48,
        text: "In",
        position: 1,
      },
      {
        id: 49,
        text: "the",
        position: 2,
      },
      {
        id: 50,
        text: "depths",
        position: 3,
      },
      {
        id: 51,
        text: "of",
        position: 4,
      },
      {
        id: 53,
        text: "ocean",
        position: 5,
      },
      {
        id: 54,
        text: "lies",
        position: 6,
      },
      {
        id: 55,
        text: "a",
        position: 7,
      },
      {
        id: 56,
        text: "world",
        position: 8,
      },
      {
        id: 57,
        text: "full",
        position: 9,
      },
      {
        id: 58,
        text: "of",
        position: 10,
      },
      {
        id: 59,
        text: "mystery",
        position: 11,
      },
    ],
  },

  // Quiz 12
  {
    id: 12,
    difficulty: 1,
    words: [
      {
        id: 63,
        text: "Climbing",
        position: 1,
      },
      {
        id: 64,
        text: "mountains",
        position: 2,
      },
      {
        id: 65,
        text: "requires",
        position: 3,
      },
      {
        id: 66,
        text: "courage",
        position: 4,
      },
    ],
  },

  // Quiz 13
  {
    id: 13,
    difficulty: 2,
    words: [
      {
        id: 67,
        text: "Solving",
        position: 1,
      },
      {
        id: 68,
        text: "complex",
        position: 2,
      },
      {
        id: 69,
        text: "puzzles",
        position: 3,
      },
      {
        id: 70,
        text: "is",
        position: 4,
      },
      {
        id: 71,
        text: "a",
        position: 5,
      },
      {
        id: 72,
        text: "rewarding",
        position: 6,
      },
      {
        id: 73,
        text: "challenge",
        position: 7,
      },
    ],
  },

  // Quiz 14
  {
    id: 14,
    difficulty: 3,
    words: [
      {
        id: 74,
        text: "The",
        position: 1,
      },
      {
        id: 75,
        text: "universe",
        position: 2,
      },
      {
        id: 76,
        text: "holds",
        position: 3,
      },
      {
        id: 77,
        text: "countless",
        position: 4,
      },
      {
        id: 78,
        text: "mysteries",
        position: 5,
      },
      {
        id: 79,
        text: "waiting",
        position: 6,
      },
      {
        id: 80,
        text: "to",
        position: 7,
      },
      {
        id: 81,
        text: "be",
        position: 8,
      },
      {
        id: 82,
        text: "discovered",
        position: 9,
      },
      {
        id: 83,
        text: ".",
        position: 10,
      },
    ],
  },

  // Quiz 15
  {
    id: 15,
    difficulty: 1,
    words: [
      {
        id: 84,
        text: "Good",
        position: 1,
      },
      {
        id: 85,
        text: "morning",
        position: 2,
      },
    ],
  },

  // Quiz 16
  {
    id: 16,
    difficulty: 2,
    words: [
      {
        id: 86,
        text: "How",
        position: 1,
      },
      {
        id: 87,
        text: "are",
        position: 2,
      },
      {
        id: 88,
        text: "you",
        position: 3,
      },
      {
        id: 89,
        text: "doing",
        position: 4,
      },
      {
        id: 90,
        text: "today",
        position: 5,
      },
      {
        id: 91,
        text: "?",
        position: 6,
      },
    ],
  },

  // Quiz 17
  {
    id: 17,
    difficulty: 1,
    words: [
      {
        id: 92,
        text: "Thank",
        position: 1,
      },
      {
        id: 93,
        text: "you",
        position: 2,
      },
    ],
  },

  // Quiz 18
  {
    id: 18,
    difficulty: 2,
    words: [
      {
        id: 94,
        text: "Please",
        position: 1,
      },
      {
        id: 95,
        text: "pass",
        position: 2,
      },
      {
        id: 96,
        text: "the",
        position: 3,
      },
      {
        id: 97,
        text: "salt",
        position: 4,
      },
    ],
  },

  // Quiz 19
  {
    id: 19,
    difficulty: 1,
    words: [
      {
        id: 98,
        text: "I",
        position: 1,
      },
      {
        id: 99,
        text: "love",
        position: 2,
      },
      {
        id: 100,
        text: "my",
        position: 3,
      },
      {
        id: 101,
        text: "cat!",
        position: 4,
      },
    ],
  },
];

//++++++++++++++++++++++++++++++++++++++++++++

const getQuizzesByDifficulty = (difficulty) => {
  return quizzes.filter((quiz) => quiz.difficulty === difficulty);
};

const getQuizById = (id) => {
  return quizzes.find((sentence) => sentence.id === id);
};

export { getQuizById, quizzes, getQuizzesByDifficulty };
