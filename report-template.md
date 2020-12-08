<!-- 示例模板 -->
# 互联网医院开发2.2(2020.11.30)

| **类目** | **说明** |
| :--- | :--- |
| 项目 | [互联网医院后台](https://gitlab.91jkys.com/web/minses-admin) |
| 发布版本 | 互联网医院运营后台2.2 |
| 当前状态 | 准备提测 |
| 发布日期 | 2020.12.09 |
| review 代码节点 | `feat: 测试环境发布  f2c83ef  weiweiqiu <qiuweiwei@91jkys.com>  2020年11月30日 18:52`|
| 参与人员 | 唐海龙、邱伟伟、谢彪飞、覃杰玲 |

<br />**问题：**<br />

1.将路由分块以适应项目规模变大的复杂需求。<br />

2.$set使用过多考虑优化<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/792943/1606737483774-f7c5fa61-e001-4e5e-99a7-09e71159ee71.png#align=left&display=inline&height=305&margin=%5Bobject%20Object%5D&name=image.png&originHeight=610&originWidth=1058&size=118360&status=done&style=none&width=529)<br />

3.业务逻辑代码过长，不明确的功能添加备注。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/792943/1606737680612-d7c067de-9a60-408c-8556-ea8be98e1243.png#align=left&display=inline&height=305&margin=%5Bobject%20Object%5D&name=image.png&originHeight=610&originWidth=1058&size=118360&status=done&style=none&width=529)<br />

4.读取属性过多，可以提取。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/792943/1606737904276-72be2d89-1635-40e6-b2b7-abdfa2082bd1.png#align=left&display=inline&height=93&margin=%5Bobject%20Object%5D&name=image.png&originHeight=185&originWidth=889&size=32509&status=done&style=none&width=444.5)<br />

5.建议使用v-for<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/792943/1606738618519-35b4b40d-ce78-4099-b2e6-c54f43c39f4f.png#align=left&display=inline&height=134&margin=%5Bobject%20Object%5D&name=image.png&originHeight=268&originWidth=1116&size=85375&status=done&style=none&width=558)<br />

6.资源文件用a标签<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/792943/1606739540628-bc9b2954-ead7-4cc6-89d7-29d7249e090d.png#align=left&display=inline&height=59&margin=%5Bobject%20Object%5D&name=image.png&originHeight=117&originWidth=744&size=7577&status=done&style=none&width=372)<br />

7.事件没有及时销毁。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/792943/1606739657398-89ef2f8a-8641-4532-81ca-83dd54bb671c.png#align=left&display=inline&height=234&margin=%5Bobject%20Object%5D&name=image.png&originHeight=467&originWidth=942&size=61923&status=done&style=none&width=471)<br />

8.缺省样式<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/792943/1606740112790-86f9b766-3fda-4a78-aa38-dd96d9ea4db1.png#align=left&display=inline&height=359&margin=%5Bobject%20Object%5D&name=image.png&originHeight=717&originWidth=946&size=49635&status=done&style=none&width=473)

解决：主要描述如何处理，是否已经完成修改。

## 说明

具体的review标准主要如下，主要关注如下的几个方面：

1. 功能完成度；
2. 代码结构，比如基本的代码复用/冗余代码/变量重复取值/基本的设计模式等；
3. 注意关注控制台的警告与报错问题；
4. 最好能给出一版的修改意见；
5. 对于被review的代码，需要修改后，在文档说明修改状况。