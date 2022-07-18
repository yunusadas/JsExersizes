const sayilar = [1,5,7,10,3,67];
const urunler = [
    {urunAdi: "MSI Ekran", fiyat: 1200},
    {urunAdi: "MSI Maus", fiyat: 300},
    {urunAdi: "MSI Klavye", fiyat: 4000},
    {urunAdi: "MSI Laptop", fiyat: 9000}
]    

//ES5
    // for(let sayi of sayilar){
    //     if(sayi%2==1){
    //         tekSyailar.push(sayi)
    //     }
    //     console.log(tekSyailar);
    // }

    //ES6
    // const tekSayiKontrol = (sayi) => sayi % 2;

    // const tekSayilar = sayilar.filter(tekSayiKontrol);

    //ES5-Alternatif
    // const tekSayilar = sayilar.filter((sayi) => sayi % 2); //Filter değer döner!
    //const tekSayilar = sayilar.map((sayi) => sayi % 2); //map true or false döner!

    // const sonuc = urunler.map(urun => urun.fiyat);
    // const sonuc = urunler.filter(urun => urun.fiyat > 2000).map(urun => urun.fiyat);
    // const sonuc = urunler.find(urun => urun.fiyat>500); //Bulunan ilk büyük değeri döndürür!
    // const sonuc = urunler.findIndex(urun => urun.fiyat>500); //Bulunan ilk büyük değerin Indexini döndürür!
    

    console.log(sonuc);