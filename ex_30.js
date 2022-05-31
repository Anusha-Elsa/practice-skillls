// destructuring

// const makeMytrip = [
//     { busName: "KRP", rating: 4.5, traveingTo: "Chennai", departure: "8pm", type: "AC sleeper", price: 700 },
//     { busName: "PVR", rating: 4, traveingTo: "Chennai", departure: "10pm", type: "AC sleeper", price: 1100 },
//     { busName: "RPN", rating: 3.5, traveingTo: "Coimbatore", departure: "11pm", type: "Non-AC sleeper", price: 800 },
//     { busName: "Parven", rating: 5, traveingTo: "Chennai", departure: "7pm", type: "AC sleeper", price: 700 },
//     { busName: "Scania", rating: 4, traveingTo: "Madurai", departure: "11pm", type: "AC sleeper", price: 1200 },
//     { busName: "Raj Travels", rating: 3, traveingTo: "Salem", departure: "11pm", type: "AC sleeper", price: 900 },
//     { busName: "SRM Travels", rating: 4, traveingTo: "Chennai", departure: "10pm", type: "AC sleeper", price: 850 },
//     { busName: "KKR Travels", rating: 4, traveingTo: "Coimbatore", departure: "9pm", type: "Non-AC sleeper", price: 450 },
//     { busName: "MKP Tours", rating: 5, traveingTo: "Chennai", departure: "8pm", type: "Non-AC sleeper", price: 1250 },
//     { busName: "KRI travles", rating: 3, traveingTo: "Coimbatore", departure: "9pm", type: "AC sleeper", price: 1400 },
//     { busName: "HP bus", rating: 2, traveingTo: "Chennai", departure: "8pm", type: "AC sleeper", price: 800 },
//     { busName: "JRP Travels", rating: 4, traveingTo: "Madurai", departure: "9pm", type: "AC sleeper", price: 650 },
// ]

// const arr = [2, 3, 4]
// const [x, , z] = arr
// console.log(x, z)
const vasanthBhavan = {
    breakfastMenu: ["dosa", "idly", "pongal", "poori"],
    lunchMenu: ["chapathi", "fullmeals", "special meals", "parotta"],
    dinner: ["chola poori", "veg biryani", "pulav"]
}
//  const [main, secondary] = vasanthBhavan.lunchMenu
//  console.log(main, secondary)
//  const temp = main;
//  main = secondary;
// secondary = temp
// console.log(main, secondary)
let [first, second] = vasanthBhavan.lunchMenu
console.log(first, second)
// [first, second] = [second, first]
// console.log(first, second)
console.log(first)
console.log(second)
[first, second] = [second, first]
console.log(first)