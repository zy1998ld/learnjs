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

/* function order(array) {
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
console.log(order([1, 2, 3, 5, 8, 9])); */
/* if (3 < 5) {
  var var_name = 3;
}
console.log(var_name); */
/* var obg = {
  uname: "zy",
  sex: "na",
  say: function () {
    console.log("22");
  },
};
obg.say();
console.log(obg.sex); */
/* var keke = {
  kname: "可可",
  type: "alasijia",
  age: "15",
  color: "zong",
  skill: "brak",
  skill2: "show",
  printkeke: function () {
    var all = [
      this.kname,
      this.type,
      this.age,
      this.color,
      this.skill,
      this.skill2,
    ];
    console.log(all);
  },
};

console.log(keke); */
/* var mingren = new Object();
mingren.kname = "鸣人";
mingren.sex = "男";
mingren.age = 19;
console.log(mingren); */
/* function Hero(uname, type, blood, attack) {
  this.name = uname;
  this.type = type;
  this.blood = blood;
  this.attack = attack;
}
var lianpo = new Hero("lianpo", "liliang", "500", "jinzhan");
console.log(lianpo);
for (k in lianpo) {
  console.log(lianpo[k]);
}
 */
/* var obj = {
  uname: "che",
  weight: "110g",
  color: "red",
  laren: function () {
    console.log("la");
  },
};
var obj1 = new Object();
obj1.uname = "zy";
console.log(obj1);

function Obj1(weight, color) {
  this.weight = weight;
  this.color = color;
}

var che1 = new Obj1(110, "red");
console.log(che1); */
/* function reverse() {
  for (let i = 0; i < arguments.length; i++) {
    for (j = 0; j < arguments.length - 1; j++) {
      if (arguments[j + 1] > arguments[j]) {
        var temp = arguments[j + 1];
        arguments[j + 1] = arguments[j];
        arguments[j] = temp;
      }
    }
  }
  return arguments;
}
console.log(reverse(1, 2, 3, 4, 5, 1, 5));

function rev() {
  for (let i = 0; i < arguments.length; i++) {
    var temp = arguments[arguments.length - i - 1];
    arguments[arguments.length - i - 1] = arguments[i];
    arguments[i] = temp;
  }
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
rev(1, 2, 3, 4);
var array = [1, 2, 3, 4];
var temp = array[0];
array[0] = array[3];
array[3] = temp;
console.log(array); */
/* function getint(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getint(1.1, 9.8));
 */
/* function caishuzi(value) {
  var value_r = Math.floor(Math.random() * 10) + 1;
  for (let i = 1; i <= 10; i++) {
    var value = prompt("shuzi");
    if (value > value_r) {
      alert("大了，还有" + (10 - i) + "次机会");
    } else if (value < value_r) {
      alert("小了,还有" + (10 - i) + "次机会");
    } else {
      break;
    }
  }
}
caishuzi(); */
/* var today = new Date("1998-2-1 8:20:59");
console.log(today);
console.log(today.getMonth()); */

/* function getdaojishhi() {
  var enddate = +new Date("2022-4-13 00:00:00");
  var now = +new Date();
  var diff = enddate - now;
  var diff_obj = {
    day: parseInt(diff / (60 * 60 * 24) / 1000),
    h: parseInt((diff / 1000 / (60 * 60)) % 24),
    minute: parseInt((diff / 1000 / 60) % 60),
    s: parseInt((diff / 1000) % 60),
  };
  diff_obj.day > 10 ? diff_obj.day : "0" + diff_obj.day;
  return console.log(
    diff_obj.day + " " + diff_obj.h + ":" + diff_obj.minute + ":" + diff_obj.s
  );
}
getdaojishhi(); */
/* var array = new Array(2, 3, 5, 8, 9);
console.log(array.push(5, 2, 6));
console.log(array); */
/* var arr = new Array(1500, 12, 2000, 2100, 1800);
var arr_ori = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 2000) {
    // arr_ori[arr_ori.length] = arr[i];
    arr_ori.push(arr[i]);
  }
}
console.log(arr_ori);
console.log(arr.reverse());
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
);
arr.push(120);
console.log(arr.indexOf(120));
console.log(arr.lastIndexOf(120)); */
/* for (let i = 0; i < arr.length; i++) {
  var arr_new = [];
  arr_new[i] = arr.indexOf(arr[i]);
}
console.log(arr_new); */
/* function unique(arr) {
  var arr_new = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr_new.indexOf(arr[i]) === -1) {
      arr_new.push(arr[i]);
    }
  }
  return arr_new;
}
var arre = ["c", "a", "z", "a", "x", "a", "x", "c", "b"];
console.log(unique(arre)); */
/* var arre = ["c", "a", "z", "a", "x", "a", "x", "c", "b"];
var arr2 = [1, 2];
var arr_end = arr2.concat(arre);
console.log(arr_end);
var arr_splice = arr_end.splice(1, 5);
console.log(arr_splice);
var arr_slice = arr_end.slice(0, 4);
console.log(arr_end);

console.log(arr_slice);
 */
/* var str = "abcoefoxyozzopp";
var index = str.indexOf("o");
while (index !== -1) {
  console.log(index);
  index = str.indexOf("o", index + 1);
} */
// var str = new String("abcoefoxyozzopp");
/* var obj = {};
console.log(str[1]);
for (let i = 0; i < str.length; i++) {
  var index = str.charAt(i);
  if (obj[index]) {
    obj[index]++;
  } else {
    obj[index] = 1;
  }
}
console.log(obj);
var max_value = 0;
var max_char = "";
for (let k in obj) {
  if (obj[k] > max_value) {
    max_value = obj[k];
    max_char = k;
  }
}
console.log(max_value);
console.log(max_char);
console.log(str.substring(1, 0)); */
// console.log(str);
/* while (str.indexOf("o") !== -1) {
  str = str.replace("o", "*");
}
console.log(str);
console.log(str.replace(/[^*]/, "o"));
 */
const str = "abaasdffggghhjjkkgfddsssss3444343";
var obj = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
};
console.log(str.length);
for (i in obj) {
  console.log(str[i] + "\n");
}
console.log(str.indexOf("i"));
console.log(str.lastIndexOf("a"));
console.log(str.replace("g", "22"));
var str_rep = str;
while (str_rep.indexOf("g") !== -1) {
  str_rep = str_rep.replace("g", 22);
}
console.log(str_rep);
console.log(str.substring(1, 5));
var obj_max = {};
for (let i = 0; i < str.length; i++) {
  if (obj_max[str[i]]) {
    obj_max[str[i]]++;
  } else {
    obj_max[str[i]] = 1;
  }
}

console.log(obj_max);
var max_value = 0;
var max_char = "";
for (let k in obj_max) {
  if (obj_max[k] > max_value) {
    max_value = obj_max[k];
    max_char = k;
  }
}
console.log(max_value);
console.log("最大的字符" + max_char);
