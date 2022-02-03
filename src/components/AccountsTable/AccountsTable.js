import React from "react";

function AccountsTable({ accounts }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col10 offset-1">
            <h2 className="display-4 m4">Account</h2>
            <div className="row">
              <div className="col-10 offset-1">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Ime</th>
                      <th>Prezime</th>
                      <th>Telefon</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody id="account-table" className="table-striped">
                    {accounts.map((acc) => (
                      <tr key={parseInt(acc.id)}>
                        <td>{acc.id}</td>
                        <td>{acc.name}</td>
                        <td>{acc.lastname}</td>
                        <td>{acc.phone}</td>
                        <td>{acc.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountsTable;
