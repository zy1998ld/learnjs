# css 学习之路 :mag:

<details> 
    <summary>目录</summary>

- [编程语言](#语言分类)
- [javaScript](#javascript-简介)
- [数据类型](#数据类型)
- [运算符](#运算符)
- [流程控制](#流程控制)
- [数组](#数组)
- [函数](#函数)
- [作用域](#作用域)
- [作用域](#作用域)
- [预解析](#预解析)
- [对象](#对象)
</details>

### 语言分类

语言可以分为**机器语言**、**汇编语言**和**高级语言**

- 机器语言就是计算机二进制语言

* 汇编语言实质和计算机语言一样，都是直接对硬件进行操作
* 高级语言即程序代码

### javascript 简介

1. JavaScript 是运行在**客户端的脚本语言**，不需要编译，由 js 解释器进行**逐行**解释和执行但是也可通过*node.js*在服务器端执行

*[逐行]:当报错时，后面的程序就不会在执行

2. 浏览器分为两部分：渲染引擎和 js 引擎

1. 渲染引擎就是浏览器的内核，html+css，如 chrome 的 blink
1. js 引擎是 js 解释器，将 js 语言:arrow_right:机器语言，如 chrome 的 v8 引擎
1. compose of js
   1. ecmascript：JavaScript+Jscript，定义了 JavaScript 的基本语法
   1. API(application programming interface)：Dom+boom
      1. DOM(document object model):oriented mark language,define mechanism of operating mark-up language by standard interface
      1. BOM(Browser object model):interface with browser window document-independently, such as pop box
1. input and output of js
   input:`prompt(info)` import a string
   output:`alert('msg')` for browser and `console.log('msg')` for console
1. variable in special circumstances
   1. no declaration & no assignment:report an error
   2. no assign: report undefined message
   3. no declaration: normal operation but not recommand

### 数据类型

!!!note data type in javascript is weak and dynamic
weak:not define type of data,we can only know it in code running
dynamic:the type of data is not fixed but changed

1. sample type:
   1. number:
      - octal:begin with 0, 010 is 8
      - hexadecimal:begin with 0x, 0xa is 10
      - max(min) value:number.max(min)\_value
      - infinity:beyond the realm of number,number.max_value\*2
      - NaN:not a number,'a' - 1
   2. string:all subject in single quote(recommend) or two quote
      - tranferred meaning:\,'\n=newline' '\t=tab'
      - length: var.length, blank and hanzi is a length
      - link:+,'12'+ 12 = '1212'
      - **'string' + anything = 'string'**
   3. boolean:true=1 & false=0
   4. undifined:undifined + 'string' = undifinedstring <br> undifined + num = NaN
   5. null: null + 'string'= nullstring <br> null+num=num
1. transform of data type
   1. :arrow_right:**string**
      1. `tostring()`: var.tostring() 1.` string()`:string(var)
      1. `+`(implicat): var+ ' '
   2. :arrow_right:**number**
      1. parseInt and parseFloat: extract int and float parseint('12px1')=12 parseint('r1')=NaN
      2. number() and - / \*
   3. :arrow_right:boolean:Boolean(),**false:0 '' NaN undefined null**

### 运算符

1. 算数运算符：%用作取余，浮点数会有转换为二进制时会有精度问题，一般不要运算
2. 递增(减)运算符++：**只能用于变量**
   前置运算符：++var 先自加 1 后返回值，var=10, ++var+10=21
   后置运算符：var++先返回值后自加 1, var=10, var++ + 10=20,var=11
   var = 10,var++ + ++ var=10+11+1=22
3. 比较运算符
   =: 赋值符号
   \==和\!= :全等号会转型，3=='3',返回 true
   \===和\!\== ：要求类型也要相等
4. 逻辑运算符
   ` &&:and ` ` ||:or ` `!:not`
   - 逻辑短路&&：&&中左右表达式，如果左边是真则返回右边，若是否(0''NaN null undefined)则返回左边的原值，不是布尔值
   - 逻辑短路||:与&&相反，**短路了就不会再运行了**，var num=0<122 || num++ ,num 的值还是 0
5. 赋值运算符
   - num += 2 :arrow_right:num = num + 2
   - num _= 2 :arrow_right:num = num _ 2
6. 优先级
   ![运算符优先级](imgs/%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7.png)

### 流程控制

流程控制就是控制代码的执行顺序来实现功能，包括顺序结构、分支结构和循环结构

- 顺序结构：按照代码的先后顺序依次执行
- 分支结构：根据不同的条件进行执行不同的代码，即条件判断执行

  1.  if 分支：`if(条件表达式){条件成立语句}` `if else` `if(){} else if(){}`
  2.  三元表达式：`表达式 ? 表达式1 : 表达式2`相当于 ifelse,结果最好赋值变量
  3.  switch 分支：

  ```javascript
  switch(表达式){
     case value1:执行语句;break
     case value2:执行语句;break
     ...
     default:执行语句;
  }
  ```

  !!!note 表达式中的值与 value 匹配是使用的全等，即值和数据类型也要相等

  > default 表示的是没有匹配到时的情况
  > 没有 break 会导致下一个 case 不过满不满足条件都会输出，直到下一个 break 出现

  与 ifelseif 的区别：switch 用于值，分支比较多时效率高，另一个用于范围，分支小，分支多了效率就低，因为要执行的次数等于条件数

- 循环结构

  1.  for 循环：循环体+终止语句

  ```javaScript
  for(初始化变量;条件表达式;操作表达式){
     循环体
  }
  ```

  - 初始化变量一般是 Var 定义一个计数器变量
  - 条件表达式是满足表达式，当不满足时终止
  - 操作表达式是对初始化变量进行的操作，如 i++

  !!!note 浏览器中的 source 可以进行断点测试，断点之后要先刷新，同时可看到程序执行过程

  > 一行打印多个相同对象，可以用空字符串将原对象转换为字符串后进行处理
  > 换行可以用 str += '\n'(\t)实现

  - 多重 for 循环:内循环相当于外循环的执行，外循环每执行一次，内循环会全部执行,主要需要了解外循环和内循环的控制对象

  ```javascript
  for (var i = 1; i <= 8; i++) {
    for (var a = i; a <= 8; a++) {
      str2 += "웃";
    }

    str2 += "\n";
  }
  console.log(str2);
  ```

  2. while 循环

  ```javascript
  while (条件表达式) {
    循环语句;
    操作表达式;
  }
  ```

  !!!note 为了防止 while 死循环，需要在 while 里加计数器或操作表达式，如 i++ 
  3. do while 循环

  ```javascript
  do {
     循环体
  }while{条件语句}
  ```

  do while 和 while 的不同点在于会先做一次循环体，然后再判断语句，循环体中也需要操表达式，而且一般也更加简单 

  4. 循环关键词
  - continue:退出本次循环，跳到下一次，需要注意循环中的代码顺
  - break:立即退出整个循环

### 数组

数据是一组相关数据的集合，可存在单个变量下

1. 创建方式
   1. new 创建：var arr=new array()
   2. 利用数组字面量[]:var
      arr=[]中间的元素用，隔开
2. 获取数组元素
   1. 数据索引：**索引号(数组下标)是从 0 开始**
   2. 数组遍历：把数组元素全部访问，用 for 循环，i 应该从 0 开始
   3. 数组长度：同变量一样可以用`.length`来访问，长度等于元素个数
   4. 数组新增：
      1. 数组扩容：改变.length，新增加的元素默认为 undefined
      2. 数组元素：直接定义新的数据元素，但是不要直接数组名赋值
      3. 元素删除：数组元素的特定删除也可通过定义新数组将非某元素提取，其中在循环中可以用`newarr[newarr.length] = arr[i]`来进行新增
   5. 数组冒泡排序:是多次两两元素相比较，根据大小交换位置，一般需要用到双重 for 循环，里层控制各个元素的交换，外层控制交换次数

### 函数

可重复执行调用的代码块

```javascript
//定义
function 函数名(行参,形参...){
   //函数体
   return();
}
//调用
函数名(实参，实参...)

```

- 形参可以看作被声明的变量，对于实参数目大于形参，多的实参没用，对于实参数目小于形参，多的形参就是 undefined，一般计算结果为 NaN
- 函数也可以不带任何参数

  !!!note return 不仅具有返回值的效果，同时也会终止函数的运行，return 后的不会再执行。没有 return 会返回 defined
  !!!note return 每次只会返回一个值，中间逗号隔开的话只会返回最后一个值，若要返回多个值的话，可以用数组封闭

- arguments 的作用：当我们不知道参数的具体数量的时候，可以用 arguments 存储所有的实参，存储形式是伪数组(自己不要写数组,直接写元素就行)，具有数组的索引属性，但是不能用 pop，push 等函数。其实在所有函数中都会内置 arguments，arguments 一般写在函数体中

- 函数之间可以相互调用
- 函数的另一种声明方式(匿名函数): var 函数名=function(){}

### 作用域
指代码（变量）只在某个范围起作用，目的是减少命名冲突
1. 分类：全局作用域、局部作用域、块级作用域（es6）（在{}中的，外部不能调用）
   1. 全局作用域：对于整个js文件都有用
   2. 局部作用域：函数内部就是局部作用域，函数内部的变量命名只在函数中有用，不会与全局作用域相冲突
   3. 根据作用域可将变量分为全局变量和局部变量
   全局变量只有在关闭浏览器才会失效，占资源
   局部变量（函数内变量和形参）当执行完这段代码就失效，比较节省空间

!!!note 当变量定义时没有var，则也会被当作全局变量
2. 作用域链
每段代码都会有作用域，内部作用域可以调用外部作用域，当作用域中继续加函数生成新的作用域时，变量查找方式的**就近链式查找原则**

### 预解析
js引擎执行代码顺序：预解析+代码逐行执行。
预解析会将var 和 function定义提到当前作用域的最前面。分为变量预解析和函数预解析
1. 变量预解析：只会提升声明变量，不会提升赋值（函数定义第二种var fun=function这种也是变量）
console.log(a);var a=0;相当于var a;console.log(a);a=10
2. 函数预解析：将函数提升到当前作用域的最前面

!!!note var a=b=c=value相当于var a; a=b=c=value;b和c会被当作全局变量

### 对象
对象是*无序*的**属性**和**方法**的集合（属性是特征，名词；方法是行为，动词）,对象一般用于保存一个事物的完整信息
1. 创建对象的三种方式
   1. 字面量{}：var obj={属性1:value,属性2:value, ... ,函数:function(){this.属性},}; 对象的属性是使用键对值的方式表示，中间用，隔开。调用用obj.属性来调用
   2. new object:var obj=new object();obj.name=value;obj.sex=value...
   3. 利用构造函数创建：构造函数的包裹属性和方法，应用于对象含有相同的属性和方法，此方法也叫对象的实例化
   ```jsvascript
   function Star(uname, sex, age){
      this.name=uname;
      this.sex=sex;
      this.age=age;
   }
   var zy= new Star('zy','sex',age);
   ```
!!!note 1.为区分普通函数，构造函数的命名首字母需要大写，也没有return
!!!note 2.构造函数属性需要加this，实参和形参数目也最好相等
!!!note 3.构造函数调用需要加new

2. 遍历对象
``` jacascript
for (变量(k) in obj){
   console.log(k); //遍历对象的属性名
   console.log(obj[k]);  //遍历对象的属性值
}
```

