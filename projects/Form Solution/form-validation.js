function validateCreditCardNumber(cardNumber) { //LUHN Algorithm implemented in JavaScript Form as a function
  cardNumber = cardNumber.split(' ').join("");


  if(parseInt(cardNumber) <= 0 || (!/\d{15,16}(~W[a-zA-Z])*$/.test(cardNumber)) || cardNumber.length > 16) {
      return false;
  }
  var carray = new Array();
  for(var i = 0; i < cardNumber.length; i++) {
      carray[carray.length] = cardNumber.charCodeAt(i) - 48;
  }
  carray.reverse(); // luhn approaches number from the end
  var sum = 0;
  for(var i = 0; i < carray.length; i++) {
      var tmp = carray[i];
      if((i % 2) != 0) {
          tmp *= 2;
          if(tmp > 9) {
              tmp -= 9;
          }
      }
      sum += tmp;
  }
  return (sum % 10) == 0;
}


function update(cardNumber) { //A function that takes the LUHN calculation and alerts the user to if the card number passes or fails
  var valid = document.getElementById("valid");
  if(validateCreditCardNumber(cardNumber)){
      valid.innerText = "Card Number Conforms to LUHN";
      valid.style.color = "green";
  }

  else {
      valid.innerText = "Card Number Doesn't Conform To LUHN";
      valid.style.color = "#700064";
  }
}