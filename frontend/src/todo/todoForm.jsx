import React from "react";
import Grid from "../tempate/grid";
import IconButton from "../tempate/iconButton";
export default props => (
  <div role="form" className="todoForm">
    <Grid col="12 9 10">
      <input
        id="description"
        className="Form-control"
        placeholder="add uma tarefa"
      />
    </Grid>
    <IconButton style="secundary" icon="plus" />
    <Grid col="12 3 2" />
  </div>
);
