const quiz = new Quiz(sorular);
const ui = new UI();

//Başlangıç butonu
ui.btn_start.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    startTimer(10);
    startTimerLine();
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
  }
});

ui.next_btn.addEventListener("click", function () {
  //yazılan css buton aktif edilirse aktif oluyor. Ters style active class olarak ekleniyor!!
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    clearInterval(count);
    clearInterval(counter_line);
    startTimer(10); 
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
  } else {
    clearInterval(count);
    clearInterval(counter_line);
    ui.score_box.classList.add("active");
    ui.quiz_box.classList.remove("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

function optionSelected(optionList) {
  let cevap = optionList.querySelector("span b").textContent;
  clearInterval(count);
  clearInterval(counter_line);
  let soru = quiz.soruGetir();

  if (soru.cevabKontrol(cevap)) {
    quiz.dogruCevapSayisi += 1;
    optionList.classList.add("correct");
    optionList.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    optionList.classList.add("incorrect");
    optionList.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }

  ui.next_btn.classList.add("show");
}

let count;
function startTimer(time) {
  count = setInterval(timer, 1000); //bir metodu belirli bir zaman için sürekli çağırıyor!

  function timer() {
    ui.time_second.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(count);
      ui.time_text.textContent = "Süre Bitti!";

      let cevap = quiz.soruGetir().dogruCevap;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }

      ui.next_btn.classList.add("show");
    }
  }
}

let counter_line;
function startTimerLine() {
  let line_width = 0;
  counter_line = setInterval(timer, 20);

  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "px";

    if(line_width>548){
      clearInterval(counter_line);
    }
  }
}