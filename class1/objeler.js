let user1 = {
    "name": "Yunus",
    "last": "Adas",
    "yas": 23,
    "adres": {
        "sehir": "istanbul",
        "ilce": "bagcilar"
    },
    "hobiler": ["gitar", "kod yazmak", "araştırma"]
}

let user2 = {
    "name": "Hüseyin",
    "last": "Adas",
    "yas": 22,
    "adres": {
        "sehir": "istanbul",
        "ilce": "bagcilar"
    },
    "hobiler": ["Yatmak", "Erasmus", "101"]
}

let users = [user1, user2];

let sonuc;

sonuc = user1.name;
console.log(sonuc);

sonuc = user1.adres.sehir;
console.log(sonuc);

sonuc = user1.last;
console.log(sonuc);

sonuc = user1.hobiler[0];
console.log(sonuc);

sonuc = users[1].hobiler[2];
console.log(sonuc);

let urunler = [
    {
        "urun_adi": "macbook pro",
        "urun_yil": 2020,
        "urun_islemci": "intel"
    },

    {
        "urun_adi": "macbook air",
        "urun_yil": 2021,
        "urun_islemci": "M1"
    }
]

sonuc = urunler[0].urun_islemci;
console.log(sonuc);