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
    quizId: 1,
    text: "Which sentence uses the past tense correctly?",
    options: [
      { id: "a", text: "I will go to the store tomorrow." },
      { id: "b", text: "She is going to the park now." },
      { id: "c", text: "He walked to school yesterday." },
    ],
    correctOptionId: "c",
    explanation:
      "The sentence 'He walked to school yesterday' is in the past tense.",
  },
  {
    id: 3,
    quizId: 2,
    text: "What is the base form of the verb 'to be'?",
    options: [
      { id: "a", text: "Is" },
      { id: "b", text: "Are" },
      { id: "c", text: "Be" },
    ],
    correctOptionId: "c",
    explanation: "The base form of the verb 'to be' is 'be'.",
  },
  {
    id: 4,
    quizId: 2,
    text: "Which sentence uses the verb 'to be' correctly?",
    options: [
      { id: "a", text: "She am a doctor." },
      { id: "b", text: "I are a student." },
      { id: "c", text: "They are my friends." },
    ],
    correctOptionId: "c",
    explanation:
      "The sentence 'They are my friends' uses 'are' correctly with 'they'.",
  },
  {
    id: 5,
    quizId: 3,
    text: "What is a transitive verb?",
    options: [
      { id: "a", text: "A verb that doesn't require an object." },
      {
        id: "b",
        text: "A verb that requires an object to complete its meaning.",
      },
      { id: "c", text: "A verb that is always in the past tense." },
    ],
    correctOptionId: "b",
    explanation:
      "A transitive verb requires an object to complete its meaning.",
  },
  {
    id: 6,
    quizId: 3,
    text: "Which verb in the sentence 'She ate the cake' is transitive?",
    options: [
      { id: "a", text: "She" },
      { id: "b", text: "Ate" },
      { id: "c", text: "Cake" },
    ],
    correctOptionId: "b",
    explanation:
      "The verb 'ate' is transitive because it requires an object ('the cake').",
  },
  {
    id: 7,
    quizId: 4,
    text: "What is an irregular verb?",
    options: [
      { id: "a", text: "A verb that is always in the past tense." },
      {
        id: "b",
        text: "A verb that follows a regular pattern when conjugated.",
      },
      {
        id: "c",
        text: "A verb that does not follow a regular pattern when conjugated.",
      },
    ],
    correctOptionId: "c",
    explanation:
      "An irregular verb does not follow a regular pattern when conjugated.",
  },
  {
    id: 8,
    quizId: 4,
    text: "Give an example of an irregular verb.",
    options: [
      { id: "a", text: "Walked" },
      { id: "b", text: "Played" },
      { id: "c", text: "Jumped" },
    ],
    correctOptionId: "a",
    explanation: "'Walked' is an example of an irregular verb.",
  },
];

// ================ Methods ========================

export const getQuestionById = (id) => {
  return questions.find((question) => question.id === id);
};

export default {
  questions,
  getQuestionById,
};
