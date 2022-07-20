// function constructor
function KisiES5(ad, meslek, dogumYil) {
  this.ad = ad;
  this.meslek = meslek;
  this.dogumYil = dogumYil;
}

let emre = new KisiES5("Yunus", "CE", 1999);
let huseyin = new KisiES5("Hüseyin", "EEE", 2000);

KisiES5.prototype.yasHesapla = function () {
  let tarih = new Date().getFullYear();
  return tarih - this.dogumYil;
};

console.log(emre.yasHesapla());

//class
class KisiES6 {
  constructor(ad, meslek, dogumYil) {
    this.ad = ad;
    this.meslek = meslek;
    this.dogumYil = dogumYil;
  }
  yasHesapla() {
    let tarih = new Date().getFullYear();
    return tarih - this.dogumYil;
  }
}

let kisi1 = new KisiES6("Çınar", "Öğrenci", 2007);
console.log(kisi1.yasHesapla());
