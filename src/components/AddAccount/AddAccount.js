import React, { useState } from "react";
import { useNavigate } from "react-router";

function AddAccount({ addNewAccountToState }) {
  const [korisnik, setKorisnik] = useState({
    newAccount: { id: "", name: "", lastname: "", phone: "", email: "" },
  });
  const navigate = useNavigate();

  const changeHandler = (event) => {
    let id = event.target.id;
    let newAccountCopy = { ...korisnik.newAccount };
    newAccountCopy[id] = event.target.value;
    setKorisnik({ newAccount: newAccountCopy });
  };

  function addNewAccount2() {
    navigate("/");
    localStorage.setItem("korisnik", JSON.stringify(korisnik));
    return addNewAccountToState(korisnik.newAccount);
    // console.log(korisnik);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col10 offset-1">
          <h2 className="display-4 m4">Add Account</h2>
          <div className="row">
            <div className="col-10 offset-1">
              <input
                type="text"
                onChange={changeHandler}
                id="id"
                placeholder="id"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={changeHandler}
                id="name"
                placeholder="name"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={changeHandler}
                id="lastname"
                placeholder="lastname"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={changeHandler}
                id="phone"
                placeholder="phone"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={changeHandler}
                id="email"
                placeholder="email"
                className="form-control"
              />
              <br />
              <button
                onClick={addNewAccount2}
                className="btn btn-primary form-control"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
