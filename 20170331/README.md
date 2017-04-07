# 인터랙션 프로그래밍 5주차 : DOM(Document Object Model) 제어하기

## Browser Object Model?

> document, frame과 같은 DOM 레벨 0의 일부

표준 스펙에 포함되지 않았기 때문에 브라우저마다 지원 정도가 다르며, 일부 객체는 특정브라우저에서만 지원된다.

- window
- navigator
- screen
- history
- location

### window

> BOM(Dom Level 0)의 최상위 객체.

브라우저 객체의 최상위 객체로, 브라우저 환경의 모든 객체를 담고 있다.

#### window 객체의 프로퍼티

- **document** : 문서 객체(Document Object)를 참조하고 있다. DOM
- innerHeight : 윈도우의 컨텐츠 영역의 높이를 반환한다.
- innerWidth : 윈도우 컨텐츠 영역의 넓이를 반환한다.
- location : location 객체를 반환한다.
- screenLeft(screenX) : 모니터상에서 수평 좌표를 반환한다.
- screenTop(screenY) : 모니터상에서 수직 좌표를 반환한다.
- pageXOffset : 현재 문서의 수평 스크롤 좌표 값(pixel)
- pageYOffset : 현재 문서의 수직 스크롤 좌표 값(pixel)

#### window 객체의 메서드

- **alert** : OK 버튼을 포함하고 있는 경고창을 출력한다.
- **clearInterval()** : `setInterval`로 생성된 타이머를 초기화한다.
- **clearTimeout()** : `setTimeout`로 생성된 타이머를 초기화한다.
- close() : 현재 window를 닫는다.
- confirm() : 메시지와 `확인` 그리고 `취소` 버튼을 포함하고 있는 다이얼로그를 출력한다.
- open() : 새로운 브라우저 window를 연다.
- prompt() : 메시지와 사용자가 입력 가능한 프롬프트를 포함한 다이얼로그를 연다.
- scrollTo() : 문서를 입력한 위치로 스크롤한다.
- **setInterval()** : 주기적으로 실행되는 타이머를 생성한다. (밀리세컨즈)
- **setTimeout()** : 일정 주기 후 한번 실행되는 타이머를 생성한다. (밀리세컨즈)

### navigator

> 브라우저의 정보를 담고 있는 객체.

#### navigator 객체의 프로퍼티

- appName : 브라우저의 이름
- appVersion : 브라우저의 버전을 표기
- **userAgent** : 브라우저가 서버로 전송하는 user-agent 헤더를 반환한다.

### screen

> 사용자의 화면에 대한 정보를 담고 있는 객체

#### screen 객체의 프로퍼티

- availHeight : 화면의 높이를 반환한다. (작업표시줄 등을 제외한 높이)
- availWidth : 화면의 넓이를 반환한다. (작업표시줄 등을 제외한 높이)
- height : 화면의 높이를 반환한다.
- width : 화면의 넓이를 반환한다.

### history

> c

#### history 객체의 프로퍼티

- length : 방문이력의 수를 반환

#### history 객체의 메서드

- back() : 이전 방문이력을 로드합니다.
- forward() : 다음 방문이력을 로드합니다.
- go() : 방문이력 중 특정 URL로 이동합니다.

### location

> 현재 URL에 대한 정보를 담고 있는 객체

#### location 객체의 프로퍼티

- hash : URL에 포함된 hash 값을 반환합니다. (`#`)
- host : URL의 호스트네임과 포트를 반환합니다.
- hostname : URL의 호스트네임을 반환합니다.
- href : URL 전체를 반환합니다.
- origin : 프로토콜을 포함한 호스트네임과 포트를 출력합니다.
- pathname : URL 중 패스(path)를 반환합니다.
- port : URL 중 포트를 반환합니다.
- protocol : URL의 프로토콜을 반환합니다.
- search : URL의 쿼리스트링을 반환합니다.

#### location 객체의 메서드

- assign() : 새로운 문서를 로드한다.
- reload() : 현재 문서를 새로 고침한다.
- replace() : 현재 문서를 새로운 것으로 대체한다.

## DOM(Document Object Model)이란?

> 문서 객체 모델(The Document Object Model, 이하 DOM) 은 HTML, XML 문서의 프로그래밍 interface.

DOM(Document Object Model, 이하 DOM)은 문서의 구조화된 표현(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM은 구조화된 nodes와 property 와 method 를 갖고 있는 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당.

"W3C DOM", "WHATWG DOM" 표준을 바탕으로 대부분의 브라우저는 DOM을 구현하고 있으나, 많은 브라우저들이 표준 규약외에도 추가적인 기능들을 제공하고 있으므로, 사용자가 작성한 문서들이 각기 다른 DOM이 적용될 수 있음에 유의.

## DOM 접근하기

### DOM Document

> DOM에서의 Document 객체를 의미한다.

### document와 window?

document 객체는 window 객체의 하위 객체로 문서에 대한 정보를 담고 있는 객체.

#### Properties and Methods

##### document.documentElement

document 객체의 자신의 element 노드를 반환한다.

##### document.body

document 객체의 하위 객체 중 body element 노드를 반환한다.

##### document.cookie

document 객체의 쿠키정보를 반환한다.

##### document.characterSet
##### document.createAttribute()
##### document.createElement()
##### document.createTextNode()
##### document.docType
##### document.domain
##### document.getElementById()
##### document.getElementsByClassName()
##### document.getElementsByName()
##### document.getElementsByTagName()
##### document.hasFocus()
##### document.head
##### document.images
##### document.scripts
##### document.title
##### document.write()
##### document.writeln()

### DOM Elements

> DOM에서 element는 HTML Element를 의미한다.

#### Properties and Methods

##### element.addEventListener()
##### element.appendChild()
##### element.attributes
##### element.childNodes
##### element.chilren
##### element.classList : 배열
##### element.className : 문자열
##### element.click()
##### element.clientHeight
##### element.clientLeft
##### element.clientTop
##### element.clientWidth
##### element.cloneNode()
##### element.contains()
##### element.firstChild : node
##### element.firstElementChild : element
##### element.focus()
##### element.getAttribute()
##### element.getAttributeNode()
##### element.getElementsByClassName()
##### element.getElementsByTagName()
##### element.hasAttribute() : 특정 attribute
##### element.hasAttributes() : attribute 포함 여부
##### element.hasChildNodes() : attribute 포함 여부
##### element.id
##### element.innerHTML
##### element.insertBefore()
##### element.lastChild
##### element.lastElementChild
##### element.querySelector()
##### element.querySelectorAll()
##### element.removeAttirbute()
##### element.removeChild()
##### element.removeEventListener()
##### element.setAttribute()
##### element.style
##### element.title
##### element.toString()

### Attr Object

> Attr Object는 HTML Attribute를 의미합니다. HTML Attribute는 HTML Element에 속합니다.

#### Properties and Methods

##### attr.idId
##### attr.name
##### attr.value

JavaScript and HTML DOM Reference
