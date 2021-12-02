import * as model from './model';
import Question from './views/question';
import status from './views/status';

const controlAnswers = (id, ans) => {
  model.updateStatus(id, ans);
  Question.generateMarkup(model.state.data);
  status.generateMarkup(model.state.progress);
};

(function () {
  model.createInitalState();

  Question.generateMarkup(model.state.data);
  Question.addChangeHandler(controlAnswers);
})();
