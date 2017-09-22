function replaceNumbers(number) {
  for (var i = 0; i < numbers.length; i++) {
    if (number[i] % 15 === 0) {
      number[i] = "ping pong";
    } else if (numbers[i] % 5 === 0) {
      number[i] = "pong";
    } else if (number[i] % 3 === 0) {
      number[i] = "ping";
    }
  }
  return number;
}









// $(document).ready(function() {
//   $("#submit-button").click(function(e) {
//     e.preventDefault();
//     var number = $('#number').val(); {
//
//       var i = number;
//       $:
//         while (++i) {
//           if (i % 3)
//             if (i % 5)
//               console.log(i);
//             else
//               console.log('Ping');
//           else if (i % 5)
//             console.log('Pong');
//           else
//             console.log('PingPong');
//           if (i >= 100)
//             break $;
//         }
//       return;
//
//     }
//   })
// });
//
//
// // var number = x;
// //
// // for (x = 1; x <= 10000; x++) {
// //
// //   if (x % 3 == 0) {
// //     write("ping")
// //     continue
// //   }
// //   if (x % 5 == 0) {
// //     write("pong")
// //     continue
// //   }
// //
// //   write(x)
// //   return x;
// // }
// //
// //
