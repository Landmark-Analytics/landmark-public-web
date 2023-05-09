//-------------------------
//Sticky section header positioning
const header = document.querySelector("header");
const sectionTitles = document.querySelectorAll(".project-title");

function calcHeaderStickyPos() {
  const headerHeight = header.getBoundingClientRect().height;

  sectionTitles.forEach((t) => {
    t.style.top = headerHeight + "px";
  });
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
const lbBtnClose = document.querySelector('#lightbox-btn-close');
const lbBtnGroupPrev = document.querySelector("#lightbox-btn-prev");
const lbBtnGroupNext = document.querySelector("#lightbox-btn-next");
const thumbLinks = document.querySelectorAll(".thumb");
let isOpen = false;
let groupInfo = null;

function lbClose() {
  isOpen = false;
  lbContainer.classList.remove("show");
}

function lgGetGroupInfo(thumbLink) {
  const groupName = thumbLink.getAttribute("data-group");
  if (groupName) {
    const group = [
      ...document.querySelectorAll(".thumb[data-group=" + groupName + "]"),
    ];
    const currentIdx = group.indexOf(group.find((t) => t.isEqualNode(thumbLink)));

    groupInfo = {
      prev: group[currentIdx - 1 === -1 ? group.length - 1 : currentIdx - 1],
      next: group[currentIdx + 1 === group.length ? 0 : currentIdx + 1],
    };
  } else {
    groupInfo = null;
  }
}

function lbDisplay(thumbLink) {
  isOpen = true;
  lbImgContainer.querySelector("img").src = thumbLink.href ;
  lbImgContainer.querySelector("img").alt = thumbLink.getAttribute("title");
  lbTitle.innerHTML = thumbLink.getAttribute("title");
  lbContainer.classList.add("show");
  lgGetGroupInfo(thumbLink);
}

//click elements to close
lbBackdrop.addEventListener("click", lbClose);
lbImgContainer.addEventListener("click", lbClose);
lbTitle.addEventListener("click", lbClose);

//Keyboard nav
document.addEventListener("keydown", (ev) => {
  if (isOpen) {
    switch (ev.key) {
      case "Escape":
        lbClose();
        break;
      case "ArrowRight":
        lbDisplay(groupInfo.next);
        break;
      case "ArrowLeft":
        lbDisplay(groupInfo.prev);
        break;
      default:
        break;
    }
  }
});

lbBtnClose.addEventListener('click', (ev) => {
  ev.preventDefault();
  lbClose();
})

lbBtnGroupPrev.addEventListener('click', (ev) => {
  ev.preventDefault();
  lbDisplay(groupInfo.prev);
})

lbBtnGroupNext.addEventListener('click', (ev) => {
  ev.preventDefault();
  lbDisplay(groupInfo.next);
})

thumbLinks.forEach((t) => {
  t.addEventListener("click", (ev) => {
    ev.preventDefault();
    lbDisplay(t);
  });
});
