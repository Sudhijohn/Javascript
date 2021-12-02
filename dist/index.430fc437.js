const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const length = 10;
const maxNumber = 75;
// data.push({
//   number1: generateNumber(maxNumber),
//   number2: generateNumber(maxNumber),
//   ans: Number(this.number1) + Number(this.number2),
// });
const generateMarkup = function(data) {
    console.log(data);
    const markup = data.map((que)=>{
        console.log(que);
        return `
    <div>
      <span class="number">${que.number1}</span>
      <span class="number">+</span>
      <span class="number">${que.number2}</span>
      <span class="number">=</span>
      <span class="search">
        <input
          type="number"
          min=0
          class="search__field"
          placeholder="Type here..."
        />
      </span>
      <span class="number hidden">${que.ans}</span>
    </div>`;
    }).join('');
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
};
generateMarkup();

//# sourceMappingURL=index.430fc437.js.map
