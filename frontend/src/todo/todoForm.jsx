import React from "react";
import Grid from "../tempate/grid";
import IconButton from "../tempate/iconButton";
export default props => {
  const keyHandle = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid col="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="add uma tarefa"
          onChange={props.handleChange}
          onKeyUp={keyHandle}
          value={props.value}
        />
      </Grid>

      <Grid col="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          hide={false}
          onClick={props.handleAdd}
        />
        <IconButton
          style="info"
          icon="search"
          hide={false}
          onClick={props.handleSearch}
        />
        <IconButton
          style=""
          icon="close"
          hide={false}
          onClick={props.handleClear}
        />
      </Grid>
    </div>
  );
};
