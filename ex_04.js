function balance(total_balance, withdraw) {
    let account_balance = total_balance - withdraw
    return withdraw < total_balance ? account_balance : "low balance"
}
console.log(balance(500, 600))