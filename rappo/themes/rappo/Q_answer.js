var user_answer = sessionStorage.getItem("user_answer");
var q_answer = sessionStorage.getItem("q_answer");
window.onload = function start() {
  console.log(user_answer);
  console.log(q_answer);
  if (user_answer == q_answer) {
    document.getElementById("check_text").innerHTML = "정답입니다.";
  } else {
    document.getElementById("check_text").innerHTML = "오답입니다.";
  }
};
