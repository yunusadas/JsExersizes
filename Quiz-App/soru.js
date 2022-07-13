function Soru(soruMetni, cevaplar, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevaplar = cevaplar;
    this.dogruCevap = dogruCevap;

}
Soru.prototype.cevabKontrol = function (cevap) { //Metodu ithiyaca binaen kullanmak için prototype içine atma yöntemi!!!
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Java paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm", d: "Java" }, "c"),
    new Soru("2-.Net paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "b"),
    new Soru("3-Python paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "c"),
    new Soru("4-Java paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "c")
]
