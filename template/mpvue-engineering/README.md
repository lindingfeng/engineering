# mpvue-engineering

> --- 基于mpVue小程序工程化实践 ---

## 项目目录

``` bash
├─build  webpack构建目录
├─config  webpack配置目录
├─dist  打包目录
│  └─wx  目录环境
│      └─demo  项目目录
│          ├─common
│          ├─components
│          ├─pages
│          ├─projects
│          │  └─demo
│          │      ├─components
│          │      └─pages
│          └─static
│          └─app.js
│          └─app.json
│          └─app.wxss
├─src  开发目录
│  ├─apis  通用接口目录
│  ├─assets  通用静态文件目录
│  ├─components  通用组件目录
│  ├─config  通用配置目录
│  ├─global  全局目录
│  │  ├─css
│  │  └─js
│  ├─projects  项目总目录
│  │  └─demo  项目目录
│  │      ├─apis  项目接口目录
│  │      ├─components  项目组件目录
│  │      ├─config  项目配置目录
│  │      ├─store  Vuex目录
│  │      ├─pages  项目页面目录
│  │      │  └─index  index页面目录
│  │      │     ├─index.vue
│  │      │     └─main.js
│  │      └─utils  项目工具目录
│  └─utils  通用工具目录
└─static  通用静态文件目录
```

## Build Setup

``` bash
# 安装依赖
yarn install

# 开发时构建
npm dev demo

# 打包构建
npm build demo

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build demo --report
```
