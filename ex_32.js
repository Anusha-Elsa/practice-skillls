// function logger() {
//     console.log("Hello I'm Elsa")
// }
// logger()

// function fruitMixer(apples, oranges) {
//     const juice = `juice with ${apples} appples and ${oranges} oranges`;
//     return juice
// }
// // console.log(fruitMixer(3, 0));
// // or
// const applejuice = fruitMixer(2, 4)
// console.log(applejuice)
// function calAge1(birthYear) {
//     return 2022 - birthYear
// }
// const age1 = calAge1(1995)
// console.log(age1)

// or
// const calage2 = function (birthYear) {
//     return 2022 - birthYear
// }
// const age2 = calage2(1995)
// console.log(age2)
// Arrow function
// const calage3 = birthYear => 2022 - birthYear
// const age3 = calage3(1995)
// console.log(age3)
const calage4 = (birthYear, firstName) => {
    const age = 2022 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}
console.log(calage4(1995, "Elsa"));
console.log(calage4(1991, "Anna"));

