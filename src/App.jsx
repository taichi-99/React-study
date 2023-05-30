import React, { useState } from "react";
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

/**
 * state
 *　⇒各コンポーネントが持つ状態。stateが変更されると再レンダリングが入る
 * const [変数名, 変数を変更する関数名(set変数名が一般的)] = useState(初期値);
 * コンポーネント内で動的に変更する部分をuseStateを使う
 */
const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichFace = () => {
    setFaceFlag(!faceFlag);
  };

  if (num % 3 === 0) {
    faceFlag || setFaceFlag(true);
  } else {
    faceFlag && setFaceFlag(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichFace}>on/off</button>
      <p>{num}</p>
      {faceFlag && <p>(*^◯^*)</p>}
    </>
  );
};

//このファイルのApp関数を他ページでも使う宣言
export default App;
