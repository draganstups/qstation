import React from "react";
import Account from "../Account/Account";

function EditTable({ accounts, deleteAccount }) {
  const allAccounts = accounts.map((account) => {
    return (
      <Account
        account={account}
        edit={true}
        key={account.id}
        deleteAccount={deleteAccount}
      />
    );
  });

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
                      <th>Action</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody id="account-table" className="table-striped">
                    {allAccounts}
                    {/* {console.log(edit)} */}
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

export default EditTable;
