大家好，我是Guide哥，这篇文章中我会介绍10个非常不错的IDEA插件以及它们常见功能的使用方法。

>👉 **注意：这只是第一弹，后面的文章中，我会继续推荐一些我在工作中必备的 IDEA 插件以及他们的使用方法。**

**目录：**

<!-- TOC -->

- [IDE Features Trainer—IDEA交互式教程](#ide-features-traineridea%e4%ba%a4%e4%ba%92%e5%bc%8f%e6%95%99%e7%a8%8b)
- [GsonFormat+RoboPOJOGenerator—JSON转类对象](#gsonformatrobopojogeneratorjson%e8%bd%ac%e7%b1%bb%e5%af%b9%e8%b1%a1)
- [Translation-必备的翻译插件](#translation-%e5%bf%85%e5%a4%87%e7%9a%84%e7%bf%bb%e8%af%91%e6%8f%92%e4%bb%b6)
- [CamelCase-多种命名格式之间切换](#camelcase-%e5%a4%9a%e7%a7%8d%e5%91%bd%e5%90%8d%e6%a0%bc%e5%bc%8f%e4%b9%8b%e9%97%b4%e5%88%87%e6%8d%a2)

<!-- /TOC -->

### GsonFormat+RoboPOJOGenerator—JSON转类对象

这个插件可以根据Gson库使用的要求,将JSONObject格式的String 解析成实体类。

这个插件使用起来非常简单，我们新建一个类，然后在类中使用快捷键 `option + s`(Mac)或`alt + s` (win)调出操作窗口（**必须在类中使用快捷键才有效**），如下图所示。

![](./pictures/GsonFormat2.gif)

这个插件是一个国人几年前写的，不过已经很久没有更新了，可能会因为IDEA的版本问题有一些小Bug。而且，这个插件无法将JSON转换为Kotlin（这个其实无关痛痒，IDEA自带的就有Java转Kotlin的功能）。 

![](./pictures/GsonFormat1.png)

另外一个与之相似的插件是 **：RoboPOJOGenerator** ，这个插件的更新频率比较快。

`File-> new -> Generate POJO from JSON`

![](./pictures/RoboPOJOGenerator1.png)

然后将JSON格式的数据粘贴进去之后，配置相关属性之后选择“*Generate*”

![](./pictures/RoboPOJOGenerator2.png)



