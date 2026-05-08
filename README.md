# Mobile H5 App

基于 Vue3 + Vite + TypeScript 的移动端 H5 应用框架

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **TypeScript** - JavaScript 的超集，提供类型系统
- **Vue Router** - Vue.js 官方路由管理器
- **Pinia** - Vue 状态管理库
- **Axios** - Promise based HTTP 客户端
- **Vant** - 轻量、可靠的移动端组件库
- **UnoCSS** - 即时原子化 CSS 引擎
- **Sass** - CSS 预处理器

## 项目结构

```
src/
├── api/                 # API 接口封装
│   ├── request.ts      # Axios 请求封装
│   ├── user.ts         # 用户相关接口
│   └── index.ts        # API 导出
├── assets/             # 静态资源
├── components/         # 公共组件
│   ├── PageContainer.vue
│   ├── PageHeader.vue
│   ├── EmptyState.vue
│   ├── LoadingView.vue
│   ├── ErrorView.vue
│   └── SubmitBar.vue
├── config/             # 配置文件
│   └── app.ts          # 应用配置
├── layout/             # 页面布局
├── router/             # 路由配置
│   └── index.ts
├── stores/             # Pinia 状态管理
│   ├── user.ts         # 用户状态
│   ├── app.ts          # 应用状态
│   └── index.ts        # 状态导出
├── styles/             # 全局样式
│   ├── index.scss      # 全局样式入口
│   └── uno.config.ts   # UnoCSS 配置
├── utils/              # 工具函数
│   ├── storage.ts      # 本地存储封装
│   ├── device.ts       # 设备判断工具
│   ├── date.ts         # 日期处理工具
│   ├── validate.ts     # 表单验证工具
│   └── index.ts        # 工具导出
├── views/              # 页面视图
│   ├── HomeView.vue    # 首页
│   ├── LoginView.vue   # 登录页
│   ├── MineView.vue    # 我的页
│   └── NotFoundView.vue# 404 页
├── App.vue             # 根组件
└── main.ts             # 入口文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境启动

```bash
npm run dev
```

### 生产环境构建

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

### 代码格式化

```bash
npm run format
```

## 环境配置

项目支持多环境配置：

- `.env.dev` - 开发环境
- `.env.test` - 测试环境
- `.env.prod` - 生产环境

## 主要功能

### 1. 用户认证
- 登录/登出功能
- Token 自动管理
- 权限路由守卫

### 2. 移动端适配
- 基于 rem 的响应式布局
- iOS/Android 安全区适配
- 移动端交互优化

### 3. 统一请求封装
- Axios 基础封装
- 自动 Token 注入
- 统一错误处理
- 请求/响应拦截器

### 4. 状态管理
- 用户信息状态
- 应用全局状态
- 本地存储同步

### 5. 公共组件
- 页面容器组件
- 页面头部组件
- 加载状态组件
- 错误状态组件
- 空状态组件

## 开发规范

### 代码规范
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 和 Prettier 规范
- 组件命名使用 PascalCase
- 变量命名使用 camelCase

### 目录规范
- 功能单一，职责明确
- 公共组件放在 components 目录
- 业务页面放在 views 目录
- API 接口按模块划分

### 样式规范
- 使用 UnoCSS 原子化样式
- 全局样式使用 Sass
- 组件样式使用 scoped

## 移动端适配说明

项目采用 `lib-flexible` + `postcss-pxtorem` 方案进行移动端适配：

- 设计稿尺寸：750px
- 开发时直接使用 px 单位
- 构建时自动转换为 rem
- 基础字体大小：37.5px (1rem = 37.5px)

## 后续扩展建议

1. **业务页面开发**
   - 在 `views/` 目录添加新页面
   - 在 `router/index.ts` 配置路由
   - 在 `api/` 目录添加对应接口

2. **组件开发**
   - 通用组件放在 `components/` 目录
   - 业务组件可放在对应页面目录下

3. **状态管理**
   - 全局状态使用 Pinia
   - 局部状态使用 Vue Composition API

4. **样式扩展**
   - 全局样式在 `styles/` 目录
   - 使用 UnoCSS 预设或自定义规则

## 常见问题

### Q: 如何添加新的页面？
A: 在 `views/` 目录创建页面组件，然后在 `router/index.ts` 中添加路由配置。

### Q: 如何添加新的 API 接口？
A: 在 `api/` 目录创建对应的接口文件，使用已封装的 request 实例。

### Q: 如何进行主题定制？
A: 修改 `src/styles/uno.config.ts` 中的主题配置，或在 `styles/index.scss` 中添加自定义样式。

## 许可证

[MIT](LICENSE)