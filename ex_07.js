let total_bill = 550
if (total_bill >= 500) {
    console.log("you get 40% offer")
    total_bill = (total_bill * 40) / 100
    console.log("Bill_amount=" + total_bill)
} else if (total_bill >= 300 && total_bill < 500) {
    console.log("you get 20% offer")
    console.log("Bill_Amount=" + (total_bill * 20) / 100)
} else {
    console.log("No offer")
    console.log("Bill_amount=" + total_bill)
}