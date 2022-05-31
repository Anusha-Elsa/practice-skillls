
const value = [1, 2, 3, 4, 5, 6];
reversed = []
function reversal() {
    for (let i = value.length - 1; i >= 0; i--) {
        reversed.push(value[i])
    }
    return reversed
}
console.log(reversal())
// const value = [1, 2, 3, 4, 5, 6];
// const reversalOrder = value.sort().reverse()
// console.log(reversalOrder)
number = []
for (i = 0; i < 4; i++) {
    number.push(i)
    console.log(i)

}
console.log(number.pop())
console.log(number.pop())
console.log(number.pop())
console.log(number.pop())


