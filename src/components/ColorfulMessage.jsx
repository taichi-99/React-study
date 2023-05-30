import React from "react";

/**
 * propsを受け取る
 *jsだとオブジェクト名と変数が同じなら: ここ;を省略できる
 */
const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "30px"
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
