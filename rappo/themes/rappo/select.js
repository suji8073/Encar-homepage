function next1_1() {
  Swal.fire({
    text: "문제 생성 중입니다.",
    icon: "success",
    timer: 1000,
  }).then(function () {
    location.href = "select1-1.html";
  });
}
