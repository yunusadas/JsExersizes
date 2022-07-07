

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

let sorular = [
    new Soru("1-Java paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm", d:"Java" }, "c"),
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
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
    }
});

document.querySelector(".next-btn").addEventListener("click", function(){
    //yazılan css buton aktif edilirse aktif oluyor. Ters style active class olarak ekleniyor!!
    if (quiz.sorular.length != quiz.soruIndex+1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
    }else{
        alert("Quiz Bitti");
        console.log("Quiz bitti aq!")
    }
    
});

function soruGoster(soru){
    let question = `<span class="question">${soru.soruMetni}</span>`;
    let option = '';

    for(let cevap in soru.cevaplar){
        option +=
        `<div class="option">
            <span><b>${cevap}</b>:${soru.cevaplar[cevap]}</span>
            <div class="icon"><i class="fas fa-times"></i></div>
        </div>`;
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = option;
}