


let i = 1


while (i <= 100) {

    if (i%3 === 0 && i%5 === 0) {
        let a = 'FizzBuzz'
        console.log(a)
    }
    else if (i%3 === 0 ) {
        let b = 'Fizz'
        console.log(b)

    }
    else if (i%5 === 0 ) {
        let c= 'Buzzz'
        console.log(c)

    }

   else{
    console.log(i)

   }

    i++
}




