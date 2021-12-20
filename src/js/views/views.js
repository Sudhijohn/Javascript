class View {
  _data;
  displayView(data) {
    this._data = data;
    const markup = this._generateMarkups(this._data);
    this._clear();
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentContainer.innerHTML = '';
  }
}

export default View;
