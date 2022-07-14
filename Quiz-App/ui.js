function UI() {
  this.btn_start = document.querySelector(".btn-start");
  this.btn_replay = document.querySelector(".btn_replay");
  this.btn_quit = document.querySelector(".btn_quit");
  this.next_btn = document.querySelector(".next-btn");
  this.quiz_box = document.querySelector(".quiz_box");
  this.score_box = document.querySelector(".score_box");
  this.option_list = document.querySelector(".option_list");
  this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
  this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
}

UI.prototype.soruGoster = function (soru) {
  let question = `<span class="question">${soru.soruMetni}</span>`;
  let option = "";

  for (let cevap in soru.cevaplar) {
    option += `<div class="option">
            <span><b>${cevap}</b>:${soru.cevaplar[cevap]}</span>
        </div>`;
  }
  const option_list = document.querySelector(".option_list");
  document.querySelector(".question_text").innerHTML = question;
  this.option_list.innerHTML = option;

  const optionList = this.option_list.querySelectorAll(".option");

  for (let opt of optionList) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};
//Soru sırası dinamik getirme başlanguıç!
UI.prototype.soruSayisiGoster = function (soruSirasi, toplamSoru) {
  let tag = `<span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`;
  document.querySelector(".quiz_box .question-index").innerHTML = tag;
};
//Soru sırası dinamik getirme bitiş!

UI.prototype.skoruGoster = function (toplamSoru, dogruCevap) {
  let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
};
