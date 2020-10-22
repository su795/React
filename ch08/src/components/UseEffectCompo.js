import React, { useEffect, useState } from "react";

const UseEffectCompo = () => {
  // 상태값 생성
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // 함수형 컴포넌트의 생명주기 함수
  useEffect(() => {
    console.log("최초 Mount 될 때만...");
  });

  useEffect(() => {
    console.log("최초 Mount 될 때와 리렌더링(업데이트) 될 때...");
  });

  useEffect(() => {
    console.log("상태값 name이 업데이트 될 때...");
  }, [name]);

  return (
    <div className="UseEffectCompo">
      <h4>UseEffectCompo</h4>

      <p>
        이름: {name}
        <br />
        나이: {age}
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
    </div>
  );
};

export default UseEffectCompo;
