import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

function EditAccount({ accounts, srediAccount }) {
  const params = useParams();
  const [acc, setAcc] = useState(
    accounts.filter((accc) => accc.id === +params.id)[0]
    // id: "",
    // name: "",
    // lastname: "",
    // phone: "",
    // email: "",
  );
  const navigate = useNavigate();
  console.log(acc);

  const accounFormEdit = accounts.filter((accc) => accc.id === +params.id)[0];

  //   setAcc({ accounFormEdit });

  const changeAccount = (event) => {
    setAcc(accounFormEdit);
    const copyOfAccount = { ...acc };
    copyOfAccount[event.target.id] = event.target.value;

    setAcc(copyOfAccount);

    // setAcc({ [event.target.id]: event.target.value });
    // console.log(acc);
  };
  //   console.log(acc);

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
                onChange={changeAccount}
                type="text"
                id="name"
                className="form-control"
                value={acc.name}
              />
              <br />
              <input
                onChange={changeAccount}
                type="text"
                id="lastname"
                className="form-control"
                value={acc.lastname}
              />
              <br />
              <input
                onChange={changeAccount}
                type="text"
                id="phone"
                className="form-control"
                value={acc.phone}
              />
              <br />
              <input
                onChange={changeAccount}
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
