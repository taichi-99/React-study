import React, { useEffect, useState } from "react";
//import ColorfulMessage from "./components/ColorfulMessage";
//exportについて
//分割代入で書く方式のがエラーがわかりやすいのでよい
import { ColorfulMessage } from "./components/ColorfulMessage";

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
 * useState
 * const [変数名, 変数を変更する関数名(set変数名が一般的)] = useState(初期値);
 * コンポーネント内で動的に変更する部分をuseStateを使う
 */

/**
 * useEffect、第一引数は関数、第二引数は配列
 * 第二引数を監視する時に使う
 * useEffect(() => {}, []);
 * useEffect(関数, 配列)
 *
 * 下記の例だと、numを監視してnumに変更があった場合だけ関数の処理が動き
 * numに変化が無いとuseEffect全体をスルーするのでレンダリングエラーが起きない
 * レンダリングエラーが起きないので、on/offボタンのレンダリングが出来る
 * 第二引数を指定しないと初回だけレンダリングするようにできる
 */

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichFace = () => {
    setFaceFlag(!faceFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceFlag || setFaceFlag(true);
      } else {
        faceFlag && setFaceFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
