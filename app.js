

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  const html = document.documentElement;

  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
  } else {
    html.setAttribute("data-theme", "dark");
  }
});


const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("is-open");
});



const likeButtons = document.querySelectorAll(".like-btn");

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {
    this.classList.toggle("liked");
  });
}


const sliders = document.querySelectorAll(".slider");

for (let i = 0; i < sliders.length; i++) {
  const slider = sliders[i];
  const track = slider.querySelector(".slider__track");
  const prev = slider.querySelector(".slider__prev");
  const next = slider.querySelector(".slider__next");
  const toggle = slider.querySelector(".slider__toggle");

  next.addEventListener("click", function () {
    track.scrollLeft += track.children[0];
  });

  prev.addEventListener("click", function () {
    track.scrollLeft -= track.children[0];
  });

  toggle.addEventListener("click", function () {
    slider.classList.toggle("is-expanded");

    if (slider.classList.contains("is-expanded")) {
      toggle.textContent = "Close";
    } else {
      toggle.textContent = "Showall...";
    }
  });
}


const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchStatus = document.getElementById("searchStatus");
const searchClose = document.getElementById("searchClose");

const cards = document.querySelectorAll(".searchable");
const sections = document.querySelectorAll(".search-section");

searchBtn.addEventListener("click", function () {
  searchBar.hidden = !searchBar.hidden;
  searchInput.focus();
});

searchClose.addEventListener("click", function () {
  searchBar.hidden = true;
  searchInput.value = "";
  showAll();
});

function showAll() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].hidden = false;
  }
  for (let i = 0; i < sections.length; i++) {
    sections[i].hidden = false;
  }
  searchStatus.textContent = "";
}

searchInput.addEventListener("input", function () {
  const text = searchInput.value.toLowerCase();

  if (text === "") {
    showAll();
    return;
  }

  let found = 0;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].textContent.toLowerCase().includes(text)) {
      cards[i].hidden = false;
      found++;
    } else {
      cards[i].hidden = true;
    }
  }

  for (let i = 0; i < sections.length; i++) {
    const matches = sections[i].querySelectorAll(".searchable:not([hidden])");
    sections[i].hidden = matches.length === 0;
  }

  if (found === 0) {
    searchStatus.textContent = "Ничего не найдено";
  } else {
    searchStatus.textContent = "Найдено: " + found;
  }
});


const clockTime = document.getElementById("clockTime");
const clockDate = document.getElementById("clockDate");

function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function updateClock() {
  const now = new Date();

  const hours = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());

  clockTime.textContent = hours + ":" + minutes + ":" + seconds;
  clockDate.textContent = addZero(now.getDate()) + "." + addZero(now.getMonth() + 1) + "." + now.getFullYear();
}

updateClock();
setInterval(updateClock, 1000);

document.getElementById("year").textContent = new Date().getFullYear();