import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";

import EditAccount from "./components/EditAccount/EditAccount";

function App() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Danilo",
      lastname: "Vesovic",
      phone: "11-11-11",
      email: "vesovic@gmail.com",
    },
    {
      id: 2,
      name: "Vesko",
      lastname: "Markovic",
      phone: "22-22-22",
      email: "markovic@gmail.com",
    },
  ]);

  // console.log(accounts.id);
  function addNewAccountToState(acc) {
    setAccounts((prevAcc) => [...prevAcc, acc]);
    // localStorage.setItem(acc);

    // console.log(acc);
  }

  const deleteAccount = (id) => {
    const accountsCopy = [...accounts];
    const newCopyAccounts = accountsCopy.filter((account) => account.id !== id);
    setAccounts(newCopyAccounts);
  };

  const srediAccount = (acc) => {
    const copyAcc = [...accounts];
    let accountPossition = copyAcc.map((account) => account.id).indexOf(acc.id);
    copyAcc[accountPossition] = acc;
    setAccounts(copyAcc);
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AccountsTable accounts={accounts} />} />
          <Route
            path="/add"
            element={
              <AddAccount
                accounts={accounts}
                addNewAccountToState={addNewAccountToState}
              />
            }
          />

          <Route
            path="/edit"
            element={
              <EditTable
                accounts={accounts}
                // edit={true}
                deleteAccount={deleteAccount}
              />
            }
          />
          <Route
            path="/edit:id"
            element={
              <EditAccount accounts={accounts} srediAccount={srediAccount} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
