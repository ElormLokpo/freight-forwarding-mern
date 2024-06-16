export function generateCode() {
    let numbers = new Set();
    while (numbers.size < 6) {
        let randomNumber = Math.floor(Math.random() * 1000000);
        if (randomNumber.toString().length === 6) {
            numbers.add(randomNumber);
        }
    }
    return Array.from(numbers);
}