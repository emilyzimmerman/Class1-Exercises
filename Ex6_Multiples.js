let arrayOfMultiples = (a, b) => {
    let multiple = [];
    let x = 1; // why this?
    for(let i = 1; i <= b; i++) {
        multiple.push(a * x); 
        x++; 
    }
    return multiple; 
}; 

console.log(arrayOfMultiples(7,5))

