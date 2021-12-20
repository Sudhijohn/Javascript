import * as model from './model';
import Question from './views/question';
import Status from './views/status';

const controlAnswers = (id, ans) => {
  model.updateStatus(id, ans);
  Question.display(model.state.data);
  Status.displayView(model.state.progress);
  Status.addClickHandler(controlReset);
};

const controlReset = () => {
  model.reset();
  Question.display(model.state.data);
};

(function init() {
  model.createInitalState();

  Question.display(model.state.data);
  Question.addChangeHandler(controlAnswers);
})();
