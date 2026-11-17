# 李松特 · Songte Li

参考用户提供图片制作的简约个人学术主页：暖白背景、低饱和橙色标题、左侧个人信息、右侧紧凑内容。

## 查看与修改

双击 `index.html` 即可打开。无需安装依赖，也不需要构建。

- `index.html`：个人简介、教育、实习、论文与项目的精简内容。
- `styles.css`：桌面双栏、移动端适配、深浅配色。
- `app.js`：配色切换与复制邮箱。
- `favicon.svg`：姓名字母图标。

可在此目录运行 `python3 -m http.server 8765 --bind 127.0.0.1`，随后访问 `http://127.0.0.1:8765`。

内容依据两份简历。上海交通大学为保研拟录取，预计 2027 年入学；目前在同济大学就读。论文链接为 IEEE Xplore 标题检索。没有照片或社交账号，当前用姓名字母标志，不填充虚构链接。机构图片来自各机构官网，来源和裁切说明见 logo-sources.md。

## 发布

将目录文件放到自己的 GitHub 仓库，在 Settings → Pages 选择对应分支与根目录即可；已含 `.nojekyll`。也可使用其他静态托管服务。网站已发布到 https://lisongte.github.io/ 。

源码仓库：https://github.com/Lisongte/Lisongte.github.io

托管方式：GitHub Pages，从 main 分支根目录发布，强制 HTTPS。已在正式网址验证页面样式和配色切换。

2026-11-17 更新：正文 16px、辅助文字 14px、栏目标题 21px；邮箱直接显示 @；四个机构均使用官方标识，响应式布局同步调整。
