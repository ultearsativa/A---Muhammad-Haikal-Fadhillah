//ARRAY & STRING METHODS
//SLICE
const animals = ['anjing','kucing','babi','bebek','gajah']
console.log(animals.slice(-2));

//toUpperCase toLowerCase
const TEXT1 = document.querySelector('#text1')
const UPPERCASE = document.querySelector('#uppercase')
let celerates = 'celeRates'
celerates = celerates.toUpperCase()
console.log('TOUPPERCASE' + celerates)
UPPERCASE.innerText = celerates

let content1 ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque illo ipsa. Deleniti cupiditate rerum, reprehenderit fuga corporis placeat necessitatibus aut. Illo natus suscipit cum minus dolorem quas ipsa rerum!'
content1 = content1.toLowerCase()
console.log('lowercase' + content1)

const lowercase = document.querySelector('#lowercase')
lowercase.innerText = content1

//split
const foods = 'mie , nasgor, sate, ayam, ketoprak'
const splittedFoods = foods.split(', ')
console.log(splittedFoods)

//replace
console.log(foods.replace('nasgor','NASGOR'))

const tropicalFruits = ['Coconut','Mango','Orange','Watermelon','Apple']
console.log('Jumlah array stlh ditambah data baru' + tropicalFruits.push('Durian'))
console.log(tropicalFruits)

//POP
// const newTropicalFruits = tropicalFruits.slice()
const newTropicalFruits = Array.from(tropicalFruits)
newTropicalFruits.pop()
console.log('Array Lama :' + tropicalFruits)
console.log('Array Baru :' + newTropicalFruits)


//SHIFT
newTropicalFruits.shift()
console.log(newTropicalFruits)

//UNSHIFT
const myTropicalFruits=['Melon','Grapes']
newTropicalFruits.unshift('Banana','Pineapple',...myTropicalFruits)
console.log(newTropicalFruits)

//CONCAT
const myFavFruits = ['Klengkeng','Semangka']
const FavFruits = newTropicalFruits.concat(myFavFruits)
console.log(newTropicalFruits)

const arrNum1 = [1,2,3,1,4,6]
const arrNum2 = [9,7,8,5]
const  arrNum3 = [...arrNum1,...arrNum2]
console.log(arrNum3)

//REDUCE
const totalNum = arrNum3.reduce((acc, currItem) => acc + currItem, 0)
console.log(totalNum)

//FOREACH
FavFruits.forEach((fruit, index) => console.log(`Index ke ${index} buah: ${fruit}`))

//FIND
console.log('Array Num 3' + arrNum3)
const findNumberLargerThan2 = arrNum3.find((num) => num > 2)
console.log(findNumberLargerThan2)

//Soal dari kak Elsi
let antri = ['ray', 'fiki', 'fadhilla', 'farah']
antri = [...antri, 'nabilla','mazaya','elsi']
antri.pop();
antri = antri.slice(2)
antri = ['tomi',...antri]
console.log(antri);