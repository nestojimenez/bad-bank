var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#createAccount" onclick="defaultModule()">BadBank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#createAccount" onclick="loadCreateAccount()">Create Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Login" onclick="loadLogin()">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Withdraw" onclick="loadWithdraw()">
            Withdraw
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Deposit" onclick="loadDeposit()">Deposit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Balance" onclick="loadBalance()">Balance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#AllData" onclick="loadAllData()">AllData</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;

var navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;

ui.createAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            Name<br>
            <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
            Email address<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Password<br>
            <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn bg-secondary" onclick="create()">Create Account</button>
            <div id="createStatus"></div>
        </div>
    </div>
`;

ui.login = `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Login</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Password<br>
            <input type="password" class="form-control" id="loginPassword" placeholder="Enter password"><br>
            <button type="submit" id="submit" class="btn" onclick="login()">Login</button>
            <div id="loginStatus"></div>
        </div>
    </div>
`;

ui.deposit = `
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Amount<br>
            <input type="number" class="form-control" id="depositAmount" placeholder="Enter amount" value="0"><br>
            <button type="submit" class="btn" onclick="deposit()">Make Deposit</button>
            <div id="depositStatus"></div>
        </div>
    </div>
`;

ui.withdraw = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Withdraw</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Amount<br>
            <input type="number" class="form-control" id="withdrawAmount" placeholder="Enter amount" value="0"><br>
            <button type="submit" class="btn" onclick="withdraw()">Submit</button>
            <div id="withdrawStatus"></div>
        </div>
    </div>
`;

ui.balance = `
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Balance</div>
        <div class="card-body">
            Email<br>
            <input type="input" class="form-control" id="balanceEmail" placeholder="Enter email"><br>
            <button type="submit" class="btn" onclick="balance()">Show Balance</button>
            <div id="balanceStatus"></div>
        </div>
    </div>
`;

ui.default = `
    <div class="card text-white bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-dark">BadBank Landing Module</div>
        <div class="card-body">
            <h5 class="card-title text-dark">Welcome to the bank</h5>
            <p class="card-text text-dark">You can move around using the navigation bar.</p>
            <img src="bank.jpg" class="img-fluid" alt="Responsive image">
        </div>
    </div>
`;

ui.allData = `
    <h5>All Data in Store</h5>
    <button type="button" class="btn btn-secondary" onclick="allData()">Show all Data</button>
    <div id="allDataStatus"></div>
`;

let loadCreateAccount = ()=>{
    target.innerHTML = ui.createAccount;
}
let loadLogin = ()=>{
    target.innerHTML = ui.login;
}
let loadDeposit = ()=>{
    target.innerHTML = ui.deposit;
}
let loadWithdraw = ()=>{
    target.innerHTML = ui.withdraw;
}
let loadBalance = ()=>{
    target.innerHTML = ui.balance;
}
let defaultModule = ()=>{
    target.innerHTML = ui.default;
}
let loadAllData = ()=>{
    target.innerHTML = ui.allData;
}

defaultModule();