# prettier 格式化工具配置

- 按照 vscode 插件 prettier eslint
- 追加加 setting.json 内容到 vscode 的 settings.json
- 项目添加.pretterrc.js 和 .eslintrc.js
- npm 包添加 package.json 里的包
- 安装 npm 全局包 pretter
- 添加 fix script

```json
{
  "prettier-fix": "prettier --write demo/**/*.{vue,ts,js}",
  "eslint-fix": "eslint demo/**/*.vue demo/**/*.js demo/**/*.ts  --fix",
  "fix": "npm run prettier-fix&&npm run eslint-fix"
}
```
