/* var hor = prompt("多少行") - 0;
var ver = prompt("多少列") - 0;
var str_ori = "";
for (let i = 1; i <= hor; i++) {
  for (let i = 1; i <= ver; i++) {
    str_ori += "웃";
  }
  str_ori += "\n";
}
console.log(str_ori);
 */
/* var str2 = "";
 for (var i = 1; i <= 8; i++) {
  for (var a = i; a <= 8; a++) {
    str2 += "웃";
  }

  str2 += "\n";
}
console.log(str2); */
/* var str3 = "";
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    str3 += j + "*" + i + "=" + i * j + "\t";
  }
  str3 = str3 + "\n";
}
console.log(str3);
 */
/* var num = 0;
var i = 1;
while (i <= 100) {
  num += i;
  i++;
}
console.log(num); */
/* do {
  var msg = prompt("你会爱我吗");
} while (msg !== "我爱你"); */

var sum_7 = 0;
/* for (let i = 1; i <= 100; i++) {
  sum_7 += i;
  if (i % 7 == 0) {
    continue;
  }
}
console.log(sum_7); */
/* do {
  var admin = prompt("用户名");
  var password = prompt("密码");
} while (admin !== "admin" && password !== "123");
alert("成功"); */

var input = prompt("1234") - 0;

switch (input) {
  case 1:
    var input_value = prompt("值") - 0;
    alert("余额" + (100 + input_value));
    break;
  case 2:
    var input_value = prompt("值") - 0;
    alert("余额" + (100 - input_value));
    break;
  case 3:
    alert("余额" + 100);
    break;
  case 4:
    alert("tuichu");
    break;
  default:
    alert("cx");
}
