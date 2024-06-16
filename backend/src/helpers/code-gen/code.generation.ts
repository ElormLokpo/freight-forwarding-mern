export function generateCode() {
    let min = 100000;
    let max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}