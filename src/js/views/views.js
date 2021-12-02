class View {
  _data;
  generateMarkup(data) {
    this._data = data;
    const markup = this._generateQuestions(this._data);
    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentContainer.innerHTML = '';
  }
}

export default View;
