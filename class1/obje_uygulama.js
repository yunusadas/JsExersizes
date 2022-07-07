let siparis1 =
    {
        "sipari_id":101,
        "siparis_date":"31.12.2022",
        "odeme_sekli":"kredi kartı",
        "adres":"yahya kaptan mah.",
        "urunler":[{
            "urun_id":5,
            "urun_name":"Iphone 12 pro",
            "urun_url":"https://kazaeksper.com",
            "urun_fiyat":22000
        },
        {
            "urun_id":6,
            "urun_name":"Iphone 11 pro",
            "urun_url":"https://kazaeksper.com",
            "urun_fiyat":20000
        }
    ],
        "musteri_id":12,
        "seller_id":{
            "firma_id":34,
            "firma_ad":"Apple Türkiye"
        }

    };

let siparis2 =
    {
        "sipari_id":102,
        "siparis_date":"30.12.2022",
        "odeme_sekli":"kredi kartı",
        "adres":"yahya kaptan mah.",
        "urunler":[{
            "urun_id":5,
            "urun_name":"Iphone 12 pro",
            "urun_url":"https://kazaeksper.com",
            "urun_fiyat":22000
        },
        {
            "urun_id":6,
            "urun_name":"AirPods Pro",
            "urun_url":"https://kazaeksper.com",
            "urun_fiyat":6200
        }
        ],
        "musteri_id":12,
        "seller_id":{
            "firma_id":34,
            "firma_ad":"Apple Türkiye"
        }

    };
    
let siparisler = [siparis1,siparis2];

let sepet1 = (siparisler[0].urunler[0].urun_fiyat+siparisler[0].urunler[1].urun_fiyat);
let toplam1 = (sepet1*18/100)+sepet1;
console.log("Sepet1 Kdv dahil tutar: "+toplam1);

let sepet2 = (siparisler[1].urunler[0].urun_fiyat+siparisler[1].urunler[1].urun_fiyat);
let toplam2 = (sepet2*18/100)+sepet2;
console.log("Sepet2 Kdv dahil tutar: "+toplam2);

let total = toplam1+toplam2;
console.log("Tüm satışlar Kdv dahil tutar: "+total);