const makeMytrip = [
    { busName: "KRP", rating: 4.5, traveingTo: "Chennai", departure: "8pm", type: "AC sleeper", price: 700 },
    { busName: "PVR", rating: 4, traveingTo: "Chennai", departure: "10pm", type: "AC sleeper", price: 1100 },
    { busName: "RPN", rating: 3.5, traveingTo: "Coimbatore", departure: "11pm", type: "Non-AC sleeper", price: 800 },
    { busName: "Parven", rating: 5, traveingTo: "Chennai", departure: "7pm", type: "AC sleeper", price: 700 },
    { busName: "Scania", rating: 4, traveingTo: "Madurai", departure: "11pm", type: "AC sleeper", price: 1200 },
    { busName: "Raj Travels", rating: 3, traveingTo: "Salem", departure: "11pm", type: "AC sleeper", price: 900 },
    { busName: "SRM Travels", rating: 4, traveingTo: "Chennai", departure: "10pm", type: "AC sleeper", price: 850 },
    { busName: "KKR Travels", rating: 4, traveingTo: "Coimbatore", departure: "9pm", type: "Non-AC sleeper", price: 450 },
    { busName: "MKP Tours", rating: 5, traveingTo: "Chennai", departure: "8pm", type: "Non-AC sleeper", price: 1250 },
    { busName: "KRI travles", rating: 3, traveingTo: "Coimbatore", departure: "9pm", type: "AC sleeper", price: 1400 },
    { busName: "HP bus", rating: 2, traveingTo: "Chennai", departure: "8pm", type: "AC sleeper", price: 800 },
    { busName: "JRP Travels", rating: 4, traveingTo: "Madurai", departure: "9pm", type: "AC sleeper", price: 650 },
]
let ChennaiBuses = makeMytrip.filter(i => i.traveingTo === "Coimbatore").sort((a, b) => b.rating - a.rating)

console.log(ChennaiBuses)