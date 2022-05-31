function viewcount(views) {
    return (views < 1000000) ? 'result=' + parseInt(views * 0.10) : 'result=' + parseInt(views * 0.07)
}
console.log(viewcount(1400000))