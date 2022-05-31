function bill(total_bill) {
    return (total_bill >= 500) ? "you got 40% off" + "\n" + "Bill_Amount=" + (total_bill * 40) / 100
        : (total_bill >= 300 && total_bill < 500) ? "you got 20% off" + "\n" + "Bill_Amount=" + (total_bill * 20) / 100
            : "no offer" + "\n" + "Bill_amount=" + total_bill
}

console.log(bill(550))


