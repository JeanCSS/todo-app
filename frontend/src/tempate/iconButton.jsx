import React, { Component } from "react";
import If from "./if";

export default props => {
  return (
    <If condicao={!props.hide}>
      <button
        className={`btn btn-${props.style}`}
        onClick={() => props.onClick()}
      >
        <i className={`fa fa-${props.icon}`} />
      </button>
    </If>
  );
};
