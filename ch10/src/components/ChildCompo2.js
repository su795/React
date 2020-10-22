import React from "react";

const ChildCompo2 = (props) => {
  const name = props.name;

  return (
    <div className="ChildCompo2">
      <h4>ChildCompo2</h4>

      <p>
        ChildCompo1 컴포넌트로부터 전달된 name: {name}
        <br />
      </p>
    </div>
  );
};

export default ChildCompo2;
