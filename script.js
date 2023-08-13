let img = document.querySelector(".moveImg");
let img2 = document.querySelector(".moveImg2");
let img3 = document.querySelector(".moveImg3");
let targetBox = document.querySelector(".inner-box");

document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY <= 330) {
    img.style.transform = `translate(${window.scrollY / 1.6}px, ${
      window.scrollY * 1.91
    }px)`;
    img2.style.transform = `translate(${-window.scrollY * 1.3}px, ${
      window.scrollY
    }px)`;
    img3.style.transform = `translate(${-window.scrollY}px, ${-window.scrollY}px)`;
  } else {
    return;
  }
});
