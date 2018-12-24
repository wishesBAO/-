# MyReads 项目



## TL;DR


## 文件树

```bash
├── README.md - 该文件。
├── SEARCH_TERMS.md # 可用于搜索字词的白名单简短集合，可以和你的应用程序一起使用。
├── package.json # 你不太可能需要修改 npm 包管理器文件。
├── public
│   ├── favicon.ico # 如果你愿意，可以随意修改 React 图标。
│   └── index.html # 不用修改
└── src
    ├── App.css #  APP 个性化风格.
    ├── App.js # 应用程序的根。包含应用程序需要的方法。
    ├── App.test.js # 用于存放多余的代码。
    ├── addBooks.js # 搜索与添加书本到自己书架。    
    ├── BooksAPI.js # 提供的Udacity后端的JavaScript API。 方法说明如下。
    ├── booksList.js # 用于搭建一本书用的模块。
    ├── readerList.js # 显示自己书架上的书。
    ├── icons # 应用程序的有用图片
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # 通用风格。
    └── index.js # 它用于DOM渲染。
```



### `getAll`

方法签名:

```js
getAll()
```

- 返回一个 Promise，它解析成一个包含 book 对象集合的 JSON 对象。
- 此集合代表了你的应用程序中书架中的图书。

### `更新`

方法签名:

```js
update(book, shelf)
```

- 书: `<Object>` 包含至少一个 `id` 属性
- 书架: `<String>` 包含 ["wantToRead", "currentlyReading", "read"] 其中之一
- 返回一个Promise，它解析为包含POST请求的响应数据的JSON对象

### `搜索`

方法签名:

```js
search(query, maxResults)
```

- query: `<String>`
- maxResults: `<Integer>` 由于后端服务器的性质，即使设置了较高数值，搜索结果的上限也为20。
- 返回一个Promise，它解析成一个包含book对象集合的JSON对象。
- 这些书不知道他们的书架。 它们只是原始结果。 在搜索页面上，你需要确保书籍具备正确的状态。

## 项目说明

1.启动说明
- 使用'npm install'安装 项目依赖项（如 React , React-router-dom)
- 使用'npm start' 启动开发服务器

2，该项目是一个图书跟踪应用
（1）在书架爱选择和归类图书，还可以更改图书的状态
 (2) 在搜索页面中有一个文本输入框，可以查找书籍
（3）搜索页面具有一个指向 /（根 URL）的链接，并返回主页面。

### 项目地址