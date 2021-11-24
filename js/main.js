let up = document.querySelector(".scroll");
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// Change the progress cspan =========
let progress = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
      progress.forEach((spa) => {
        spa.style.width = spa.dataset.width;
      });
    };
};
// countdown for events ============
let countDowndate = new Date("dec 31, 2021 23:59:59");
// console.log(countDowndate);
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDowndate - dateNow;
  // console.log(dateDiff);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  // console.log(days);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
// Change the state more number when arrive section ======
let sectionStats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= sectionStats.offsetTop) {
      if (!started) {
          nums.forEach((num) => startCount(num));
      }
      started = true;
  }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        };
     }, 2000 / goal);
};
// Change the state more number when arrive section ======copy
// let sectionStats = document.querySelector(".stats");
// let nums = document.querySelectorAll(".stats .number");
// let started = false;
// window.onscroll = function () {
//   if (window.scrollY >= sectionStats.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => {
//         let goal = num.dataset.goal;
//         let count = setInterval(() => {
//           num.textContent++;
//           if (num.textContent == goal) {
//             clearInterval(count);
//           }
//         }, 2000 / goal);
//       });
//     }
//     started = true;
//   }
// };

