import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"主页","icon":"home","type":"home","readingTime":{"minutes":1.54,"words":461},"excerpt":"👍官方知识星球 JavaGuide 官方知识星球来啦！！！如果你需要专属面试小册/一对一交流/简历修改/专属求职指南/学习打卡，不妨花 3 分钟左右看看星球的详细介绍： JavaGuide 知识星球详细介绍 （一定要确定自己真的需要再加入，一定要看完详细介绍之后再加我）。 用心做内容，真心希望帮助到你，拒绝知识付费割韭菜。加油！！！ 👉推荐阅读 Java"},["/index.html","/README.md"]],
  ["v-79fdd481","/home.html",{"title":"程序员必备工具库","icon":"creative","type":"article","readingTime":{"minutes":1.4,"words":419},"excerpt":"\" 1. 面试专版 ：准备面试的小伙伴可以考虑面试专版：《Java 面试进阶指北 》 (质量很高，专为面试打造，配合 JavaGuide 食用)\" \" 2. 转载须知 ：以下所有文章如非文首说明为转载皆为我（Guide 哥）的原创，转载在文首注明出处，如发现恶意抄袭/搬运，会动用法律武器维护自己的权益。让我们一起维护一个良好的技术创作环境！⛽️\" 你可能需要"},["/home","/home.md"]],
  ["v-43ef8de4","/idea-tips/idea-plug-in-development-intro.html",{"title":"IDEA 插件开发入门","type":"article","readingTime":{"minutes":9.29,"words":2788},"excerpt":"IDEA 插件开发入门 我这个人没事就喜欢推荐一些好用的 IDEA 插件给大家。这些插件极大程度上提高了我们的生产效率以及编码舒适度。 不知道大家有没有想过自己开发一款 IDEA 插件呢？ 我自己想过，但是没去尝试过。刚好有一位读者想让我写一篇入门 IDEA 开发的文章，所以，我在周末就花了一会时间简单了解一下。 不过，这篇文章只是简单带各位小伙伴入门一下 "},["/idea-tips/idea-plug-in-development-intro","/idea-tips/idea-plug-in-development-intro.md"]],
  ["v-2755dc00","/idea-tips/idea-refractor-intro.html",{"title":"IDEA 重构入门","type":"article","readingTime":{"minutes":1.74,"words":523},"excerpt":"IDEA 重构入门 我们在使用 IDEA 进行重构之前，先介绍一个方便我们进行重构的快捷键：ctrl+t(mac)/ctrl+shift+alt+t（如果忘记快捷键的话，鼠标右键也能找到重构选项），使用这个快捷键可以快速调出常用重构的选项，如下图所示： 重命名(rename) 快捷键：Shift + F6(mac) / Shift + F6(windows/"},["/idea-tips/idea-refractor-intro","/idea-tips/idea-refractor-intro.md"]],
  ["v-643c2b2c","/idea-tips/idea-source-code-reading-skills.html",{"title":"IDEA源码阅读技巧","type":"article","readingTime":{"minutes":5.65,"words":1696},"excerpt":"IDEA源码阅读技巧 项目有个新来了一个小伙伴，他看我查看项目源代码的时候，各种骚操作“花里胡哨”的。于是他向我请教，想让我分享一下我平时使用 IDEA 看源码的小技巧。 基本操作 这一部分的内容主要是一些我平时看源码的时候常用的快捷键/小技巧！非常好用！ 掌握这些快捷键/小技巧，看源码的效率提升一个等级！ 查看当前类的层次结构 使用频率 相关快捷键 ---"},["/idea-tips/idea-source-code-reading-skills","/idea-tips/idea-source-code-reading-skills.md"]],
  ["v-25d3dd86","/idea-plugins/camel-case.html",{"title":"Camel Case：命名之间快速切换","type":"article","readingTime":{"minutes":0.93,"words":279},"excerpt":"非常有用！这个插件可以实现包含6种常见命名格式之间的切换。并且，你还可以对转换格式进行相关配置（转换格式） Preferences / Settings | Camel Case 。 有了这个插件之后，点击你想要修改的变量或者方法名使用快捷键 shift+option+u(mac) / shift+alt+u 即可实现在多种命名格式之间切换。 如果你突然忘记","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/camel-case","/idea-plugins/camel-case.md"]],
  ["v-360a4bde","/idea-plugins/code-glance.html",{"title":"CodeGlance：代码微型地图","type":"article","readingTime":{"minutes":0.28,"words":84},"excerpt":"CodeGlance提供一个代码的微型地图，当你的类比较多的时候可以帮忙你快速定位到要去的位置。这个插件在我们日常做普通开发的时候用处不大，不过，在你阅读源码的时候还是很有用的，如下图所示：","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/code-glance","/idea-plugins/code-glance.md"]],
  ["v-7d35759d","/idea-plugins/code-statistic.html",{"title":"Statistic：项目代码统计","type":"article","readingTime":{"minutes":1.45,"words":436},"excerpt":"编程是一个很奇妙的事情，大部分的我们把大部分时间实际都花在了复制粘贴，而后修改代码上面。 很多时候，我们并不关注代码质量，只要功能能实现，我才不管一个类的代码有多长、一个方法的代码有多长。 因此，我们经常会碰到让自己想要骂街的项目，不过，说真的，你自己写的代码也有极大可能被后者 DISS。 为了快速分析项目情况，判断这个项目是不是一个“垃圾”项目，有一个方法","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/code-statistic","/idea-plugins/code-statistic.md"]],
  ["v-3013d9f0","/idea-plugins/git-commit-template.html",{"title":"Git Commit Template：提交代码格式规范","type":"article","readingTime":{"minutes":0.32,"words":95},"excerpt":"没有安装这个插件之前，我们使用IDEA提供的Commit功能提交代码是下面这样的： 使用了这个插件之后是下面这样的，提供了一个commit信息模板的输入框： 完成之后的效果是这样的：","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/git-commit-template","/idea-plugins/git-commit-template.md"]],
  ["v-5240ec8c","/idea-plugins/gson-format.html",{"title":"GsonFormat：JSON转对象","type":"article","readingTime":{"minutes":0.85,"words":255},"excerpt":"GsonFormat 这个插件可以根据Gson库使用的要求,将JSONObject格式的String 解析成实体类。 \" 说明：2021.x 版本以上的 IDEA 可以使用：GsonFormatPlus\" 使用起来非常简单，我们新建一个类，然后在类中使用快捷键 option + s(Mac)或alt + s (win)调出操作窗口（必须在类中使用快捷键才有效","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/gson-format","/idea-plugins/gson-format.md"]],
  ["v-4fa8e86c","/idea-plugins/idea-features-trainer.html",{"title":"IDE Features Trainer：IDEA 交互式教程","type":"article","readingTime":{"minutes":0.56,"words":168},"excerpt":"有了这个插件之后，你可以在 IDE 中以交互方式学习IDEA最常用的快捷方式和最基本功能。 非常非常非常方便！强烈建议大家安装一个，尤其是刚开始使用IDEA的朋友。 当我们安装了这个插件之后，你会发现我们的IDEA 编辑器的右边多了一个“Learn”的选项，我们点击这个选项就可以看到如下界面。 我们选择“Editor Basics”进行，然后就可以看到如下界","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/idea-features-trainer","/idea-plugins/idea-features-trainer.md"]],
  ["v-b9bb4c76","/idea-plugins/idea-themes.html",{"title":"IDEA主题推荐","type":"article","readingTime":{"minutes":2.76,"words":827},"excerpt":"经常有小伙伴问我：“Guide哥，你的IDEA 主题怎么这么好看，能推荐一下不？”。就实在有点不耐烦了，才索性写了这篇文章。 在这篇文章中，我精选了几个比较是和 Java 编码的 IDEA 主题供小伙伴们选择。另外，我自己用的是 One Dark theme 这款。 注意：以下主题按照使用人数降序排序。 Material Theme UI 推荐指数 ：⭐⭐⭐","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/idea-themes","/idea-plugins/idea-themes.md"]],
  ["v-6f23902b","/idea-plugins/improve-code.html",{"title":"IDEA 代码优化插件推荐","type":"article","readingTime":{"minutes":6.26,"words":1879},"excerpt":"Lombok:帮你简化代码 之前没有推荐这个插件的原因是觉得已经是人手必备的了。如果你要使用 Lombok 的话，不光是要安装这个插件，你的项目也要引入相关的依赖。 使用 Lombok 能够帮助我们少写很多代码比如 Getter/Setter、Constructor 等等。 关于 Lombok 的使用，可以查看这篇文章：《十分钟搞懂 Java 效率工具 Lo","category":["IDEA指南"],"tag":["IDEA","IDEA插件","代码优化"]},["/idea-plugins/improve-code","/idea-plugins/improve-code.md"]],
  ["v-4adc4ab8","/idea-plugins/interface-beautification.html",{"title":"IDEA 界面美化插件推荐","type":"article","readingTime":{"minutes":1.52,"words":456},"excerpt":"Background Image Plus:背景图片 我这里推荐使用国人 Jack Chu 基于 Background Image Plus 开发的最新版本，适用于 2021.x 版本的 IDEA。 前面几个下载量比较高的，目前都还未支持 2021.x 版本的 IDEA。 通过这个插件，你可以将 IDEA 背景设置为指定的图片，支持随机背景。 效果图如下： ","category":["IDEA指南"],"tag":["IDEA","IDEA插件","代码优化"]},["/idea-plugins/interface-beautification","/idea-plugins/interface-beautification.md"]],
  ["v-71c7320e","/idea-plugins/jclasslib.html",{"title":"jclasslib ：一款IDEA字节码查看神器","type":"article","readingTime":{"minutes":3.54,"words":1063},"excerpt":"由于后面要分享的一篇文章中用到了这篇文章要推荐的一个插件，所以这里分享一下。非常实用！你会爱上它的！ 开始推荐 IDEA 字节码查看神器之前，先来回顾一下 Java 字节码是啥。 何为 Java 字节码? Java 虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字","category":["IDEA指南"],"tag":["IDEA","IDEA插件","字节码"]},["/idea-plugins/jclasslib","/idea-plugins/jclasslib.md"]],
  ["v-8c704c46","/idea-plugins/maven-helper.html",{"title":"Maven Helper：解决 Maven 依赖冲突问题","type":"article","readingTime":{"minutes":0.81,"words":242},"excerpt":"Maven Helper 主要用来分析 Maven 项目的相关依赖，可以帮助我们解决 Maven 依赖冲突问题。 何为依赖冲突？ 说白了就是你的项目使用的 2 个 jar 包引用了同一个依赖 h，并且 h 的版本还不一样,这个时候你的项目就存在两个不同版本的 h。这时 Maven 会依据依赖路径最短优先原则，来决定使用哪个版本的 Jar 包，而另一个无用的 ","category":["IDEA指南"],"tag":["IDEA","IDEA插件","Maven"]},["/idea-plugins/maven-helper","/idea-plugins/maven-helper.md"]],
  ["v-4adc8b8a","/idea-plugins/others.html",{"title":"其他","type":"article","readingTime":{"minutes":0.8,"words":241},"excerpt":"1. leetcode editor :提供在线 Leetcode 刷题功能，比较方便我们刷题，不过我试用之后发现有一些小 bug，个人感觉还是直接在网站找题目刷来的痛快一些。 2. ​A Search with Github ：直接通过 Github搜索相关代码。 3. stackoverflow : 选中相关内容后单击右键即可快速跳转到 stackove","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/others","/idea-plugins/others.md"]],
  ["v-4a5b8c94","/idea-plugins/rest-devlop.html",{"title":"RestfulToolkit：RESTful Web 服务辅助开发工具","type":"article","readingTime":{"minutes":3.65,"words":1094},"excerpt":"开始推荐这个 IDEA 插件之前，我觉得有必要花一小会时间简单聊聊 REST 这个我们经常打交道的概念。 REST 相关概念解读 何为 REST？ REST 即 REpresentational State Transfer 的缩写。这个词组的翻译过来就是\"表现层状态转化\"。 这样理解起来甚是晦涩，实际上 REST 的全称是 Resource Represe","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/rest-devlop","/idea-plugins/rest-devlop.md"]],
  ["v-80eed500","/idea-plugins/save-actions.html",{"title":"Save Actions：优化文件保存","type":"article","readingTime":{"minutes":0.25,"words":76},"excerpt":"真必备插件！可以帮助我们在保存文件的时候： 1. 优化导入； 2. 格式化代码； 3. 执行一些quick fix 4. ...... 这个插件是支持可配置的，我的配置如下： 实际使用效果如下：","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/save-actions","/idea-plugins/save-actions.md"]],
  ["v-f0347cb4","/idea-plugins/sequence-diagram.html",{"title":"SequenceDiagram：一键可以生成时序图","type":"article","readingTime":{"minutes":4.35,"words":1305},"excerpt":"在平时的学习/工作中，我们会经常面临如下场景： 1. 阅读别人的代码 2. 阅读框架源码 3. 阅读自己很久之前写的代码。 千万不要觉得工作就是单纯写代码，实际工作中，你会发现你的大部分时间实际都花在了阅读和理解已有代码上。 为了能够更快更清晰地搞清对象之间的调用关系，我经常需要用到序列图。手动画序列图还是很麻烦费时间的，不过 IDEA 提供了一个叫做Seq","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/sequence-diagram","/idea-plugins/sequence-diagram.md"]],
  ["v-6a2decb5","/idea-plugins/shortcut-key.html",{"title":"IDEA 快捷键相关插件","type":"article","readingTime":{"minutes":2.24,"words":671},"excerpt":"相信我！下面这两个一定是IDEA必备的插件。 Key Promoter X:快捷键提示 这个插件的功能主要是在你本可以使用快捷键操作的地方提醒你用快捷键操作。 举个例子。我直接点击tab栏下的菜单打开 Version Control(版本控制) 的话，这个插件就会提示你可以用快捷键 command+9或者shift+command+9打开。如下图所示。 除了","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/shortcut-key","/idea-plugins/shortcut-key.md"]],
  ["v-9c1365d8","/idea-plugins/translation.html",{"title":"Translation：翻译","type":"article","readingTime":{"minutes":0.81,"words":243},"excerpt":"有了这个插件之后，你再也不用在编码的时候打开浏览器查找某个单词怎么拼写、某句英文注释什么意思了。 并且，这个插件支持多种翻译源： 1. Google 翻译 2. Youdao 翻译 3. Baidu 翻译 除了翻译功能之外还提供了语音朗读、单词本等实用功能。这个插件的Github地址是：https://github.com/YiiGuxing/Transla","category":["IDEA指南"],"tag":["IDEA","IDEA插件"]},["/idea-plugins/translation","/idea-plugins/translation.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-2ce5f3e3","/category/idea%E6%8C%87%E5%8D%97/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/idea指南/","/category/idea%E6%8C%87%E5%8D%97/index.html"]],
  ["v-2894de8a","/tag/idea/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/idea/index.html"]],
  ["v-01f9cd63","/tag/idea%E6%8F%92%E4%BB%B6/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/idea插件/","/tag/idea%E6%8F%92%E4%BB%B6/index.html"]],
  ["v-0eb8e3b1","/tag/%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/代码优化/","/tag/%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96/index.html"]],
  ["v-92041e96","/tag/%E5%AD%97%E8%8A%82%E7%A0%81/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/字节码/","/tag/%E5%AD%97%E8%8A%82%E7%A0%81/index.html"]],
  ["v-1e90405c","/tag/maven/",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/maven/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
