import React from "react";
import ChildCompo2 from "./ChildCompo2";

const ChildCompo1 = (props) => {
  const name = props.name;

  return (
    <div className="ChildCompo1">
      <h4>ChildCompo1</h4>

      <p>
        App 컴포넌트로부터 전달된 name: {name}
        <br />
      </p>

      {/* name parameter를 ChildCompo2로 전달 */}
      <ChildCompo2 name={name} />
    </div>
  );
};

export default ChildCompo1;
