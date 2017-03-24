# 错误信息

API请求失败时返回的错误信息说明。其中msg字段包括具体错误信息说明，status是错误代码。

# 目录
* [4001: APPID_APPSECRET_NOT_FOUND](https://jeocloud-tech.github.io)
* [201: EMPTY_PICTURE](https://jeocloud-tech.github.io)
* [202: FACE_NOT_DETECT](https://jeocloud-tech.github.io)
* [204: TOO_MANY_REQUEST](https://jeocloud-tech.github.io)
* [403: BROKEN_IMAGE](https://jeocloud-tech.github.io)

---------

# APPID_APPSECRET_NOT_FOUND

appId或者appSecret验证信息出错，请联系厂商检查

```md
{
  "status": 4001
  "msg": "请求参数未带appId和appSecret",
}
```

---------

# EMPTY_PICTURE

请求的图片参数为空，请检查对应的图片参数

```md
{
  "status": 201
  "msg": "empty image",
}
```

---------

# FACE_NOT_DETECT

图片中检测不到人脸，请确保人脸尺寸大于40*40

```md
{
  "status": 202
  "msg": "cannot detect face",
}
```

---------

# TOO_MANY_REQUEST

请求过于频繁，请稍后

```md
{
  "status": 204
  "msg": "too many request",
}
```

---------

# BROKEN_IMAGE

请求的图片格式应为JPG，PNG，BMP格式，请检查格式是否正确或者图片是否损坏

```md
{
  "status": 403
  "msg": "broken image",
}
```