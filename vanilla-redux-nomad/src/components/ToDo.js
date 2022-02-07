import React from "react";
// 이걸 써야 자동 import 된다
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // ownProps로 이미 id를 받아왔으므로 인자에 id 안넣어줘도 됨
    // ownProps = {text: 'sdfdsf', id: 1644254058064}
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

// ToDo.js에서 store의 state는 관심 없고 state를 변경만 하기 때문에 mapDispatchToProps는 필요없음
export default connect(null, mapDispatchToProps)(ToDo);
