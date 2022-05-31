function* evenOdd() {
    for (let i = 0; i < 21; i++) {
        if (i % 2 == 0) {
            yield i + " is even";
        }
        else {
            yield i + " is odd";
        }
    }
}
for (let val of evenOdd()) {
    console.log(val);
} 