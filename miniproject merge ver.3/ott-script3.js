var a = document.getElementById("popup").style.display="inline";

if(a = true){
  document.querySelector('.popupcancle').addEventListener('click', function(){
    document.getElementById("popup").style.display="none";
  });
}

const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");
let slideItems = document.querySelectorAll(".slide_item");
const maxSlide = slideItems.length;
let currSlide = 1;
const pagination = document.querySelector(".slide_pagination");
  for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
  }

const paginationItems = document.querySelectorAll(".slide_pagination > li");
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

  endSlide.classList.forEach((c) => endElem.classList.add(c));
  endElem.innerHTML = endSlide.innerHTML;

  startSlide.classList.forEach((c) => startElem.classList.add(c));
  startElem.innerHTML = startSlide.innerHTML;
  slideItems[0].before(endElem);
  slideItems[slideItems.length - 1].after(startElem);
  slideItems = document.querySelectorAll(".slide_item");
  let offset = slideWidth + currSlide;
  slideItems.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
  });
  function nextMove() {
    currSlide++;
    if (currSlide <= maxSlide) {
      const offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    } else {
      currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
nextBtn.addEventListener("click", () => {
  nextMove();
});
prevBtn.addEventListener("click", () => {
  prevMove();
});
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});
for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}
let startPoint = 0;
let endPoint = 0;
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; 
});
slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; 
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; 
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);
slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
});

document.querySelector('.btn01').addEventListener('click', function(){
  document.querySelector('.subcontainer').style.transform = 'translate(0vw)';
});
document.querySelector('.btn02').addEventListener('click', function(){
  document.querySelector('.subcontainer').style.transform = 'translate(-110vw)';
});
document.querySelector('.btn03').addEventListener('click', function(){
  document.querySelector('.subcontainer1').style.transform = 'translate(0vw)';
});
document.querySelector('.btn04').addEventListener('click', function(){
  document.querySelector('.subcontainer1').style.transform = 'translate(-110vw)';
});
document.querySelector('.btn05').addEventListener('click', function(){
  document.querySelector('.subcontainer2').style.transform = 'translate(0vw)';
});
document.querySelector('.btn06').addEventListener('click', function(){
  document.querySelector('.subcontainer2').style.transform = 'translate(-110vw)';
});

var ham = document.querySelector('.hamcontainer').style.display="none";
var hamcancle;

if(ham = true){
  document.querySelector('.navbar_tooglebtn').addEventListener('click', function(){
    document.querySelector('.hamcontainer').style.display="inline";
    var hamcancle = document.querySelector('.hamcontainer').style.display="inline";
  });
}
if(hamcancle = true){
  document.querySelector('.menu-out').addEventListener('click', function(){
    document.querySelector('.hamcontainer').style.display="none";
  });
}

