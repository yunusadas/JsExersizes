//soru1 Kere kelime döndğrme
function sayac(kez, msg) {
    for (i = 0; i < kez + 1; i++) {
        console.log(msg);
    }
}

sayac(4, "yunus");
//soru2 Hesaplama
function dortgenAlan(kk, uk) {
    let alan = kk * uk;
    let cevre = (kk + uk) * 2;

    console.log(alan);
    console.log(cevre);
}

dortgenAlan(7, 9);
//soru3 Yazı-Tura
function yaziTura() {
    let random = Math.random();

    if (random > 0.5) {
        console.log("Yazı");
    } else {
        console.log("Tura")
    }
}
yaziTura();


//soru4 Bir sayıyı tam bölenlerine ayırma ve diziye atma

function tamBolenler(sayi) {
    let sayilar = [];
    for(let i =2; i<sayi; i++){
        if(sayi%i==0){
            sayilar.push(i);
        }
    }

    return sayilar;
}

console.log(tamBolenler(10));
console.log(tamBolenler(15));

function toplam(a,b) {
    
    return a+b;
}
let sonuc1 = toplam(20,30);
console.log(sonuc1);


//Javadaki override hikayesi kaç paramete olursa olsun çalışır.
function hasToplam() {
    let sonuc = 0;

    for(i=0; i<arguments.length; i++){
        sonuc +=arguments[i]; 
    }
    console.log(sonuc);
}

hasToplam(8,9,63);
hasToplam(1,2,3);