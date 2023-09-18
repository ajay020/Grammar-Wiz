import pastContinuous1 from "./tense/pastContinuous1";
import pastContinuous2 from "./tense/pastContinuous2";
import pastContinuous3 from "./tense/pastContinuous3";
import pastSimple1 from "./tense/pastSimple1";
import pastSimple2 from "./tense/pastSimple2";
import pastSimple3 from "./tense/pastSimple3";
import { presentContinuous1 } from "./tense/presentConti1";
import { presentContinuous2 } from "./tense/presentConti2";
import { presentContinuous3 } from "./tense/presentConti3";
import { presentContinuous4 } from "./tense/presentConti4";
import { presentPerfect1 } from "./tense/presentPerfect1";
import { presentPerfect2 } from "./tense/presentPerfect2";
import { presentPerfect3 } from "./tense/presentPerfect3";
import presentPerfectCont1 from "./tense/presentPerfectCont1";
import presentPerfectCont2 from "./tense/presentPerfectCont2";
import presentPerfectCont3 from "./tense/presentPerfectCont3";
import { presentSimple1 } from "./tense/presentSimple1";
import presentSimple2 from "./tense/presentSimple2";
import presentSimple3 from "./tense/presentSimple3";
import { presentSimple4 } from "./tense/presentSimple4";

const questions = [
  // ================ present simple quiz 1 ==========================
  ...presentSimple1,
  // ================ present simple quiz 2 ==========================
  ...presentSimple2,
  // ================ present simple quiz 3 ==========================
  ...presentSimple3,
  // ================ present simple quiz 4 ==========================
  ...presentSimple4,
  /**
   *
   *
   */
  // ================ present continuoue quiz 1 ==========================
  ...presentContinuous1,
  // ================ present continuoue quiz 2 ==========================
  ...presentContinuous2,
  // ================ present continuoue quiz 3 ==========================
  ...presentContinuous3,
  // ================ present continuoue quiz 4 ==========================
  ...presentContinuous4,
  /**
   *
   *
   */
  // ================ Present perfect quiz 1 ==========================
  ...presentPerfect1,
  // ================ Present perfect quiz 2 ==========================
  ...presentPerfect2,
  // ================ Present perfect quiz 3 ==========================
  ...presentPerfect3,
  /**
   *
   *
   */
  // ================ Present Perfect Continuous ==========================
  ...presentPerfectCont1,
  ...presentPerfectCont2,
  ...presentPerfectCont3,
  /**
   *
   *
   */
  // ================ Past Simple quiz  ==========================
  ...pastSimple1,
  ...pastSimple2,
  ...pastSimple3,
  /**
   *
   *
   */
  // ================ Past Continuous ==========================
  ...pastContinuous1,
  ...pastContinuous2,
  ...pastContinuous3,
];

// ================ Methods ========================

export const getQuestionById = (id) => {
  return questions.find((question) => question.id === id);
};

export default {
  questions,
  getQuestionById,
};
