const priceText = document.getElementById("price");
const numberOfRollsText = document.getElementById("number-of-rolls");
const numberOfSheetsText = document.getElementById("number-of-sheets");
const costPerSheetText = document.getElementById("cost-per-sheet");
const calculateButton = document.getElementById("calculate-button");

const finalCostPrice = document.querySelector(".final-cost__price");

let price;
let numberOfRolls;
let numberOfSheetsPerRoll;
let totalNumberOfSheets;
let costPerSheet;

priceText.addEventListener("input", () => {
  price = priceText.value;
  calculateCost();
});

numberOfRollsText.addEventListener("input", () => {
  numberOfRolls = numberOfRollsText.value;
  calculateCost();
});

numberOfSheetsText.addEventListener("input", () => {
  numberOfSheetsPerRoll = numberOfSheetsText.value;
  calculateCost();
});

const calculateCost = () => {
  totalNumberOfSheets = numberOfSheetsPerRoll * numberOfRolls;

  costPerSheet = price / totalNumberOfSheets;

  if (totalNumberOfSheets > 0) {
    if (costPerSheet >= 0.0001) {
      finalCostPrice.textContent = "$" + costPerSheet.toFixed(4).toString();
    } else {
      finalCostPrice.textContent = "too low to calculate";
    }
  }
};
