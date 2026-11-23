# 个人学术主页使用说明

## 首次发布或替换旧版
将本文件夹全部文件上传到 `Li-Guoyu-BUPT.github.io` 仓库根目录。旧版用户需要一起更新 index.html，并新增 content.js 和 render.js。Settings → Pages → main → / (root)。

## 日常更新：只修改 content.js
在 GitHub 中打开 content.js → 点击铅笔 → 修改文字 → Commit changes。等待 Pages 部署完成后刷新。

- profile：姓名、学校、邮箱、GitHub 地址；photo 留空显示姓名缩写。上传照片后可填 "assets/portrait.jpg"。
- headings：各栏目标题。
- about：每个双引号字符串是一段介绍。
- news：每条动态有 date（日期）、title（标题，可留空）、body（正文）。新的动态放在最前面，按文件顺序显示。
- interests：研究方向的标题和正文。
- experience：研究经历的日期、标题、机构与正文。
- honors：奖项标题和说明。

### 新增一条 News
在 news 的方括号中，现有条目前插入：

```js
{
  "date": "2026.11",
  "title": "你的动态标题",
  "body": "你的动态正文。"
},
```

此日期只是格式示例，不代表已有研究的开始时间。可写中文或英文；无需 HTML 标签。

请保留双引号、逗号及括号。正文中需要英文双引号时写成 \"，换行写成 \n。整条删除时注意相邻条目间的逗号。输入的文字按纯文本显示，不执行 HTML。

## 页面文件
content.js 是启用 JavaScript 时的唯一内容来源。render.js 负责排版，style.css 负责样式，无需修改。index.html 保留初始静态内容作为禁用 JavaScript 时的备用显示；正常浏览器会用配置替换内容。本地直接打开 index.html 也可预览，不需要安装依赖。
