function atm(total_balance, withdraw) {
    if (withdraw > total_balance) {
        return "low balance"
    }
    const account_balance = total_balance - withdraw
    return account_balance
}
console.log(atm(500, 400))