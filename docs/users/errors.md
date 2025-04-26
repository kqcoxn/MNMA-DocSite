# 问题排查

## 问题自检

如果您在使用 MNMA 时遇到了问题，请先按如下步骤进行自检：

1. 确保**模拟器使用 mumu12**，模拟器**设置开启本地 ADB**，**分辨率比例为 16:9**
2. 确保电脑**没有启用火绒或电脑管家**等防火墙（360 已适配）
3. 确保没有其他游戏脚本类软件在操作模拟器
4. 尝试使用**管理员权**限打开 MNMA

若以上问题均未解决，请继续阅读。

## 反馈问题

如果本节后续收录内容没有解决您的问题，您可以在 Github 提交 [issue](https://github.com/kqcoxn/MaaNewMoonAccompanying/issues?q=is%3Aissue)，或在 [QQ 群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=VMC132QhbMDLi5U62MlDRvtCMj9WOXRr&authKey=yJNKO4sQ%2BBFHpBCLSSEvVOAyz%2FPjknNSl70W3ugg2%2BpELnKmEiHamj1emJMWcLwQ&noverify=0&group_code=993245868) 内礼貌请教群友，但**请确保已经查看过手册对应部分的说明**。

::: tip
本节会持续收录各位组长遇到的问题，所以**您的反馈将会有助于其他组长解决问题**！

在回答其他群友问题时，您可以直接引用本页面连接，方便群友查看。
:::

若是群友没法解决您的问题，您需要做以下准备：

1. 复现问题情况，提供截图/视频
2. 提供 MNMA 根目录下 `/debug/maa.log` 与 `/logslog-[最新的日期].txt`
3. 私聊群主，描述问题情况，发送以上内容

## 下载安装类

### Github 页面打不开/下载缓慢

国内对于 Github 的防火墙时有时无，且速度非常不稳定。如果条件允许，请使用网络代理或加速器访问。

如果您无法通过其他途径进入 Github 页面，或下载速度被限制，可以在 [QQ 群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=VMC132QhbMDLi5U62MlDRvtCMj9WOXRr&authKey=yJNKO4sQ%2BBFHpBCLSSEvVOAyz%2FPjknNSl70W3ugg2%2BpELnKmEiHamj1emJMWcLwQ&noverify=0&group_code=993245868) **群文件**内获取您需要的资源，包括 MNMA 压缩包、更新包等。

或者，您可以使用 [Mirror 酱](../users/install.md#mirror-酱支持) 作为镜像源下载。

### 更新失败

同上，可以在设计界面将 [Mirror 酱](../users/install.md#mirror-酱支持) 设为更新源。

## 程序运行类

### 缺少 xxx.dll/运行库/目标计算机积极拒绝

对于 Windows 需要在运行前安装运行库。

MNMA 需要 `VCRedist x64` (`Cli` 与 `Gui` 都需要) 和 `.NET 8` (使用 `GUI` 时需要)。

点击 [vc_redist.x64](https://download.visualstudio.microsoft.com/download/pr/285b28c7-3cf9-47fb-9be8-01cf5323a8df/8F9FB1B3CFE6E5092CF1225ECD6659DAB7CE50B8BF935CB79BFEDE1F3C895240/VC_redist.x64.exe) 下载安装 `VCRedist x64`，点击 [dotnet-sdk-8.0.5-win-x64.exe](https://download.visualstudio.microsoft.com/download/pr/ba3a1364-27d8-472e-a33b-5ce0937728aa/6f9495e5a587406c85af6f93b1c89295/dotnet-sdk-8.0.404-win-x64.exe) 下载安装 `.NET 8`。

若您已经存在运行库，请尝试选择修改/重装。

也可以右键开始按钮打开终端，在终端内粘贴以下命令回车以进行安装：

```shell
winget install Microsoft.VCRedist.2017.x64 Microsoft.DotNet.DesktopRuntime.8
```

在安装时，依次点下一步即可，建议不要随意更改环境运行库的安装路径。

### Agent 加载失败

基本是 Python 环境的问题，请按如下方法手动安装 Python 环境。

首先，安装最新版 Python，可以参考：[【Bilibili】Python 安装教程](https://www.bilibili.com/video/BV1f3411t73m)，请确保 Python 版本大于等于 `3.9.x`

然后，同时按下 `win + R` 键，输入 `cmd` 并点击确定。在弹出的终端中输入：

```shell
pip install maafw -i https://pypi.tuna.tsinghua.edu.cn/simple
```

待下载完毕，使用记事本或其他软件打开程序根目录 `/interface.json`，将 `agent` 字段的 `child_exec` 改为 `python`

重启 MNMA 并重新尝试加载 Agent

### SSL Error

尝试关闭代理/梯子，并重启 MNMA

## 任务类

### 清体力任务卡在配队界面

> 此问题感谢交流群 **@寒江雪** 的协助测试

确保电脑没有启用火绒或电脑管家等防火墙（360 已适配）

或将 `MNMA根目录`、`MFAAvalonia.exe`、`/python/python.exe` 分别添加至杀毒软件白名单/信任区

若还是不行，多半是系统环境有未知不兼容源，重装系统外无力回天（
