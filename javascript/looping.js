const fruits = ['apple', 'banana', 'cherry'];

// for each
fruits.forEach((fruit) => {
    console.log(fruit);
});
console.log('=====================');
// for loop
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'banana') {
        console.log('i dont like banana');
        continue;
    }
    console.log(`i love ${fruits[i]}!`);
}