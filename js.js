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
/*
var sum_7 = 0;
 for (let i = 1; i <= 100; i++) {
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

/* var input = prompt("1234") - 0;

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
} */
/* var array = [2, 6, 1, 77, 52, 25, 7];
var max = array[0];
var min = array[0];
for (let i = 0; i < 6; i++) {
  if (array[i + 1] > max) {
    max = array[i + 1];
  }
  if (array[i + 1] < min) {
    min = array[i + 1];
  }
}
console.log(max);
console.log(min); */
/* var array = ["red", "green", "blue", "yellow"];
var str_0 = "";
for (let i = 0; i < array.length; i++) {
  str_0 += array[i] + "|";
}
console.log(str_0);
array = "13";
console.log(typeof array); */
/* var array = [];
for (let i = 0; i < 10; i++) {
  array[i] = i + 1;
}
console.log(array); */
/* var array = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var array_0 = [];
var j = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    array_0[j] = array[i];
    j++;
  }
}
console.log(array_0); */
/* var array = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var array_0 = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] != 0) {
    array_0[array_0.length] = array[i];
  }
}
console.log(array_0); */
/* var array = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var array_0 = [];
for (let i = 0; i < array.length; i++) {
  array_0[array.length - i - 1] = array[i];
}
console.log(array_0);
var array_order = [];
var temp = 0;
for (let j = 0; j < 5; j++) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}
console.log(array); */
/* function summary(fir, las) {
  var sum = 0;
  for (i = fir; i <= las; i++) {
    sum += i;
  }
  return sum;
}
console.log(summary(1, 100)); */
/* function getmax(a) {
  for (i = 0; i < a.length - 1; i++) {
    var max = a[i + 1] < a[i] ? a[i] : a[i + 1];
  }
  return max;
} */
/* var str = [5, 2, 99, 101, 67, 120];
console.log(getmax(str));
function get_max(num1, num2) {
  return [num1 + num2, num1 * num2];
}
console.log(get_max(5, 3)); */
/* function getmax() {
  var max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    max = arguments[i] > max ? arguments[i] : max;
  }
  return max;
}

for (i = 0; i < 5; i++) {
  var num = prompt("第" + (i + 1) + "个数");
}
console.log(getmax(num[0], num[1], num[2], num[3], num[4])); */
/* function reverse(array) {
  var newarray = [];
  for (let i = 0; i < array.length; i++) {
    newarray[i] = array[array.length - i - 1];
  }
  return newarray;
}
console.log(reverse([1, 2, 3, 4, 5])); */

function order(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[i - 1]) {
        var temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
      }
    }
  }
  return array;
}
console.log(order([1, 2, 3, 5, 8, 9]));
