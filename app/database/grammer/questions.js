import nouns1 from "./nouns/nouns1";
import nouns2 from "./nouns/nouns2";
import nouns3 from "./nouns/nouns3";
import pronoun1 from "./pronoun/pronoun1";
import pronoun2 from "./pronoun/pronoun2";
import pronoun3 from "./pronoun/pronoun3";
import adjective1 from "./adjective/adjective1";
import adjective2 from "./adjective/adjective2";
import adjective3 from "./adjective/adjective3";

import futureContinuous1 from "./tense/futureContinuous1";
import futureContinuous2 from "./tense/futureContinuous2";
import futureContinuous3 from "./tense/futureContinuous3";
import futurePerfect1 from "./tense/futurePerfect1";
import futurePerfect2 from "./tense/futurePerfect2";
import futurePerfect3 from "./tense/futurePerfect3";
import futurePerfectCont1 from "./tense/futurePerfectCont1";
import futurePerfectCont2 from "./tense/futurePerfectCont2";
import futureSimple1 from "./tense/futureSimple1";
import futureSimple2 from "./tense/futureSimple2";
import futureSimple3 from "./tense/futureSimple3";
import pastContinuous1 from "./tense/pastContinuous1";
import pastContinuous2 from "./tense/pastContinuous2";
import pastContinuous3 from "./tense/pastContinuous3";
import pastPerfect1 from "./tense/pastPerfect1";
import pastPerfect2 from "./tense/pastPerfect2";
import pastPerfect3 from "./tense/pastPerfect3";
import pastPerfectCont1 from "./tense/pastPerfectCont1";
import pastPerfectCont2 from "./tense/pastPerfectCont2";
import pastPerfectCont3 from "./tense/pastPerfectCont3";
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
import article1 from "./article/article1";
import article2 from "./article/article2";
import article3 from "./article/article3";
import adverb1 from "./adverbs/adverb1";
import adverb2 from "./adverbs/adverb2";
import adverb3 from "./adverbs/adverb3";
import modal1 from "./modals/modal1";
import modal2 from "./modals/modal2";
import modal3 from "./modals/modal3";
import modal4 from "./modals/modal4";
import preposition2 from "./preposition/preposition2";
import preposition1 from "./preposition/preposition1";

const questions = [
  // ================ present simple  ==========================
  ...presentSimple1,
  ...presentSimple2,
  ...presentSimple3,
  ...presentSimple4,
  /**
   *
   *
   */
  // ================ present continuoue ==========================
  ...presentContinuous1,
  ...presentContinuous2,
  ...presentContinuous3,
  ...presentContinuous4,
  /**
   *
   *
   */
  // ================ Present perfect ==========================
  ...presentPerfect1,
  ...presentPerfect2,
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
  // ================ Past Simple  ==========================
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
  /**
   *
   *
   */
  // ================ Past Perfect ==========================
  ...pastPerfect1,
  ...pastPerfect2,
  ...pastPerfect3,
  /**
   *
   *
   */
  // ================ Past Perfect Continuous ==========================
  ...pastPerfectCont1,
  ...pastPerfectCont2,
  ...pastPerfectCont3,
  /**
   *
   *
   */
  // ================ Future simple ==========================
  ...futureSimple1,
  ...futureSimple2,
  ...futureSimple3,
  /**
   *
   *
   */
  // ================ Future continuous ==========================
  ...futureContinuous1,
  ...futureContinuous2,
  ...futureContinuous3,
  /**
   *
   *
   */
  // ================ Future continuous ==========================
  ...futurePerfect1,
  ...futurePerfect2,
  ...futurePerfect3,
  /**
   *
   *
   */
  // ================ Future Perfect Continuous ==========================
  ...futurePerfectCont1,
  ...futurePerfectCont2,

  /**
   *
   *
   */
  // ================ Nouns ==========================
  ...nouns1,
  ...nouns2,
  ...nouns3,
  /**
   *
   *
   */
  // ================ Pronouns ==========================
  ...pronoun1,
  ...pronoun2,
  ...pronoun3,
  /**
   *
   *
   */
  // ================ Adjective ==========================
  ...adjective1,
  ...adjective2,
  ...adjective3,
  /**
   *
   *
   */
  // ================ Article ==========================
  ...article1,
  ...article2,
  ...article3,
  /**
   *
   *
   */
  // ================ Adverb ==========================
  ...adverb1,
  ...adverb2,
  ...adverb3,
  /**
   *
   *
   */
  // ================ Modal ==========================
  ...modal1,
  ...modal2,
  ...modal3,
  ...modal4,
  /**
   *
   *
   */
  // ================ Preposition ==========================
  ...preposition1,
  ...preposition2,
];

// ================ Methods ========================

export const getQuestionById = (id) => {
  return questions.find((question) => question.id === id);
};

export default {
  questions,
  getQuestionById,
};
