# 目录FHS标准
根据FHS的标准文件指出，他们的主要目的是希望让使用者可以了解到已安装软件通常放
置于那个目录下， 所以他们希望独立的软件开发商、操作系统制作者、以及想要维护系统的
使用者，都能够遵循FHS的标准。 也就是说，FHS的重点在于规范每个特定的目录下应该要
放置什么样子的数据而已。 这样做好处非常多，因为Linux操作系统就能够在既有的面貌下
（目录架构不变）发展出开发者想要的独特风格。
## FHS标准的目录结构
- / （root）：根目录；
  > FHS标准建议：根目录（/）所在分区应该越小越好， 且应用程序所安装的软件最好不要
与根目录放在同一个分区内，保持根目录越小越好。 如此不但性能较佳，根目录所在的文件
系统也较不容易发生问题。
- /usr （unix software resource）：与软件安装/执行有关；
- /var （variable）：与系统运行过程有关；
- /etc （配置文件）：系统主要的配置文件都放在这里,如人员的账号密码(/etc/password),服务器启动资料,/etc/opt存放第三方软件/opt的配置文件；
- /bin （binary）：系统有很多放置可执行文件的目录，但/bin比较特殊。因为/bin放置的是在单人维护模式下还能够被操作的指令。 在/bin下面的指令可以被root与一般帐号所使用，主要有：cat, chmod, chown, date, mv, mkdir, cp, bash等等常
用的指令。
- /sbin （super user binary）：超级用户的二进制文件,一般是开机过程中需要的命令,只有root才能执行；
- usr/sbin 服务器软件程序
- /usr/local/sbin 本机自行安装软件所产生的系统可执行文件,如fdisk,fsck,ifconig.
- /boot （boot）：开机会用到的文件比如grub2开机管理程序
- /lib （library）：开机会用到的函数库,以及/bin或/sbin会用到函数库；
- /home （home）：用户的家目录；~表示当前用户的家目录；
- /root （root）：root用户的家目录；
- /tmp （temporary）：临时文件；
- /dev （device）：设备文件,比如/dev/sda1,/dev/null,/dev/zero
- /proc （process）：虚拟文件系统,放置的数据都是在内存当中的,例如系统核心,进程信息不占用硬盘空间,如/proc/cupinfo,/proc/dma,/proc/ioports,/proc/net/等；
- /sys （system）：虚拟文件系统记录核心和系统硬件相关的信息,如/sys/block,/sys/bus,/sys/class,/sys/dev等；
- /media （media）：软盘,光盘,DVD都会被挂载在这个目录下;
- /mnt （mount）：临时挂载点暂时挂载额外设备；
- /opt （optional）：第三方软件放置的目录,额外的非分发版提供的软件可以安装在这个目录下,也可以安装在/usr/local下；
- /run （run）：系统启动后,程序运行时的信息；
- /srv （service）：服务启动后,网络服务启动后,服务取用的数据目录,如网页服务数据放在/srv/www/中；
## usr目录的意义与内容
