# changelog

## 9 月 24 日，code-review 主要讨论的问题

1. "UI 还原度"问题，单独拿出来进行，不与 code-review 一起；
2. 时间：1. 对接接口完成之后，代码提测之前；
3. 形式：小组内，依据项目开发进度，需要上线发布的代码，都最好进行 code-review；
4. 外包类的项目，也需要遵循基本的规范；
5. **eslint**，更多的配置规则，后续会出一套基础的项目模板，添加 eslint 基本规则；
6. 组件命名规范，大写字母开头的形式(PascalCase，单词首字母大写命名)，和 DemoComponent/index.vue 的形式，都能接受，但同一项目最好只出现一种，避免不统一的问题。
7. service/api 文件目录，请求接口的地址，直接请求地址写在接口内，不需要单独声明一个常量再引用；
   1. 存放请求服务，三方服务等；
8. class，中划线链接形式，需要符合简单的语义；
9. mixins，非公共混入，其他就近存放，类似 component；
10. 带样式的语义化标签不推荐，如 strong，或者预先有重置该样式；
11. **reset 样式文件**要统一，区分 h5 和 pc；
12. review 记录模板；
13. code-review 记录存放位置；
    1. readme 内？；
    2. 语雀项目说明文档后添加一个新的文档？

### 可能的问题

1. 元素的 class 使用 [bem 命名风格](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-[%E8%A7%84%E8%8C%83]--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)(`type-block__element_modifier`)，还是一般的语义化的中划线组合(avatar-wrap，record-list)；

   1. element 组件库及 vant 组件库，基本是 bem 的这个规则；
   2. 第二种明显更方便一点，很多时候，第二种都不一定能都是具有语义化的组合；

2. 两种组件的命名规范，OrderList/index.vue，子组件存放在当前文件夹，还是 OrderList.vue，子组件统一存在模块下的 components 下；

3. review 的时间点；
4. 接口的地址声明为一个常量还是直接在 services/api.js 下使用，接口地址一般也只会在接口请求的时候使用?
5. 如何体现对代码的 review 过程？文档记录的形式还是邮件的形式？

### 参考资料

1. [CodeReview 规范](https://www.jianshu.com/p/f79c4e948954)
2. [如何高效迅速的进行 CodeReview](https://www.jianshu.com/p/e9f9aef9a0e9)
3. [VUE 项目规范](https://www.jianshu.com/p/0a6684ccff08)
4. [CSS BEM 书写规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-[%E8%A7%84%E8%8C%83]--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)

### 解决

1. 对于基础的点，已修改；
2. 给出基础的模板`vue-ts`；
3. 存放位置（语雀）。

## V2

1. 是否需要信任，每次提交，是否需要 code review；
2. 已经一段时间，是否遇到什么问题；
3. 整理一下，敲定标准。
