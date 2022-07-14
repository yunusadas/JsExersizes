function Soru(soruMetni, cevaplar, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevaplar = cevaplar;
  this.dogruCevap = dogruCevap;
}
Soru.prototype.cevabKontrol = function (cevap) {
  //Metodu ithiyaca binaen kullanmak için prototype içine atma yöntemi!!!
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Javascript paket yönetimi uygulaması nedir?",
    { a: "Node.js", b: "Nuget", c: "Npm", d: "JDK" },
    "c"
  ),
  new Soru(
    "2-Hangisi Ali Yılmaz hocanın verdiği derslerden biri değildir?",
    {
      a: "Bilgisayar Ağları",
      b: "Veri Yapıları",
      c: "Operating Systems",
      d: "Bilgisayar Mimarisi",
    },
    "b"
  ),
  new Soru(
    "3-Python görüntü işleme kütüphanesi hangisidir?",
    { a: "Keras", b: "Pandas", c: "Webdriver", d: "OS" },
    "a"
  ),
  new Soru(
    "4-Hangisi Java kütüphanesidir?",
    { a: "HyberNate", b: "Nugget", c: "CCNA", d: "TensorFlow" },
    "a"
  ),
];
