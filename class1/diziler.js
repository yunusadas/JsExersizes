let meyveler = ["elma", "armut", "muz", "çilek"];

sonuc = meyveler.length;
console.log(sonuc);

sonuc = meyveler.includes("elma");
console.log(sonuc);

sonuc = meyveler.push("Kiraz");
console.log(meyveler);

sonuc = meyveler.slice(meyveler.length - 2, 2);
console.log(meyveler);

let ogrenci1 = [
    "Yiğit Bilgi",
    2010,
    [70,60,80]
];

let ogrenci2 = [
    "Ada Bilgi",
    2012,
    [80,80,90]
];

let ogrenci3 = [
    "Ahmet Turan",
    2009,
    [60,60,70]
];

let ogrenciler = [ogrenci1,ogrenci2,ogrenci3];

let ogr1_yas = new Date().getFullYear - ogrenci1[1];
console.log(ogr1_yas);

let ogr2_yas = new Date().getFullYear - ogrenci2[1];
console.log(ogr2_yas);

let ogr3_yas = new Date().getFullYear - ogrenci3[1];
console.log(ogr3_yas);

let yigit_ort = (ogrenciler[0][2][0] + ogrenciler[0][2][1] + ogrenciler[0][2][2])/3;

console.log(yigit_ort);