function* somefunction() {
    
    for (var i = 0; i < 21; i++) {
        if (i % 2 == 0) {


            yield i + " is even";
        }
        else {
            yield i + " is odd";
        }
        
    }


}

for (let val of somefunction()){
    console.log(val)
}
