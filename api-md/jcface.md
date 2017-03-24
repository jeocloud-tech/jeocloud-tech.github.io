# 人脸识别API文档

调用者提供图片文件或者图片URL，进行人脸检测和人脸分析。

# 目录
* [/v1/compare](https://jeocloud-tech.github.io#v1compare)

---------

## /v1/compare

## 功能

计算两个图片中人脸的相似度

## 请求方式

HTTP POST

## 地址

http://api.jeocloud.com/jcfacepp/v1/compare

## 参数

```md
appId: "cf53be77-f788-4353-8ae5-ce8346bf6d7f" //字符串，app id
appSecret: "46d41864-5cf9-4405-8f91-04c022edbe14" //字符串，app secret
file: //上传比对的第一张图片
file: //上传比对的第二张图片
```

## 响应

```md
{
  "data": {
    "result": 0.5584791259262493 //相似度
  },
  "msg": "OK",
  "status": 200
}
```

## cURL示例

```md
curl -X POST -H "Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" -H "Cache-Control: no-cache" -H "Postman-Token: 4bbc3cbc-fffc-cc2e-8153-9b5327920238" -F "appId=cf53be77-f788-4353-8ae5-ce8346bf6d7f" -F "appSecret=46d41864-5cf9-4405-8f91-04c022edbe14" -F "file=@1.jpg" -F "file=@2.jpg" "http://api.jeocloud.com/jcfacepp/v1/compare"
```