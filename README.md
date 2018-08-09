# 视频审核系统

### 开发环境

| 顺序    | 指令       | 功能|
|  :----:|  :----: | :----: |
| 1 | npm run dev-dll   | 开发环境 dll |
| 2 | npm run dev | 开发环境 |

### 生产环境

| 顺序    | 指令       | 功能|
|  :----:|  :----: | :----: |
| 1 | npm run build-dll   |   生产环境 dll |
| 2 | npm run build |  生产环境 |

### 其他指令

| 顺序    | 指令       | 功能|
|  :----:|  :----: | :----: |
| 1 | npm run epy   |   执行python3文件夹中代码 |

### MAC启动shell脚本设置本地环境变量

> 服务器上的etc文件夹非常重要

终端切换root用户

```
sudo -i
```

cd到本地configuration文件夹

```
cd /Users/abbott/Desktop/company/Lahaina/configuration
```

运行

```
execute-mac.sh
```

```
sudo vim /etc/profile
```

回退

```
git reset --hard 732c1c8b
```

强制执行

```
git push -u origin master -f
```

打包

```	
tar -czvf target_name.tar.gz ./Lahaina
```