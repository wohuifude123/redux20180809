# 视频审核系统

开发环境

| 顺序    | 指令       | 功能|
|  :----:|  :----: | :----: |
| 1 | npm run dev-dll   |      |
| 2 | npm run dev |      |





├── package.json    # 项目配置
├── src      # 源码目录
│ ├── pageA.html    # 入口文件a
│ ├── pageB.html    # 入口文件b
│ ├── css/     # css资源
│ ├── img/     # 图片资源
│ ├── js     # js&jsx资源
│ │ ├── pageA.js    # a页面入口
│ │ ├── pageB.js    # b页面入口
│ │ ├── lib/    # 没有存放在npm的第三方库或者下载存放到本地的基础库，如jQuery、Zepto、avalon
│ ├── pathmap.json   # 手动配置某些模块的路径，可以加快webpack的编译速度
├── webpack.config.js   # webpack配置入口