module.exports = {
  "title": "ChrisZhang的博客",
  "description": "ChrisZhang",
  base:'/Blog/',
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://jrit-zl-test-1302914566.cos.ap-guangzhou.myqcloud.com/sit/2023-10-19/1697698956763-%E5%A4%A7%E9%9B%84.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轨迹",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "一个混子前端的个人博客",
        "desc": "努力工作还贷，再也不当韭菜",
        "avatar": "https://jrit-zl-test-1302914566.cos.ap-guangzhou.myqcloud.com/sit/2023-10-19/1697698956763-%E5%A4%A7%E9%9B%84.png",
        "link": "https://zsc3344.github.io/Blog/"
      }
    ],
    "logo": "https://jrit-zl-test-1302914566.cos.ap-guangzhou.myqcloud.com/sit/2023-10-19/1697698956763-%E5%A4%A7%E9%9B%84.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "ChrisZhang",
    "authorAvatar": "https://jrit-zl-test-1302914566.cos.ap-guangzhou.myqcloud.com/sit/2023-10-19/1697698956763-%E5%A4%A7%E9%9B%84.png",
    "record": "xxxx"
  },
  "markdown": {
    "lineNumbers": true
  }
}