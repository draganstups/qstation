import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

function EditAccount({ accounts, srediAccount, props }) {
  const params = useParams();
  const [acc, setAcc] = useState(
    accounts.filter((accc) => accc.id == params.id)[0]
  );
  const navigate = useNavigate();
  console.log(acc);

  const accounFormEdit = accounts.filter((accc) => accc.id === +params.id)[0];

  // const changeAccount = (event) => {
  //   setAcc(accounFormEdit);
  //   const copyOfAccount = { ...acc };
  //   copyOfAccount[event.target.id] = event.target.value;

  //   setAcc(copyOfAccount);
  // };

  const editAccount = () => {
    navigate("/");
    return srediAccount(acc);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="display-4 m-4">Edit Account</h2>
          <div className="row">
            <div className="col-10 offset-1">
              <input
                onChange={(e) => {
                  setAcc({ ...acc, name: e.target.value });
                }}
                type="text"
                id="name"
                className="form-control"
                value={acc.name}
              />
              <br />
              <input
                onChange={(e) => {
                  setAcc({ ...acc, lastname: e.target.value });
                }}
                type="text"
                id="lastname"
                className="form-control"
                value={acc.lastname}
              />
              <br />
              <input
                onChange={(e) => {
                  setAcc({ ...acc, phone: e.target.value });
                }}
                type="text"
                id="phone"
                className="form-control"
                value={acc.phone}
              />
              <br />
              <input
                onChange={(e) => {
                  setAcc({ ...acc, email: e.target.value });
                }}
                type="text"
                id="email"
                className="form-control"
                value={acc.email}
              />
              <br />
              <button
                onClick={editAccount}
                className="form-control btn btn-info"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAccount;
