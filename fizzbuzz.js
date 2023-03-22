// Write your solution below this line:
// const N = 51;
// const arr = Array.from(Array(N), (_, i) => i++);
// console.log(arr);

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}