let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];
//soru1
for (sayi of sayilar) {
    console.log(sayi ** 2);
}
//soru2
for (sayi of sayilar) {
    if (sayi % 5 == 0) {
        console.log(sayi);
    }
    else {
        continue;
    }
}
//soru3
sum = 0;
for (sayi of sayilar) {
    if (sayi % 2 == 0) {
        sum += sayi;
    }
}
console.log(sum);
//soru4

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

for (let urun of urunler) {
     console.log(urun.toUpperCase());
}
//soru5 kelime sorgusu
for (i = 0; i < urunler.length; i++) {
    varmi = urunler[i].includes("samsung");
    console.log(varmi);
}
//soru 6 not ortalaması
let ogrenciler = [
    {
        "ad": "Yunus",
        "soyad": "Adas",
        "notlar": [60, 70, 80]
    },
    {
        "ad": "Mehmet",
        "soyad": "Adas",
        "notlar": [40, 30, 40]
    },
    {
        "ad": "Mustafa",
        "soyad": "Adas",
        "notlar": [90, 80, 80]
    },
    {
        "ad": "Huseyin",
        "soyad": "Adas",
        "notlar": [70, 70, 80]
    }
]
let sub = 0;
for (i = 0; i < ogrenciler.length; i++) {

    notes = ogrenciler[i].notlar;
    console.log(notes);

    ogr = (notes[0] + notes[1] + notes[2]) / notes.length;

    sub += ogr;

    ortalama = sub / ogrenciler.length
    if (ogr > 50) {
        console.log("Geçti: " + ogr);
    } else {
        console.log("Kaldı: " + ogr);
    }

}
console.log("Tüm ortlama: " + ortalama);