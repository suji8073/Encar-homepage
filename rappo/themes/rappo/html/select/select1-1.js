window.onload = function start() {
  fetch("https://api.airtable.com/v0/appj4bC90ztg6jSTy/type1", {
    headers: {
      Authorization: "Bearer keyTvIqUQEHqc8ufv",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable");
      }
    })
    .then((data) => {
      console.log(data);
      const random_num = Math.floor(Math.random() * data.records.length);

      document.getElementById("opt1").innerHTML =
        data.records[random_num].fields.opt1;
      document.getElementById("opt2").innerHTML =
        data.records[random_num].fields.opt2;
      document.getElementById("opt3").innerHTML =
        data.records[random_num].fields.opt3;
      document.getElementById("opt4").innerHTML =
        data.records[random_num].fields.opt4;
      document.getElementById("question").innerHTML =
        data.records[random_num].fields.question;

      sessionStorage.setItem(
        "q_answer",
        data.records[random_num].fields.answer
      );
    });
};

function answer_check() {
  const optList = document.getElementsByName("opt");
  let user_answer = "";
  optList.forEach((node) => {
    if (node.checked) {
      user_answer = node.value;
    }
  });

  if (user_answer === "") {
    Swal.fire({
      icon: "error",
      text: "정답을 고르세요.",
      timer: 1000,
    });
  } else {
    Swal.fire({
      text: "정답을 확인합니다.",
      icon: "success",
      timer: 1500,
    }).then(function () {
      sessionStorage.setItem("user_answer", user_answer);
      location.href = "Q_answer.html";
    });
  }
}

function view_check_1() {
  $("#1").prop("checked", true);
}

function view_check_2() {
  $("#2").prop("checked", true);
}

function view_check_3() {
  $("#3").prop("checked", true);
}

function view_check_4() {
  $("#4").prop("checked", true);
}
