# shell 美化
用户shell配置文件为`~/.bashrc`，系统shell配置文件为`/etc/bash.bashrc`。
## 命令提示符
\u - 用户名
\h – 主机名
\w - 当前工作目录的完整路径
```shell
vim ~/.bashrc
# 修改命令提示符格式为
#┌──(jfs㉿kali)-[~/Desktop] 
#└─$
#添加
[export] PS1="\[\e[0;32m\]┌──(\[\e[0;35m\]\u\[\e[0;32m\]㉿\[\e[0;35m\]\h\[\e[0;32m\])-\[\e[0;34m\][\w]\[\e[0;32m\]\n└─$\[\e[0m\] "
```