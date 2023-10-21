// enter number
var answer = document.getElementById("Answer");
function EnterNumber(num) {
  answer.value += num;
}
//enter operator
var po;
function EnterOperator(opr) {
  answer.value += opr;
}

// enter equa

function EnterEqual() {
  answer.value = eval(answer.value);
}
//clear
function EnterClear() {
  answer.value = "";
}
