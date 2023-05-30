import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

//jsx Reactのコンポーネント拡張子
//コンポーネントの命名規則は先頭大文字、javaのクラスファイルと同じ

//returnで複数値を返すときは、return（）
//()内のHTMLタグが複数ならでReact.Fragment囲う
//<>空で囲うとReact.Fragmentの意味になる
//イベント名{}で{}内はjs扱い、だいたい関数名を書く
//イベント名{{}}の外側{}はjs宣言、内側{}はjsのオブジェクト宣言

/**
 * propsについて
 * <コンポーネント名 適当名="要素" 適当名2など="要素2" />
 * コンポーネントに対して、propsで要素を渡す
 * propsは名称を付けて渡すこともできる
 * <コンポーネント名>ここにchildren要素としても渡せる</コンポーネント名>
 */
const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//このファイルのApp関数を他ページでも使う宣言
export default App;
