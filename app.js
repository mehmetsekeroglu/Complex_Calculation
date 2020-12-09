let numbers = [3, 2, 6, 15, 25, 40, 56, 175, 60, 70, 84, 100, 145, 156, 160];

//En Büyük ve En Kücük Sayi
let minArrayElement = 0;
let maxArrayElement = 0;
let firstElementArray = numbers[0];
let firstElementArrays = numbers[0];
for (let minMaxIndex = 0; minMaxIndex < numbers.length; minMaxIndex++) {
    if (firstElementArrays >= numbers[minMaxIndex]) {
        firstElementArrays = numbers[minMaxIndex];
        minArrayElement = firstElementArrays;
    } else if (firstElementArray <= numbers[minMaxIndex]) {
        firstElementArray = numbers[minMaxIndex]
        maxArrayElement = firstElementArray;
    }
}
console.log(`Dizinin en kucuk elemani: ${minArrayElement}`);
console.log(`Dizinin en buyuk elemani: ${maxArrayElement}`);

// Math Kutuphanesi kullanilarak dizinin elemanlarinin min ve max degerlerini bulma
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//Sayilarin Toplami
let totalNumber = 0;
for (let count = 0; count < numbers.length; count++) {
    let arrayElements = numbers[count];
    totalNumber = totalNumber + arrayElements;
}
console.log(`Dizinin elemanlari toplami: ${totalNumber}`);

//Sayilarin Ortalamasi
let averageNumber = totalNumber / numbers.length;
console.log(`Dizinin elemanlarinin ortalamasi: ${averageNumber}`);

//Sayilarin Kareleri Math.pow yöntemi ile karesinin alinmasi
let PowSquareNumber = 0
for (let PowSquareIndex = 0; PowSquareIndex < numbers.length; PowSquareIndex++) {
    let PowSquareElement = numbers[PowSquareIndex];
    PowSquareNumber = Math.pow(PowSquareElement, 2)
    console.log(`${PowSquareNumber}'in karesi ${PowSquareNumber}`);
}
//Sayilarin karesini alma
let squareNumber = 0
for (let squareindex = 0; squareindex < numbers.length; squareindex++) {
    let squareElement = numbers[squareindex];
    squareNumber = squareElement * squareElement
    console.log(`${squareElement}'in karesi= ${squareNumber}`);
}

//Sayilarin Karekökünü alma
let sqrtNumber = 0
for (let i = 0; i < numbers.length; i++) {
    let sqrtElement = numbers[i];
    sqrtNumber = Math.floor(Math.sqrt(sqrtElement))
    console.log(`${sqrtElement}'in karekokünün yaklasik tamsayi degeri= ${sqrtNumber}`);
}

