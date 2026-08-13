# 沙雕智能体官网（shadiao-website）

沙雕智能体（ShaDiaoAI）官方落地页 —— 「大魏王朝 1.0」的宣传与下载站。

> 单文件静态站：整个页面由 `index.html` 一个文件承载，配合 CDN 引入的 Tailwind CSS，部署于 GitHub Pages。

## 页面内容

- 🏰 **Hero 首屏** — App 图标、主标题「沙雕智能体 1.0：大魏王朝」、macOS / Windows 下载按钮
- 👥 **大魏王朝人物图鉴** — 13 位沙雕人物的展示区，支持按稀有度（普通 / 稀有 / 史诗 / 传说）过滤，含隐藏款「大魏太子虾仁」（黑影 + 问号）
- ✨ **核心特性** — Claude Agent SDK 集成、多模型切换、13 位独立人格、盲盒抽卡收集
- 📥 **下载区** — macOS / Windows 双平台
- 📋 **Footer** — 微信公众号入口等

## 技术栈

- 纯静态：单文件 `index.html`，无构建步骤
- Tailwind CSS（CDN）+ 少量手写 CSS / JS
- 人物图片：`images/characters/` 下的 preview PNG（360×640）

## 本地预览

直接双击打开 `index.html` 即可；或起一个本地静态服务：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 目录结构

```
.
├── index.html        # 唯一页面
├── DESIGN.md         # 视觉与页面结构设计方案
├── images/
│   ├── icon.png / icon.svg / shadiao-logo.png / wechat-qr.jpg
│   └── characters/   # 13 位人物 preview.png
└── .gitignore
```

## 部署

GitHub Pages：`Settings → Pages`，Source 选 `main` 分支根目录。

仓库：<https://github.com/ShaDiaoAI/shadiao-website>
