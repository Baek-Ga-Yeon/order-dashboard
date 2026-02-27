import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
/*
document.getElementById("root") : index.html에 만든 자리 찾기
createRoot(...).render(...) : 그 자리에 React 컴포넌트 렌더 시작
*/
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // 최상위 컴포넌트 =  APP 설정
);