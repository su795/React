import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import QueryCompo from "./components/QueryCompo";
import About from "./components/About";
import Home from "./components/Home";
import ParamCompo from "./components/ParamCompo";

/*
  날짜: 2020/10/22
  이름: 권기민
  내용: ch09. 리액트 라우터(Router)

  리액트 라우터
    - SPA(Single Page Application) 개발하기 위한 화면 이동을 지원하는 리액트 라이브러리
    - 리액트 Router 라이브러리를 설치. terminal에서 'npm add react-router-dom' 입력
    - 리액트 Router를 동작시키기 위해 index.js에서 App 컴포넌트 태그를 BrowserRouter 컴포넌트 태그로 감싼다.
    
*/

function App() {
  return (
    <div className="App">
      <h3>ch09. React Router</h3>
      <ul>
        <li>
          {/* Link 태그는 브라우저에 렌더링 될 때 a태그로 전환된다. */}
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/query?name=김유신">QueryCompo - 1</Link>
        </li>
        <li>
          <Link to="/query?name=김유신&age=25">QueryCompo - 2</Link>
        </li>
        <li>
          <Link to="/query?name=김유신&age=25&addr=부산">QueryCompo - 3</Link>
        </li>
        <li>
          <Link to="/param/김춘추">ParamCompo - 1</Link>
        </li>
        <li>
          <Link to="/param/김춘추/25">ParamCompo - 2</Link>
        </li>
        <li>
          <Link to="/param/김춘추/25/부산">ParamCompo - 3</Link>
        </li>
      </ul>

      {/* Router Path 설정 */}
      {/* exact => 주소가 정확하게 "/"(루트)일 경우에만 Home 컴포넌트 호출 */}
      <Route path="/" component={Home} exact={true} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />

      <Route path="/query" component={QueryCompo} />

      {/* 스위치 태그를 넣으면 세 개중 조건에 일치하는 하나만 출력된다. 조건은 ParamCompo에 선언된 파라미터와 path에 입력된 파라미터가 일치해야한다. */}
      <Switch>
        <Route exact path="/param/:name" component={ParamCompo} />
        <Route exact path="/param/:name/:age" component={ParamCompo} />
        <Route exact path="/param/:name/:age/:addr" component={ParamCompo} />
      </Switch>
    </div>
  );
}

export default App;
