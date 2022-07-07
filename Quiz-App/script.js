

// let soru1 = {

//     soruMetni: "Java paket yönetimi uygulaması nedir?",
//     cevaplar: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevapKontrol: function (cevap) {
//         return cevap === this.dogruCevap;
//     }
// }
// let soru2 = {

//     soruMetni: ".Net paket yönetimi uygulaması nedir?",
//     cevaplar: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevapKontrol: function (cevap) {
//         return cevap === this.dogruCevap;
//     }
// }
// let soru3 = {

//     soruMetni: "Java paket yönetimi uygulaması nedir?",
//     cevaplar: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevapKontrol: function (cevap) {
//         return cevap === this.dogruCevap;
//     }
// }

function Soru(soruMetni, cevaplar, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevaplar = cevaplar;
    this.dogruCevap = dogruCevap;

}
Soru.prototype.cevabKontrol = function (cevap) { //Metodu ithiyaca binaen kullanmak için prototype içine atma yöntemi!!!
    return cevap === this.dogruCevap;
}

let soru1 = new Soru("Java paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "c");
let soru2 = new Soru(".Net paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("1-Java paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "c"),
    new Soru("2-.Net paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "b"),
    new Soru("3-Python paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "c"),
    new Soru("4-Java paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm" }, "c")
]

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;

}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);



document.querySelector(".btn-start").addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex) {
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    }else{
        console.log("Quiz bitti aq!")
    }
    
});

