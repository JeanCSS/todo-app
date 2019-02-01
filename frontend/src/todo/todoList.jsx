import React from "react";
import IconButton from "../tempate/iconButton";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(l => (
      <tr key={l._id}>
        <td>{l.description}</td>
        <td>
          <IconButton
            style="danger"
            icon="trash-o"
            hide={false}
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
            <td>Descricao</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};
