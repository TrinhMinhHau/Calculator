const inputEl = document.querySelectorAll(".data");
const resultEl = document.querySelector(".result");
resultEl.value = 0;
function display() {
  inputEl.forEach(function (el) {
    el.onclick = function () {
      resultEl.value += el.value;
      console.log(el.value);
      console.log(resultEl.value);
    };
  });
}

function deleteAll() {
  resultEl.value = "0";
}

function Calculator() {
  try {
    resultEl.value = eval(resultEl.value);
  } catch (error) {
    resultEl.value = 0;
  }
}

function deleteOneElement() {
  resultEl.value = resultEl.value
    .toString()
    .substring(0, resultEl.value.toString().length - 1);
}
