import React from "react";
import { Link } from "react-router-dom";

function Account({ account, edit, deleteAccount }) {
  const actonButton = edit ? (
    <>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteAccount(account.id);
          }}
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={"/edit" + account.id} className="btn btn-warning">
          Edit
        </Link>
      </td>
    </>
  ) : null;
  return (
    <>
      <tr key={parseInt(account.id)}>
        <td>{account.id}</td>
        <td>{account.name}</td>
        <td>{account.lastname}</td>
        <td>{account.phone}</td>
        <td>{account.email}</td>
        {actonButton}
      </tr>
    </>
  );
}

export default Account;
