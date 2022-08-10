//class
class Kisi {
  constructor(ad, meslek, dogumYil) {
    this.ad = ad;
    this.meslek = meslek;
    this.dogumYil = dogumYil;
  }
  yasHesapla() {
    let tarih = new Date().getFullYear();
    return tarih - this.dogumYil;
  }

  get ad() {
    return this._ad;
  }
  set ad(value) {
    if (value.length < 3) {
      console.log("Bir ad giriniz!");
      return;
    }
    this._ad = value;
  }

  get dogumYil(){
    return this._dogumYil;
  }

  set dogumYil(value){
    if(value < 1900 || value > new Date().getFullYear()){
        console.log("Dogru bir tarih giriniz.")
        return;
    }
    this._dogumYil = value;
  }
}

let kisi1 = new Kisi("çınar", "Öğrenci", 2012);

console.log(kisi1.ad);
