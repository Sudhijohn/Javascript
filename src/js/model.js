import { MAX_NO_PROBLEM, MAX_NUMBER } from './config';
import { generateNumber } from './helper';

export const state = {
  data: [],
  progress: {
    remaining: 0,
    completed: 0,
  },
};

export const createInitalState = () => {
  while (state.data.length < MAX_NO_PROBLEM) {
    const question = {
      id: state.data.length + 1,
      number1: generateNumber(MAX_NUMBER),
      number2: generateNumber(MAX_NUMBER),
    };
    question.ans = question.number1 + question.number2;
    state.data.push(question);
  }
};

export const updateStatus = (id, ans) => {
  const question = state.data.find(question => question.id === id);
  if (!question) return;
  if (question.ans === ans) question.correct = true;
  progressTracker();
};

export const progressTracker = () => {
  const completed = state.data.filter(question => question.correct === true);
  state.progress.remaining = state.data.length - completed.length;
  state.progress.completed = completed.length;
};

export const reset = () => {
  state.data.length = 0;
  state.progress.completed = 0;
  state.progress.remaining = 0;
  createInitalState();
};
