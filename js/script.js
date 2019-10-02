//business logic for moNey
function Audience() {
  this.BankAccount = [],
  this.currentId = 0
  }

//business logic for BankAccount

// User Interface Logic
$(document).ready(function() {
  $("form#bankrupt").submit(function(event) {
    event.preventDefault()
