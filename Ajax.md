# Ajax 学习之路 :mag:

<summary>目录</summary>

- [Ajax](#ajax简介)


## Ajax简介
- Ajax: Asynchronous Javascript and Xml,异步的JavaScript和xml可向浏览器发送异步请求，优势在于**不用刷新获取数据**，按需加载，速度更快，是一种混合的新方式
- XML：可拓展语言，用来**传输和存储数据**。与HTML相似，都是标记语言，由标签组成，不同的是HTML都是既定的标签，xml都是更具需求的自定义标签，但在AJAX中被json替代。
- json：`{‘name’：‘value’，‘’：’‘}`

特点：
|优点|缺点|
|---|:---|
|无刷新异步获取数据|没有浏览历史不能返回|
|根据用户**事件**更新页面|跨域，不同的网页之间不能相互发送ajax请求|
| |seo不友好,页面是通过js构建，源代码没有相关信息，不能爬虫获取|

http协议：hypertext transport protocol[超文本传输语协议，规定了浏览器和万维网服务器之间互相通信的规则，包括请求报文和响应报文
1. 请求报文
```
行      post   video/BV1WC4y1b78y?p=5    HTTP/1.1  
        (请求类型，url路径，http协议版本)
头      Host: baidu.com
        Cookie: name=baidu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
        等等（格式是名字+冒号+空格+值）
空行    必须
体      username=admin&password=admin (get方法没有，post会有，
        get请求会放在浏览记录，能被收藏，url可见)
```
2. 响应报文
```
行      http/1.1  200 ok
        (http版本，响应状态码404找不到，403被禁止，
        401未授权，500内部错误，200成功相应；相对应的响应字符)
头      Content-type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
        (对响应体的描述)
空行    必须
体      <html>
        <body></body>
        </html>
        (具体的html内容)
```
