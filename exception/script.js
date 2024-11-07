function firstMessage(){
    displayMessage("Goodbye, see you soon!");
}

function secondMessage(callback){
    displayMessage("Hello, welcome!");
    callback();
}

function displayMessage(text){
    console.log(text);
}

// Memanggil fungsi dengan callback
secondMessage(firstMessage);

// DELAY dengan setTimeout
console.log("Kalimat pertama");
setTimeout(() => {
    console.log("Kalimat tertunda ini muncul setelah 3 detik");
}, 3000);
console.log("Kalimat kedua");
console.log("Kalimat ketiga");
console.log("Kalimat keempat");
console.log("Kalimat kelima");

// TIMER menggunakan setInterval
function updateTime() {
    const title = document.getElementById("title");
    title.textContent = new Date().toLocaleString();
}
setInterval(updateTime, 1000);
console.log("Program selesai dijalankan");

// FUNGSI PENGECEKAN & PEMBAGIAN ANGKA
function divideNumbers(a, b){
    try {
        // Memeriksa apakah terdapat dua argumen
        if (arguments.length < 2) {
            throw new Error("Dibutuhkan dua angka sebagai argumen");
        }
        // Memeriksa apakah kedua argumen berupa angka
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Kedua argumen harus berupa angka");
        }
        // Memeriksa apakah angka kedua bukan nol
        if (b === 0) {
            throw new Error("Pembagian dengan angka nol tidak diperbolehkan");
        }
        const hasil = a / b;
        return hasil;
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return null;
    }
}

// Contoh penggunaan divideNumbers
// console.log(divideNumbers(4, 0));
// console.log(divideNumbers(15, 'test'));
// console.log(divideNumbers(5));
console.log(divideNumbers(18, 3));
