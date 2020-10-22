import React from "react";
import NameContext from "../context/NameContext";

const CtxChildCompo2 = () => {
  return (
    <NameContext.Consumer>
      {(value) => (
        <div className="CtxChildCompo2">
          <h4>CtxChildCompo2</h4>
          <p>
            App 컴포넌트로부터 전달된 name: {value.name}
            <br />
          </p>
        </div>
      )}
    </NameContext.Consumer>
  );
};

export default CtxChildCompo2;
