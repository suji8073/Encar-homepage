let level_check = 0;

function q_create() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const question = document.getElementById("question").value;
  const opt1 = document.getElementById("opt1").value;
  const opt2 = document.getElementById("opt2").value;
  const opt3 = document.getElementById("opt3").value;
  const opt4 = document.getElementById("opt4").value;

  const optList = document.getElementsByName("opt");
  let answer = 0;

  optList.forEach((node) => {
    if (node.checked) {
      answer = node.value;
    }
  });

  if (
    level_check == 0 ||
    name == "" ||
    date == "" ||
    question == "" ||
    opt1 == "" ||
    opt2 == "" ||
    opt3 == "" ||
    opt4 == "" ||
    answer == ""
  ) {
    Swal.fire({
      icon: "error",
      text: "난이도를 선택해주세요.",
      timer: 1000,
    });
  } 
  
  else {
    const data = {
      records: [
        {
          fields: {
            question: question,
            answer: Number(answer),
            opt1: opt1,
            opt2: opt2,
            opt3: opt3,
            opt4: opt4,
          },
        },
      ],
    };

    let axiosConfig = {
      Authorization: "Bearer keyTvIqUQEHqc8ufv",
      "Content-Type": "application/json",
    };

    fetch("https://api.airtable.com/v0/appj4bC90ztg6jSTy/type1", {
      method: "POST",
      body: JSON.stringify(data),
      headers: axiosConfig,
    });

    Swal.fire({
      text: "문제가 생성되었습니다.",
      icon: "success",
      timer: 1500,
    }).then(function () {
      location.href = "create.html";
    });
  }
}

function dep1() {
  const btnElement = document.getElementById("level");
  btnElement.innerText = "1";
  btnElement.style.color = "#000";
  level_check = 1;
}
function dep2() {
  const btnElement = document.getElementById("level");
  btnElement.innerText = "2";
  btnElement.style.color = "#000";
  level_check = 2;
}
function dep3() {
  const btnElement = document.getElementById("level");
  btnElement.innerText = "3";
  btnElement.style.color = "#000";
  level_check = 3;
}
function dep4() {
  const btnElement = document.getElementById("level");
  btnElement.innerText = "4";
  btnElement.style.color = "#000";
  level_check = 4;
}
function dep5() {
  const btnElement = document.getElementById("level");
  btnElement.innerText = "5";
  btnElement.style.color = "#000";
  level_check = 5;
}

//href="create.html"
