$(document).ready(function() {
  $(".pingit").click(function() {
    console.log("click")

    var number = $("#number").val()
    $(".results").append(Pingfxn(number));
  });
});

function Pingfxn(TheNumber) {
  console.log(TheNumber)
  const results = []
  for (number = 1; number < parseInt(TheNumber) + 1; number++) {
    console.log(number, TheNumber)
    var Three = number % 3 === 0;
    var Five = number % 5 === 0;
    var Fifteen = number % 15 === 0;

    if (Three) {
      results.push("<br>ping</br>")
    } else if (Five) {
      results.push("<br>pong</br>")
    } else if (Fifteen) {
      results.push("<br>pingpong</br>")
    } else {
      results.push("<br>" + number + "</br>")
    }
  }
  return results.join(" ")
}
