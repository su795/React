import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RefCompo1 from "./components/RefCompo1";
import RefCompo2 from "./components/RefCompo2";

/*
  날짜: 2020/10/21
  이름: 권기민
  내용: 컴포넌트 ref 속성 실습하기

  ref
  - 리액트 JSX문법에서 사용하는 식별 ID값
  - HTMl의 id속성과 같은 개념이지만 JSX id속성을 권장하지 않음
*/

class App extends Component {
  ref1 = React.createRef();
  ref2 = React.createRef();

  onClick1 = () => {
    this.ref1.current.onClickHandlerByParent();
  };

  onClick2 = () => {
    this.ref2.current.onClickHandlerByParent();
  };

  render() {
    return (
      <div>
        <h3>ch06. 리액트 컴포넌트 ref 속성</h3>

        <RefCompo1 />
        <h5>
          첫번째 버튼을 누르면 id이 중복사용되지 않기때문에 위에 있는 같은 id의
          input으로 포커스가 이동한다.
        </h5>
        <RefCompo1 />

        <RefCompo2 ref={this.ref1} />
        <RefCompo2 ref={this.ref2} />

        <button onClick={this.onClick1}>선택</button>
        <button onClick={this.onClick2}>선택</button>
      </div>
    );
  }
}

export default App;
