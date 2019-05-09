"use strict";

class BankAccount {
  constructor(balance) {
    this._initialBalance = balance;
    this._withdraws = [];
  }

  withdraw(amount) {
    if (this.getBalance() - amount < 0) {
      alert("Fehler. Sie sind arm!");
    } else {
      this._withdraws.push(amount);
    }
  }

  getBalance() {
    let balance = this._initialBalance;
    for (let withdraw of this._withdraws) {
      balance = balance - withdraw;
    }
    return balance;
  }
}

let b = new BankAccount(1000);
b.withdraw(200);
b.withdraw(900);
console.log(b.getBalance());
