#网易云音乐 #会员解锁


^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js

hostname = interface3.music.163.com



#会员解锁新增一条  动态瀑布流里面的会员解锁
^https:\/\/interface3?\.music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js


 # 播放器会员皮肤
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js

# 搜索结果会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js

# 播放器会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js

# 侧边栏会员等级
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js

# 首页歌单会员歌曲
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js

# 会员认证
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/callmeheihei/Script/master/cloudmusic.js
