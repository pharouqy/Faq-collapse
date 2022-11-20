const btns = document.querySelectorAll("button.faq-toggle");

const x = document.querySelectorAll("button i.fa-xmark");
const y = document.querySelectorAll("button i.fa-chevron-down");

const paraph = document.querySelectorAll("article.faq p");
const collapsed = document.querySelectorAll("article");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    if (btns[i].classList.contains("faq-toggle")) {
      x[i].style.display = "block";
      y[i].style.display = "none";
      btns[i].classList.remove("faq-toggle");
      btns[i].classList.add("faq-toggle-active");
      paraph[i].classList.add("active");
      collapsed[i].style.height = "40vh";
      collapsed[i].style.backgroundColor = "rgba(255,255,255,0.5)";
    } else {
      x[i].style.display = "none";
      y[i].style.display = "block";
      btns[i].classList.add("faq-toggle");
      btns[i].classList.remove("faq-toggle-active");
      paraph[i].classList.remove("active");
      collapsed[i].style.height = "20vh";
      collapsed[i].style.backgroundColor = "#fff";
    }
  });
}
