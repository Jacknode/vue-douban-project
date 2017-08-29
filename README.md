# 说明

> 本项目是基于豆瓣提供的电影和图片等api编写的移动端的app,整个流程一目了然，内容虽少，五脏俱全，适合作为入门练习。 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^ 或者您可以 "follow" 一下，我会不断开源更多的有趣的项目 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍 开发环境 macOS 10.11.6 Chrome 56 nodejs 6.11.1 这个项目主要用于 vue2 + vuex + vue-router 比上一个不一样的是这次是用的豆瓣的api

# 克隆到本地

```
git clone https://github.com/Jacknode/vue-douban-project.git
```

# 进入文件夹
```
cd vue-douban-project
```

# 安装依赖
```
npm install/yarn install
```
# 自动打开服务器
```
npm run dev
```
# 发布环境
```
npm run build
```

# 技术栈
```
vue,vuex,vue-router,axios,muse-ui,webpack,vue-scroller
```


# 项目周期一览
> 1. 静态页面

> 2. 搭建好页面并分配好各个组件和跑通整个流程，

> 3. 开始编写入口文件和路由还有axios

> 4. 电影的首页,列表页,详情页的组件和功能   功能如下
     - 路由跳转和loading组件的显示和隐藏用的vuex
     - vuex 的分布式管理和统一导出，方便管理和维护
     - vue-router放在一个router.config的文件中方便管理和维护
     - components 放的是整个项目用到的自定义组件和项目组件
     - assets 是静态资源管理文件
     - 上拉加载更多

> 5. 搜索实现了点击加载更多

> 6. 图书的首页和列表页和详情页的逻辑和一些组件的封装

> 7. 使用localStorage模拟用户登录与注册功能
       - 登录:/login
       - 注册:/Registration

> 8. 音乐的首页和详情页和列表页还有下面的导航切换路由

> 9. 接口获取方式采用axios和JSONP和后端代理
