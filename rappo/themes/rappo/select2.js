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
