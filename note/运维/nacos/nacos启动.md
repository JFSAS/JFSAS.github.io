# nacos启动
## 安装教程
也可以不配置自己的数据库，用nacos自带的数据库
```shell
sudo docker run --name nacos -e MODE=standalone -p 8848:8848 -p 9848:9848 -p 9849:9849 -d nacos/nacos-server
```
见[教程](https://blog.csdn.net/ilvjiale/article/details/129417768)
## 启动并开启鉴权
```shell
docker run ... \
-e NACOS_AUTH_ENABLE=true \
-e NACOS_AUTH_TOKEN_EXPIRE_SECONDS=18000 \
-e NACOS_AUTH_TOKEN=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg= \
-e NACOS_AUTH_CACHE_ENABLE=false \
...
```
- docker run -d ： 启动容器 -d是后台启动并返回容器id的意思
- --name nacos ： 容器名字
- -p 8848:8848 ： 端口映射，将容器的8848端口映射到宿主机的8848端口
- --env NACOS_AUTH_ENABLE=true ： 开启鉴权
- nacos/nacos-server ： 镜像名字
- -v /mydata/nacos/logs/:/home/nacos/logs : 将容器的/home/nacos/logs目录挂载到 /mydata/nacos/logs
- -v /mydata/nacos/conf/:/home/nacos/conf/： 将容器的/home/nacos/conf目录挂载到 /mydata/nacos/conf
