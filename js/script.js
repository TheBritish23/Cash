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

Money.prototype.findbankAccount = function(bankAccount) {
  for (var x=0; x < this.bankAccount.length; x++) {
    if (this.bankAccount[x]) {
      if (this.bankAccount[x].id == id) {
        return this.bankAccount[x];
      }
    }
  };
  return false;
}

//business logic for bankAccount

// User Interface Logic
var money = new Money();

function displayBankaccountDetails(moneyToDisplay) {
  var bankAccountList = $("ul#bankaccount");
  var htmlForbankAccountInfo = "";
  addressBookToDisplay.bankAccount.forEach(function(contact) {
    htmlForTicketsInfo += "<li id=" + bankaccount.id + ">" + bankaccount.peoplE + " " + bankaccount.filM + " " + bankaccount.timE + "</li>";
  });
  moneyList.html(htmlForMoneyInfo);
};

$(document).ready(function() {
  $("form#bankrupt").submit(function(event) {
    event.preventDefault()
  })
 })
