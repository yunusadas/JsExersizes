

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
    new Soru("1-Java paket yönetimi uygulaması nedir?", { a: "Node.js", b: "nuget", c: "Npm", d: "Java" }, "c"),
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
        document.querySelector(".next-btn").classList.remove("show");
    }
});

document.querySelector(".next-btn").addEventListener("click", function () {
    //yazılan css buton aktif edilirse aktif oluyor. Ters style active class olarak ekleniyor!!
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
        document.querySelector(".next-btn").classList.remove("show");
    } else {
        alert("Quiz Bitti");
        console.log("Quiz bitti aq!")
    }

});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function soruGoster(soru) {
    let question = `<span class="question">${soru.soruMetni}</span>`;
    let option = '';

    for (let cevap in soru.cevaplar) {
        option +=
            `<div class="option">
            <span><b>${cevap}</b>:${soru.cevaplar[cevap]}</span>
        </div>`;
    }
    const option_list = document.querySelector(".option_list");
    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = option;

    const optionList = option_list.querySelectorAll(".option");

    for (let opt of optionList) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}
function optionSelected(optionList) {
    let cevap = optionList.querySelector("span b").textContent;
    console.log(cevap);

    let soru = quiz.soruGetir();

    if (soru.cevabKontrol(cevap)) {
        optionList.classList.add("correct");
        optionList.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        optionList.classList.add("incorrect");
        optionList.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for (i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }

    document.querySelector(".next-btn").classList.add("show");
}