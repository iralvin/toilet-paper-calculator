const priceText = document.getElementById("price");
const numberOfRollsText = document.getElementById("number-of-rolls");
const numberOfSheetsText = document.getElementById("number-of-sheets");
const costPerSheetText = document.getElementById("cost-per-sheet");
const calculateButton = document.getElementById("calculate-button");

const finalCost = "Cost per sheet: ";
let price;
let numberOfRolls;
let numberOfSheetsPerRoll;
let totalNumberOfSheets;
let costPerSheet;


// const CalculateCost = function(){

//     this.getValues = function(){
//         price = priceText.value;
//         numberOfRolls = numberOfRollsText.value;
//         numberOfSheetsPerRoll = numberOfSheetsText.value;
//     }

//     this.calculate = function(){
//         totalNumberOfSheets = numberOfSheetsPerRoll * numberOfRolls;

//         costPerSheet = price/totalNumberOfSheets;
//         costPerSheetText.innerHTML = finalCost.bold() + costPerSheet.toFixed(4).toString();
//     }

// }

// const NewCalculateCost = new CalculateCost();

// calculateButton.onclick = function(){
//     NewCalculateCost.getValues();
//     NewCalculateCost.calculate();
// }




const CalculateCost = function(){

        price = priceText.value;
        numberOfRolls = numberOfRollsText.value;
        numberOfSheetsPerRoll = numberOfSheetsText.value;
    
        totalNumberOfSheets = numberOfSheetsPerRoll * numberOfRolls;

        costPerSheet = price/totalNumberOfSheets;
        
        if (totalNumberOfSheets > 0){
            if (costPerSheet >= 0.0001){
                costPerSheetText.innerHTML = finalCost.bold() + "$" + costPerSheet.toFixed(4).toString();
            }
            else {
                costPerSheetText.innerHTML = finalCost.bold() + "too low to calculate";
            }
        }
}

window.setInterval(CalculateCost, 200);