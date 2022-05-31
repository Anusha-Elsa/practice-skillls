// function atm_balance(balance, withdrawAmount, withdrawCount) {
//     if (withdrawCount <= 5) {
//         const result = balance - withdrawAmount
//         return "Amount=" + result
//     } else if (withdrawCount > 5 && withdrawCount <= 10) {
//         const result = balance - withdrawAmount - 20
//         return "Amount=" + result
//     } else {
//         const result = balance - withdrawAmount - 40
//         return "Amount=" + result
//     }
// }
// console.log(atm_balance(1000, 200, 12))

function atm_balance(balance, withdrawAmount, withdrawCount) {
    let total_amount = ((withdrawCount <= 5) ? `Amount= ${balance - withdrawAmount}`
        : (withdrawCount > 5 && withdrawCount <= 10) ? `Amount= ${balance - withdrawAmount - 20}`
            : `Amount=${balance - withdrawAmount - 40}`)
    return total_amount

}
console.log(atm_balance(1000, 200, 12))
