let sayilar = [1, 2, 3, 5, 6, 9, 352];

function selamlama(msg) {
    console.log(msg);
}

selamlama("Ohaa");

function yasHesapla(dYil) {

    let dtarih = new Date().getFullYear() - dYil;
   

    return dtarih;
}
yasHesapla(2007);

function emeklilik(dYil, isim) {
    let yas = yasHesapla(dYil);
    let kalan_sene = 65 -yas;
    if (kalan_sene>0) {
        console.log("Sayın "+isim +" Emekliliğe kalan süre: "+kalan_sene+ " yıldır.");
    }else{
        console.log("Emeklilik yaşı gelmiştir.")
    } 

    
}

emeklilik(1960, "mehmet");