function openNewWin() {
  open("index3.html");
}

//q4

//mouse over

function decreaseOpacity(i) {
  var element = document.querySelectorAll("img")[i];
  element.style.opacity = 1;
  console.log(element.style.opacity);

  var interval1 = setInterval(function () {
    if (element.style.opacity > 0.3) element.style.opacity -= 0.1;
    else clearInterval(interval1);
  }, 200);
}
//mouse out
function resetOpacit(i) {
  var element = document.querySelectorAll("img")[i];

  element.style.opacity = 0.3;
  var interval2 = setInterval(function () {
    if (element.style.opacity < 1)
      element.style.opacity = parseFloat(element.style.opacity) + 0.1;
    else clearInterval(interval2);
  }, 200);
}

//bonus
// var im1=document.querySelectorAll("#marple img")[0]
// var mar = setInterval(function () {

//     },1000)

