import React, { Component } from "react";

class RefCompo2 extends Component {
  // ref속성값 생성
  uidRef = React.createRef();

  onClickHandlerByParent = () => {
    this.uidRef.current.focus();
  };

  render() {
    return (
      <div className="RefCompo2">
        <h4>RefCompo2</h4>

        <input type="text" name="uid" ref={this.uidRef} />
      </div>
    );
  }
}

export default RefCompo2;
