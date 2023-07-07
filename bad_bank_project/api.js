//constext is globally shared
let ctx = {
  accounts: [
    {
      name: "peter",
      email: "perter@mit.edu",
      balance: 0,
      password: "secret",
    },
  ],
};

let loggedUser = {
  name: "",
  email: "",
  balance: 0,
  password: "",
};

let userExist = false;

//Create User
const create = () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const status = document.getElementById("createStatus");

  ctx.accounts.push({
    name: name.value,
    email: email.value,
    balance: 0,
    password: password.value,
  });

  //update status and clear form
  name.value = "";
  email.value = "";
  password.value = "";
  status.innerHTML = "Account Created";
};

//Show all user information
const allData = () => {
  const status = document.getElementById("allDataStatus");
  status.innerHTML = JSON.stringify(ctx.accounts);
};

//Log User
const login = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("loginPassword");
  const status = document.getElementById("loginStatus");

  const userToLog = { email: email.value, password: password.value };

  //Vaidate email and Password
  ctx.accounts.forEach((each) => {
    if (each.email === email.value && each.password === password.value) {
      userExist = true;
      loggedUser = {
        name: each.name,
        email: each.email,
        balance: each.balance,
        password: each.password,
      };
      status.innerHTML = "Logged In";
      console.log(loggedUser);
      return;
    } else {
      userExist = false;
      loggedUser = {
        name: "",
        email: "",
        balance: "",
        password: "",
      };
      status.innerHTML = "NOT Logged In";
      console.log(loggedUser);
    }
  });
};

//Make a Withdraw
const withdraw = () => {
  const email = document.getElementById("email");
  const amount = document.getElementById("withdrawAmount");
  const status = document.getElementById("withdrawStatus");

  if (userExist) {
    if (email.value === loggedUser.email) {
      if (Number(amount.value) > 0) {
        if (Number(amount.value) < Number(loggedUser.balance)) {
          loggedUser.balance =
            Number(loggedUser.balance) - Number(amount.value);
            status.innerHTML = `Your current balance is ${loggedUser.balance}`;
          //Update balance on all users object
          ctx.accounts.forEach((each, index) => {
            if (each.email === email.value) {
              ctx.accounts[index].balance = loggedUser.balance;
            } else {
              //Make nothing by now
            }
          });
          console.log(loggedUser.balance);
        } else {
          status.innerHTML = "No founds";
        }
      } else {
        status.innerHTML = "Amount is negative or cero";
      }
    }
  } else {
    status.innerHTML = "Not logged In";
  }
};

//Make a Deposit
const deposit = () => {
  const email = document.getElementById("email");
  const amount = document.getElementById("depositAmount");
  const status = document.getElementById("depositStatus");

  if (userExist) {
    if (email.value === loggedUser.email) {
      if (Number(amount.value) > 0) {
        //Update balance in current logged User
        loggedUser.balance = Number(loggedUser.balance) + Number(amount.value);

        //Update balance on all users object
        ctx.accounts.forEach((each, index) => {
          if (each.email === email.value) {
            ctx.accounts[index].balance = loggedUser.balance;
          } else {
            //Make nothing by now
          }
        });

        status.innerHTML = `Your current balance is ${loggedUser.balance}`;
        console.log(loggedUser.balance);
      } else {
        status.innerHTML = "Amount is negative or cero";
      }
    } else {
      status.innerHTML = "Amount is negative or cero";
    }
  } else {
    status.innerHTML = "Not logged In";
  }
};

const balance = ()=>{
    const email = document.getElementById('balanceEmail');
    const status = document.getElementById('balanceStatus')

    if (userExist) {
        if (email.value === loggedUser.email) {
            status.innerHTML = `Your current balance is: $ ${loggedUser.balance}`
        }
    }
}
