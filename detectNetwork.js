// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (findLength(cardNumber) === 14 && (findPrefix2(cardNumber) === "38" || findPrefix2(cardNumber) === "39")) return "Diner's Club";
  if (findLength(cardNumber) === 15 && (findPrefix2(cardNumber) === "34" || findPrefix2(cardNumber) === "37")) return "American Express";
  if (((findLength(cardNumber) === 16 || findLength(cardNumber) === 19) || findLength(cardNumber) === 18) && (findPrefix4(cardNumber) === "4903" || findPrefix4(cardNumber) === "4905" || findPrefix4(cardNumber) === "4911" || findPrefix4(cardNumber) === "4936" || findPrefix4(cardNumber) === "6333" || findPrefix4(cardNumber) === "6759" || findPrefix6(cardNumber) === 633110 || findPrefix6(cardNumber) === 564182)) return "Switch";
  if (findLength(cardNumber) === 16 && (findPrefix2(cardNumber) === "51" || findPrefix2(cardNumber) === "52" || findPrefix2(cardNumber) === "53" || findPrefix2(cardNumber) === "54" || findPrefix2(cardNumber) === "55")) return "MasterCard";
  if ((findLength(cardNumber) === 13 || findLength(cardNumber) === 16 || findLength(cardNumber) === 19) && cardNumber[0] === "4") return "Visa";
  if ((findPrefix4(cardNumber) === "6011" || findPrefix3(cardNumber) === "644" || findPrefix3(cardNumber) === "645" || findPrefix3(cardNumber) === "646" || findPrefix3(cardNumber) === "647" || findPrefix3(cardNumber) === "648" || findPrefix3(cardNumber) === "649" || findPrefix2(cardNumber) === "65") && (findLength(cardNumber) === 16 || findLength(cardNumber) === 19)) return "Discover";
  if ((findLength(cardNumber) >= 12 && findLength(cardNumber) <= 19) && (findPrefix4(cardNumber) === "5018" || findPrefix4(cardNumber) === "5020" || findPrefix4(cardNumber) === "5038" || findPrefix4(cardNumber) === "6304")) return "Maestro";
  if (((findPrefix6(cardNumber) >= 622126 && findPrefix6(cardNumber) <= 622925) || (parseInt(findPrefix4(cardNumber)) >= 6282 && parseInt(findPrefix4(cardNumber)) <= 6288) || (parseInt(findPrefix3(cardNumber)) >= 624 && parseInt(findPrefix3(cardNumber)) <= 626)) && (findLength(cardNumber) >= 16 && findLength(cardNumber) <= 19)) return "China UnionPay";
  return "invalid card";
};

function findLength(cardNum) {
	return cardNum.length;
}

function findPrefix2(cardNum) {
	return cardNum[0] + cardNum[1];
}

function findPrefix3(cardNum) {
	return cardNum[0] + cardNum[1] + cardNum[2];
}

function findPrefix4(cardNum) {
	return cardNum[0] + cardNum[1] + cardNum[2] + cardNum[3];
}

function findPrefix6(cardNum) {
	return parseInt(cardNum[0] + cardNum[1] + cardNum[2] + cardNum[3] + cardNum[4] + cardNum[5]);
}
