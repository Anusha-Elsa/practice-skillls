class holder {
    even1(array) {

        let even = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                even.push(array[i])
            }
        }
        return even
    }

    reversal(array) {

        let reversed = []
        for (let i = array.length - 1; i >= 0; i--) {
            reversed.push(array[i])
        }
        return reversed
    }

    





    
}
let operation = new holder
console.log(operation.even1([1,2,3,4,5,6]))









