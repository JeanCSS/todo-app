import React from "react";
import Grid from "../tempate/grid";
import IconButton from "../tempate/iconButton";
export default props => (
  <div role="form" className="todoForm">
    <Grid col="12 9 10">
      <input
        id="description"
        className="form-control"
        placeholder="add uma tarefa"
        onChange={props.handleChange}
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
    </Grid>
  </div>
);
