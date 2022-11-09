function answer_check() {
  const optList = document.getElementsByName("opt");
  let answer_1 = "";
  optList.forEach((node) => {
    if (node.checked) {
      answer_1 = node.value;
    }
  });

  const optList2 = document.getElementsByName("opt_two");
  let answer_2 = "";
  optList2.forEach((node) => {
    if (node.checked) {
      answer_2 = node.value;
    }
  });

  const optList3 = document.getElementsByName("opt_three");
  let answer_3 = "";
  optList3.forEach((node) => {
    if (node.checked) {
      answer_3 = node.value;
    }
  });

  if (answer_1 === "" || answer_2 === "" || answer_3 === "") {
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
      //location.href = "Q_answer.html";
    });
  }
}

function view_check1_1() {
  $("#1-1").prop("checked", true);
}

function view_check1_2() {
  $("#1-2").prop("checked", true);
}

function view_check1_3() {
  $("#1-3").prop("checked", true);
}

function view_check1_4() {
  $("#1-4").prop("checked", true);
}

function view_check2_1() {
  $("#2-1").prop("checked", true);
}

function view_check2_2() {
  $("#2-2").prop("checked", true);
}

function view_check2_3() {
  $("#2-3").prop("checked", true);
}

function view_check2_4() {
  $("#2-4").prop("checked", true);
}

function view_check3_1() {
  $("#3-1").prop("checked", true);
}

function view_check3_2() {
  $("#3-2").prop("checked", true);
}

function view_check3_3() {
  $("#3-3").prop("checked", true);
}

function view_check3_4() {
  $("#3-4").prop("checked", true);
}
