<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Interaction Programming : Week5 - DOM </title>
    <style media="screen">
      .row { display: block; margin: 20px 10px; }
      .col { display: inline-block; margin: 10px 5px; }
      .red { color: red; }
      .blue { color: blue; }
    </style>
  </head>
  <body>
    <h1>회원가입</h1>
    <form id="signin" action="index.html" >
      <div id="row">
        <div class="col">
          <h1 id="title"></h1>
        </div>
      </div>
      <div id="wrapper">
        <div class="row">
          <div class="row">
            <button id="windowSize">윈도우 사이즈 호출!</button>
          </div>
        </div>
        <div class="row">
          <label for="inputId">
            <span>아이디 : </span>
            <input name="inputId" id="inputId" type="text" value="" />
          </label>
        </div>
        <div class="row">
          <label for="inputPassword">
            <span>패스워드 : </span>
            <input name="inputPassword" id="inputPassword" value="" type="password" />
          </label>
        </div>
        <div class="row">
          <div class="col">
            <button id="buttonCancel">취소</button>
          </div>
          <div class="col">
            <button id="buttonSignin">가입</button>
          </div>
          <div class="col">
            <button id="buttonReset">초기화</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul id="city">
              <li>Seoul</li>
              <li>Tokyo</li>
              <li>beijing</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <button id="addCity">도시 추가하기</button>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col">
        <button id="goTop">맨 위로 가기</button>
      </div>
    </div>
    <script>
