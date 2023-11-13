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
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
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
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "一个混子前端的个人博客",
        "desc": "努力工作还贷，再也不当韭菜",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
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