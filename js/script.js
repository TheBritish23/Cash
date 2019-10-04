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
function bankAccount(namE, dEposit, aMount, wIthdraw) {
  this.namE = namE;
  this.dEposit = dEposit;
  this.aMount = aMount;
  this.wIthdraw = wIthdraw;
}

bankAccount.prototype.fullName = function() {
  return this.namE + " " + this.wIthdraw;
}

bankAccount.prototype.transaction = function() {
  console.log(this.namE);
  return parseInt(this.namE);
}

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

function showMoney(moneyId) {
  var bucks = money.findContact(moneyId);
  $("#show-contact").show();
  $(".name").html(movie.namE);
  $(".deposit").html(movie.dEposit);
  $(".amount").html(movie.aMount);
  $(".withdraw").html(movie.wIthdraw);
  var buttons = $("#buttons");
}

$(document).ready(function() {
  $("form#bankrupt").submit(function(event) {
    event.preventDefault()
    var inputtednamE = $("input#namE").val();
    var inputteddePosit = $("input#dePosit").val();
    var inputtedaMount = $("input#aMount").val();
    var inputtedwIthdraw = $("input#wIthdraw").val();
    $("input#namE").val("");
    $("input#dePosit").val("");
    $("input#aMount").val("");
    $("input#wIthdraw").val("");
    var newbankAccount = new bankAccount(inputtednamE, inputteddePosit, inputtedaMount, inputtedwIthdraw);
    var transaction = newbankAccount.transaction()
    $('#output').append('<p> Current Balance: $'+ transaction + '</p>');
  })
 })
