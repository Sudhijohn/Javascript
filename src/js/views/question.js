import View from './views';
import tick from 'url:../../img/tick.png';

class Question extends View {
  _parentContainer = document.querySelector('.question');

  display(state) {
    this.displayView(state);
    this.focusInput();
  }

  _generateMarkups() {
    return this._data.map(question => this._generateMarkup(question)).join();
  }
  _generateMarkup(que) {
    return `
      <div data-id=${que.id} data-ans=${que.ans} 
       class="que-container ${que.correct ? 'complete' : ''}">
        <span class="number">${que.number1}</span>
        <span class="number">+</span>
        <span class="number">${que.number2}</span>
        <span class="number">=</span>
        <div class="answer ${que.correct ? 'hide' : ''}">
          <input
            type="number"
            min=0
            class="answer__field"
            show=${!que.correct}
            placeholder="Answer here..."
          />
        </div>
        <div class="ans-container" ${que.correct ? '' : 'hidden'}>
            <span class="ans-number">${que.ans}</span>
            <img src="${tick}" alt="Success" class="tick-logo" />
        </div>
      </div>`;
  }

  focusInput() {
    const inputs = Array.from(
      this._parentContainer.getElementsByTagName('input')
    ).filter(ele => ele.getAttribute('show') === 'true');
    if (inputs.length === 0) return;
    inputs[0].focus();
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
