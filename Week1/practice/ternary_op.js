let canAfford = (itemPrice, accountBalance) => {
    // test condition must be returned if not using if statements
    return itemPrice > accountBalance // test condition
    ? `Cannot afford! You are $${itemPrice - accountBalance} short` // false condition
    : "Can afford"; // true condition
};

let myBankAccountBalance = 1000;
const drone = 1001;

let droneOnSale = drone - drone * 0.03;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));