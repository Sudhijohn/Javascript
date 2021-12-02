import View from './views';
import tick from 'url:../../img/tick.png';

class Question extends View {
  _parentContainer = document.querySelector('.question');

  _generateQuestions() {
    return this._data
      .map(question => this._generateQuestionHTML(question))
      .join();
  }
  _generateQuestionHTML(que) {
    return `
      <div data-id=${que.id} data-ans=${que.ans} 
       class="que-container ${que.correct ? 'complete' : ''}">
        <span class="number">${que.number1}</span>
        <span class="number">+</span>
        <span class="number">${que.number2}</span>
        <span class="number">=</span>
        <span class="search ${que.correct ? 'hide' : ''}">
          <input
            type="number"
            min=0
            class="search__field"
            placeholder="Type here..."
          />
        </span>
        <span ${que.correct ? '' : 'hidden'}>
            <span class="number">${que.ans}</span>
            <img src="${tick}" alt="Success" class="tick-logo" />
        </span>
      </div>`;
  }

  addChangeHandler(handler) {
    this._parentContainer.addEventListener('input', function (event) {
      const queContainer = event.target.closest('.que-container');
      const answer = event.target.value;
      const questionID = queContainer.dataset.id;
      const correctAnswer = queContainer.dataset.ans;
      if (correctAnswer === answer) handler(+questionID, +event.target.value);
    });
  }
}

export default new Question();
