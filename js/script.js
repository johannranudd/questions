const questions = document.querySelectorAll(".question");

// questions.forEach(function(question) {
//     question.addEventListener("click", function(e) {
//         const button = e.target.parentElement.parentElement;
//         if (button.className === 'buttons') {
//             question.classList.toggle('show-text');
//         }
//         questions.forEach(function(i) {
//             if (i !== question) {
//                 i.classList.remove('show-text');
//             }
//         })
//     })
// })

questions.forEach(function (question) {
  const btn = question.querySelector(".buttons");
  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
    questions.forEach(function (i) {
      if (i !== question) {
        i.classList.remove("show-text");
      }
    });
  });
});
