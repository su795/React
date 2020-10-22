import React, { useRef, useState } from "react";

const UseRefCompo = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  // ref 생성
  // inputRef = React.createRef(); 함수형에서는 생성불가한 형태 -> 클래스형에서만 생성 가능
  const inputRef = useRef();

  const onClicked = () => {
    const nextList = list.concat(inputRef.current.value);
    setList(nextList);
    setValue("");
  };

  const onChanged = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h4>UseRefCompo</h4>

      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>

      <input type="text" ref={inputRef} value={value} onChange={onChanged} />
      <button onClick={onClicked}>등록</button>
    </div>
  );
};

export default UseRefCompo;
