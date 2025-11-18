let cnt=0;

document.getElementById("btn1").addEventListener("click", function () {

  cnt++;
  document.getElementById("count").innerHTML = cnt;
});

document.getElementById("btn2").addEventListener("click", function () {

  cnt=cnt+2;
  document.getElementById("count").innerHTML = cnt;
});

document.getElementById("btn3").addEventListener("click", function () {

 cnt--;
 document.getElementById("count").innerHTML = cnt;
});