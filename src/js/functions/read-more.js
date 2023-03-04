window.onload = function () {
  //получаем идентификатор элемента
  var btn = document.getElementById("btn");
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");

  btn.onclick = function () {

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Подробнее";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Скрыть";
      more.style.display = "inline";
    }
  };
};
