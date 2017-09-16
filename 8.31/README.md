# dj-deoms
dj 课程小案例
## 什么是 es 6 ？
es6.ruanyifeng.com
### class
clss关键字是es6的新特性
class定义类 类名首字母大写
### constructor 构造函数
面向对象编程
在对象被创建的时候自动被执行】
### 类的继承
class 类名 extends 要继承的类{}
const声明继承对象
extends 继承
子类对象添加this时报错，添加super()解决
### 模块
模块默认隔离所有内容
隔离： 在当前模块中声明一个变量或者函数，其他默认文件是访问不到的。
需要用到，明文导入导出
导入"import Person from "./Preson""
默认导出方式一个模块中，只能使用一次，一次只能导出一个变量 export default Person
### 解构赋值
const user = {name :'cz',age :'21',sss :'ssss'}
const {name,age,sss}=user
console.log(user.name);
### 模板字符串
let name="sjassada"
name=`my name is ${变量}`
### 胖箭头函数
const fun=(name)=> {
  console.log(name)
}
fun("sss")
参数一个去掉()方法一个去掉{}
默认就 return 最后一个
所以最终可以写成 const fun = name => name + name
### 数组扩展中find()和findIndex()
