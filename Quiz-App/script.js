const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
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
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
  } else {
    alert("Quiz Bitti");
    console.log("Quiz bitti aq!");
  }
});

function optionSelected(optionList) {
  let cevap = optionList.querySelector("span b").textContent;
  console.log(cevap);

  let soru = quiz.soruGetir();

  if (soru.cevabKontrol(cevap)) {
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
