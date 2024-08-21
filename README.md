<p align="center">
  <img width="320" src="https://wpimg.wallstcn.com/ecc53a42-d79b-42e2-8852-5126b810a4c8.svg">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/liuguowei4/vue-element-admin-electron/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/liuguowei4/vue-element-admin-electron/releases">
    <img src="https://img.shields.io/github/release/PanJiaChen/vue-element-admin.svg" alt="GitHub release">
  </a>
  <a href="https://gitter.im/vue-element-admin/discuss">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="gitter">
  </a>
  <a href="https://panjiachen.github.io/vue-element-admin-site/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>
</p>


## 前言
防止后续有系统配置问题，运行前记得先 **npx electron-forge import** 重新生成一下配置文件

## 开发环境运行
首先打开两个命令行，先在命令行1中执行 **npm run dev** 命令，待vue服务器打开。注意：要确定好本地服务器的地址，一定要与 **background.js** 里 **loadURL** 函数的地址对上

服务器打开后，在在命令行2中执行 **npm run start** 命令，开启应用，即完成项目运行。

## 生产环境打包
与开发环境一样，打开两个命令行，先在命令行1中执行 **npm run build** 命令，等待文件打包完成。注意：要确定好打包文件位置，一定要与 **background.js** 里**loadFile** 函数的对上

打包完成后，在命令行2中执行 **npm run make** 命令，将vue打包成应用程序。打包成功的执行程序在 **out/vue-element-admin-electron-win32-x64/electron-vue.exe** 查看，安装文件在查看 **out/make/squirrel.windows/x64/vue-element-admin-electron-1.0.0 Setup.exe** 处
