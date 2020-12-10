// (function () {
//   $('#password').focusin(function () {
//     $('form').addClass('up')
//   });
//   $('#password').focusout(function () {
//     $('form').removeClass('up')
//   });

//   // validation


//   $('.btn').click(function () {
//     $('form').addClass('wrong-entry');
//     setTimeout(function () {
//       $('form').removeClass('wrong-entry');
//     }, 3000);
//   });
// });
// // Panda Eye move
// $(document).on("mousemove", function (event) {
//   var dw = $(document).width() / 15;
//   var dh = $(document).height() / 15;
//   var x = event.pageX / dw;
//   var y = event.pageY / dh;
//   $('.eye-ball').css({
//     width: x,
//     height: y
//   });
// });


// document.getElementById("btnn").addEventListener("click", function () {
//   document.getElementById("formm").classList.add("wrong-entry");
//   setTimeout(function () {
//     document.getElementById("formm").classList.remove("wrong-entry");
//   }, 3000);
// });

// document.getElementById("password").addEventListener("focusin", function () {
//   document.getElementById("formm").classList.add("up");
// });
// document.getElementById("password").addEventListener("focusout", function () {
//   document.getElementById("formm").classList.remove("up");
// });