import View from './views';
import dora from 'url:../../img/dora-didit.gif';

class Status extends View {
  _parentContainer = document.querySelector('.status');

  _generateQuestions() {
    return `
            <div>
                <span class="status-item red"> Remaining : ${
                  this._data.remaining
                }</span>
                <span class="status-item green"> Completed : ${
                  this._data.completed
                }</span>
                ${
                  this._data.remaining
                    ? ''
                    : `<img src=${dora} alt="Success" />`
                }
            </div>
            `;
  }
}

export default new Status();
