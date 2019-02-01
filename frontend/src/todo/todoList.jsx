import React from "react";
import IconButton from "../tempate/iconButton";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(l => (
      <tr key={l._id}>
        <td className={l.done ? "cumprido" : ""}>{l.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            hide={l.done}
            onClick={() => props.handleMarkAsDone(l)}
          />
          <IconButton
            style="warning"
            icon="undo"
            hide={!l.done}
            onClick={() => props.handleMarkAsPending(l)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!l.done}
            onClick={() => props.handleDelete(l)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>
              <span>Descricao</span>
            </td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};
