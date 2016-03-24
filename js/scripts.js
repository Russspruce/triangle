$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var line1 = parseInt($("input#line1").val());
    var line2 = parseInt($("input#line2").val());
    var line3 = parseInt($("input#line3").val());

    if(line1 && line2 && line3) {
      if ((line1 + line2) <= line3 || (line1 + line3) <= line2 || (line2 + line3) <= line1) {
        alert("Oh, that is not a triangle... try again")
      } else if (line1 !== line2 && line2 !== line3 && line1 !== line3) {
        alert("Cool, that is a scalene triangle!")
      } else if (line1 === line2 && line1 === line3) {
        alert("You have an equalateral triangle!")
      } else if (line1 === line2 || line2 === line3 || line1 === line3) {
        alert("Nice, that's an isosceles triange!")
      }
    // else if (line1 === "" || line2 === "" || line3 === "")
    } else {
      alert("ERR0R")
    }



    // event.preventDefault();
  });
});
