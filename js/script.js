//business logic for Money
function Money() {
  this.bankAccount = [],
  this.currentId = 0
  }

Money.prototype.newbankAccount = function(bankAccount) {
  bankAccount.id = this.assignId();
  this.bankAccount.push(bankAccount);
}

Money.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//business logic for Bankaccount

// User Interface Logic
var money = new Money();

$(document).ready(function() {
  $("form#bankrupt").submit(function(event) {
    event.preventDefault()
