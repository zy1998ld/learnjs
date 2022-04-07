# css 学习之路 :mag:

<details> 
    <summary>目录</summary>

- [编程语言](#语言分类)
- [javaScript](#javascript-简介)
- [数据类型](#data-type)

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
    前置运算符：++var先自加1后返回值，var=10, ++var+10=21
    后置运算符：var++先返回值后自加1, var=10, var++ + 10=20,var=11
    var = 10,var++ + ++ var=10+11+1=22
3. 比较运算符
    =: 赋值符号
    \==和\!= :全等号会转型，3=='3',返回true
    \===和\!\== ：要求类型也要相等
4. 逻辑运算符
    `&&:and `` ||:or`  `!:not`
    - 逻辑短路&&：&&中左右表达式，如果左边是真则返回右边，若是否(0''NaN null undefined)则返回左边的原值，不是布尔值
    - 逻辑短路||:与&&相反，**短路了就不会再运行了**，var num=0,122 || num++ ,num的值还是0
