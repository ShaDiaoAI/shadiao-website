# 沙雕智能体官网（shadiao-website）

沙雕智能体（ShaDiaoAI）官方落地页 —— 「大魏王朝 1.0」的宣传与下载站。

> **正式官网：<https://shadiao.online/>**（已 ICP 备案，部署于腾讯云 COS + CDN，国内直连）
>
> ⚠️ GitHub Pages（`shadiaoai.github.io/shadiao-website`）**只是备份/历史部署，不是正式站点**。百度蜘蛛访问 `*.github.io` 会被 GitHub 返回 403，该地址**不会被百度收录**，因此不要把它当官网地址对外传播。
>
> 页面由 `index.html` 单文件承载，Tailwind CSS 为**本地构建**（见下文）。

## 页面内容

- 🏰 **Hero 首屏** — App 图标、主标题「沙雕智能体 1.0：大魏王朝」、macOS / Windows 下载按钮
- 👥 **大魏王朝人物图鉴** — 17 位沙雕人物的展示区，支持按稀有度（普通 / 稀有 / 史诗 / 传说）过滤，含隐藏款「大魏太子虾仁」（黑影 + 问号）
- ✨ **核心特性** — Claude Agent SDK 集成、多模型切换、17 位独立人格、盲盒抽卡收集
- 📥 **下载区** — macOS / Windows 双平台
- 📋 **Footer** — 微信公众号入口等

## 技术栈

- 纯静态：页面由 `index.html` 单文件承载
- **Tailwind CSS：本地构建**（`tailwind.config.js` + `build-css.sh` → `tailwind.css`）
  - 历史上用的是 `cdn.tailwindcss.com`（Play CDN）。实测国内响应约 **8 秒**且是渲染阻塞资源，严重影响首屏与搜索引擎抓取，因此改为本地构建。
  - ⚠️ **改动 `index.html` 后必须重新执行 `bash build-css.sh`**，否则新增的 class 不会出现在 CSS 里。`deploy.sh` 已自动包含这一步。
- 少量手写 CSS / JS（含稀有度过滤、OS 探测高光、滚动渐入）
- 人物图片：`images/characters/` 下的 preview PNG（360×640）

## 本地预览

```bash
bash build-css.sh                 # 首次或改动 index.html 后
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 目录结构

```
.
├── index.html          # 唯一页面
├── tailwind.config.js  # Tailwind 配置（含动态 class safelist）
├── tailwind.input.css  # Tailwind 入口
├── build-css.sh        # CSS 构建脚本
├── tailwind.css        # 构建产物（需与 index.html 一同部署）
├── robots.txt          # 爬虫规则（放行全部，含 AI 爬虫）
├── sitemap.xml         # 站点地图（新增页面后需同步更新）
├── llms.txt            # 品牌说明书，供 AI 爬虫读取
├── deploy.sh           # 部署到腾讯云 COS
├── DESIGN.md           # 视觉与页面结构设计方案
├── images/
│   ├── icon.png / icon.svg / shadiao-logo.png / wechat-qr.jpg
│   └── characters/     # 17 位人物 preview.png
└── .gitignore
```

## 部署

部署到腾讯云 COS（正式线路）：

```bash
bash deploy.sh
```

脚本会先构建 `tailwind.css`，再上传 `index.html` / `tailwind.css` / `images/` / `robots.txt` / `sitemap.xml` / `llms.txt`。

> ⚠️ 部署后需到 **CDN 控制台刷新 `index.html` 与 `tailwind.css`** 的缓存。两者是一起生效的，只刷一个会出现「新 HTML + 旧无 CSS」的裸页状态。

GitHub Pages 仅作备份部署（`Settings → Pages`，Source 选 `main` 分支根目录），**注意它不会被百度收录**。

仓库：<https://github.com/ShaDiaoAI/shadiao-website>

## 搜索引擎可见性

完整的国内搜索引擎可见性方案（现状体检、站长平台提交、品牌词矩阵、GEO）见：
`workspace-files/.context/shadiao-search-visibility-plan.md`
