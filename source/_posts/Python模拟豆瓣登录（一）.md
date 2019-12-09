---
title: Python模拟豆瓣登录（一）
layout: post
date: 2018-11-30 10:29:08
tags:
- Python
- 验证码
- 模拟登录
- 正则表达式
categories:
- 数据抓取
- 豆瓣
cover: https://cdn.jsdelivr.net/gh/Cloving/Atlas-Github/blog/CoverPicture/bg_7.jpeg
---
<br/>
# 摘要
抓取数据的过程中有时候需要完成模拟登录的操作，本文使用`requests`库完成豆瓣的模拟登录，并保存已登录的Cookie，方便下次直接登录。之后通过访问个人主页验证当前状态是否为已登录状态。

![登录页面](https://cdn.jsdelivr.net/gh/Cloving/Atlas-Github/blog/notePicture/豆瓣登录（一）/登录页面.png)

<br/>
# requests请求

## 分析过程
首先需要研究豆瓣的登录机制，在豆瓣的登录界面查看登录请求提交的表单项，如图所示：

![登录表单](https://cdn.jsdelivr.net/gh/Cloving/Atlas-Github/blog/notePicture/豆瓣登录（一）/登录表单.png)

图中的`Login`请求为post类型，`Form Data`表示post到服务器的数据，可以看出数据并未加密。

1、`source`表示该登录页面是由豆瓣读书跳转过来
2、`redir`表示登录后跳转到的url
3、`form_email`和`form_password`分别表示用户名和密码
4、`captcha-solution`则是验证码
5、`captcha-id`验证码的id该字段可从登录页面的HTML中获取

## 编码过程
### 1、初始化变量：
```Python
def __init__(self):
  self.session = requests.Session()  
  self.session.cookies = cookielib.LWPCookieJar(filename="cookies.txt")  
  self.url = 'https://accounts.douban.com/login'  # 登录url
  self.redirurl = 'https://book.douban.com/mine'  # 重定向url
  self.email = '******'             
  self.password = '******'
  # 构造post数据
  self.data = {
    'redir': self.redirurl,
    'form_email': self.email,
    'form_password': self.password,
    'login': '登录'
  }
  # 构造用户代理
  self.headers = {
    'User-Agent': 'Mozilla/5.0 '
    '(Windows NT 10.0; Win64; x64) '
    'AppleWebKit/537.36 (KHTML, like Gecko) '
    'Chrome/55.0.2883.87 Safari/537.36'
  }
```

### 2、发送请求
我们模拟登录需要的是登录之后的页面，所以利用`Session`来维持一种会话状态，并且保存登录后的`Cookie`。下次登录时直接携带`Cookie`发送请求，无需再使用账号密码。判断登录时是否需要验证码先使用`BeautifulSoup`库来获取登录页面的`HTML`代码，之后利用正则表达式判断其中是否有显示验证码的`img`标签，如果有处理验证码，如果没有那么就将已有的信息post到服务器，并保存登录后的Cookie。

```Python
def login(self):
  page = self.session.post(self.url, headers=self.headers)
  soup = BeautifulSoup(page.text, "html.parser")
  captcha = soup.find('img', id='captcha_image')
  if captcha is not None:
    self.process_captcha(page, captcha)
    afterLogin_page = self.session.post(self.url, data=self.data, headers=self.headers)
  else:
    afterLogin_page = self.session.post(self.url, data=self.data, headers=self.headers)
  # print(self.session.cookies)
  self.session.cookies.save(ignore_discard=True, ignore_expires=True)
  print(afterLogin_page.text)
  soup = BeautifulSoup(afterLogin_page.text, "html.parser")
```

#### 关于Cookie与Session
Http是一种无状态的协议，因此并不能追踪用户的状态，所以常采用`Session`与`Cookie`结合的方式跟踪用户的状态。`Session`位于服务器端只保存对话信息但是不能够识别出具体的用户，`Cookie`位于客户端用于存放用户信息。`Cookie`在登录网站时会由服务器产生传递给客户端，当客户端再次登录时会携带`Cookie`，之后服务器便根据`Cookie`中的`Session ID`跟踪到会话。如果会话有效，那么会判断用户已处于登录状态，否则可能会判断用户没有访问权限进而跳转到登录页面。
同时Cookie是有过期时间的，超过该时间Cookie失效，需要重新获取。这同时也是为了避免Cookie被他人获取并长期使用。

### 3、处理验证码
这里先使用手动输入验证码的方式，首先拿到验证码图片的地址（这个地址是临时的，一段时间后会失效，但对于手动输入并不影响），然后利用正则表达式拿到`captcha-id`，因为它需要与验证码一同post到服务器。具体代码如下：

```Python
  def process_captcha(self, page, captcha):
    # 处理验证码
    # 获得验证码图片地址
    captcha_url = captcha['src']
    # 利用正则表达式获得验证码ID
    pattern = re.compile('<input type="hidden" name="captcha-id" value="(.*?)"/')
    captcha_id = re.search(pattern, page.text).group(1)
    # 将验证码图片保存到本地
    urllib.request.urlretrieve(captcha_url, "captcha.png")
    try:
      image = Image.open('captcha.png')
      image.show()
      image.close()
    except Exception as e:
      print("打开验证码图片失败，请手动重试")
    captcha = input('please input the captcha:')
    self.data['captcha-solution'] = captcha
    self.data['captcha-id'] = captcha_id
```

### 4、利用Cookie登录
载入本地Cookie之后再发送get请求到url，之后将请求到的`HTML`文本写入文件。
**注意：**以二进制的类型写入需要bytes对象，所以使用`utf8`编码
```Python
def get_index(self):
  # 根据本地cookies登录
  try:
    self.session.cookies.load(ignore_discard=True)
  except Exception as e:
    print("cookie未能加载, 原因: ", e)
  response = self.session.get(self.redirurl, headers=self.headers)
  with open("index.html", 'wb') as f:
    f.write(response.text.encode('utf8'))
  print("已载入本地Cookie")
```

# 总结
过程比较简单，编码过程也不复杂，验证码的处理暂时使用手动的方式。关于自动识别豆瓣验证码的方式正在研究中，目前效果还不理想。
完整代码：[douban_login_1.py](https://github.com/Cloving/Douban-Spider/blob/master/%E8%B1%86%E7%93%A3%E7%99%BB%E5%BD%95/douban_login_1.py)

# 参考文献
1、[python 爬虫 cookie 的保存和加载 - 盖娅 - 开源中国](https://my.oschina.net/sukai/blog/662046)
2、[Python爬虫基础练习(十一)简单模拟豆瓣登录 - 知乎](https://zhuanlan.zhihu.com/p/38191385)
<br/>
