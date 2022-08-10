class Kisi {
  constructor(ad, dogumYili) {
    console.log("kisi constructor!");
    this.ad = ad;
    this.dogumYili = dogumYili;
  }

  yasHesapla(){
    let tarih = new Date().getFullYear();
    return tarih - this.dogumYili;
  }

  introduceYourSelf(){
    return `Adım ${this.ad}.`;
  }

}

class Ogrenci extends Kisi{
    constructor(ad, dogumYili, okulNo){
        console.log("ogrenci constructor!");
        super(ad, dogumYili);
        this.okulNo = okulNo;
    }
    dersCalis(){
        return `${this.ad} not alıyor.`;
    }
}
let kisi = new Kisi("Ali",1987)
let ogrenci = new Ogrenci("Yunus",1999,182122);

// console.log(ogrenci);
// console.log(kisi.yasHesapla());
// console.log(ogrenci.yasHesapla());

console.log(kisi.introduceYourSelf());
console.log(ogrenci.dersCalis());