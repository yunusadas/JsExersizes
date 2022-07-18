// const msg = ["Altın","kapılarımız","kan","oldu","tayfun"];

// //ES5
// let sonuc = "";
// for (let x of msg){
//     sonuc += x + " ";
// }
// console.log(sonuc);

// //ES6
// console.log(...msg);

// const dizi1 = ["yunus","adaş"];
// const dizi2 = ["huseyn","adaş"];

// const dizi3 = [...dizi1, ...dizi2];

// console.log(dizi3);

const dizi1 = [1,2,3,4];
// const dizi2 = dizi1; //referans kopyalama
const dizi2 = [...dizi1]; //value kopyalama

dizi1[0]=10; //Bellek referansı aynı olduğu için 2 dizide de 1. eleman 10 olur;

console.log(dizi1, dizi2);

const user = {
    username:"yunusadas",
    email: "yunus@gmail.com"
}

const adress = {
    adres:"basakcity"
}
console.log({...user, ...adress});

//rest parameters
//birden çoık toplama yada işlem için kullanabilirsin ÇOK ÖNEMLİ !!!  
function toplam(...args){ 
    let sonuc = 0;

    for(sayi of args){
        sonuc +=sayi;
    }
    return sonuc;
}
console.log(toplam(100,325,600,346))


//Belirsiz sayıda veri ile işlem yaptığında spread kullanırsın KOÇUMMM!
function bilgiler(ad,soyad,...bilgiler){
    console.log(ad,soyad,bilgiler);
}
bilgiler("Yunus ","Adaş","17 ","Erkek");