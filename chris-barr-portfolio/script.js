//-------------------------
//Sticky section header positioning
const header = document.querySelector("header");
const sectionTitles = document.querySelectorAll(".project-title");

function calcHeaderStickyPos() {
  const headerHeight = header.getBoundingClientRect().height;

  for (let i = 0; i < sectionTitles.length; i++) {
    const t = sectionTitles[i];
    t.style.top = headerHeight + "px";
  }
}

calcHeaderStickyPos();

let timer = null;
window.addEventListener("resize", () => {
  clearTimeout(timer);
  timer = setTimeout(calcHeaderStickyPos, 300);
});

//-------------------------
//Lightbox Stuff
const lbContainer = document.querySelector("#lightbox");
const lbImgContainer = document.querySelector("#lightbox-img");
const lbTitle = document.querySelector("#lightbox-title");
const lbBackdrop = document.querySelector("#lightbox-backdrop");
const thumbs = document.querySelectorAll(".thumb");

function lbClose(){
  lbContainer.classList.remove("show");
}

//click elements to close
lbBackdrop.addEventListener("click", lbClose);
lbImgContainer.addEventListener("click", lbClose);
lbTitle.addEventListener("click", lbClose);

//press ESC to close
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") {
    lbClose();
  }
});

for (let i = 0; i < thumbs.length; i++) {
  const t = thumbs[i];
  t.addEventListener("click", (ev) => {
    const img = t.querySelector("img");
    console.log(lbImgContainer, img.src)
    lbImgContainer.style.backgroundImage = 'url("' + img.src + '")';
    lbTitle.innerHTML = img.getAttribute("alt");
    lbContainer.classList.add("show");
    ev.preventDefault();
  });
}
