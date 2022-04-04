const x = 5;
let result = 0;

// ----------------- pętla for ----------------------------------------

for (let i = 1; i <= x; i++) {
    result += i
    console.log(`Wynik iteracji ${i} pętli for to: ${result}`)
}

// --------------------------------------------------------------------

result = 0
console.log('------------------------------------------------------------------------------------------------------------------------------')

// ----------------- pętla while --------------------------------------

let y = 1
while (y <= x) {
    result += y
    console.log(`Wynik iteracji ${y} pętli while to: ${result}`)
    y++
}