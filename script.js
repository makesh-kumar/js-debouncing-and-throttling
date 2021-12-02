function doSearch(val) {
  console.log(val);
}

// example for event delegation
document.getElementById('grandparent').addEventListener('click', (e) => {
  console.log(e.target.id);
});

// example for debouncing
let timer;
function debouncedFunction(e) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    doSearch(e.target.value);
  }, 500);
}

// example for throttling
let isTimeElapsed = true;
function throttledFunction(e) {
  if (isTimeElapsed) {
    doSearch(e.target.textContent);
    isTimeElapsed = false;
    setTimeout(() => {
      isTimeElapsed = true;
    }, 1000);
  }
}

// document.getElementById("grandparent").addEventListener(
//   "click",
//   (e) => {
//     console.log(
//       "grandparent clicked - ",
//       e.target.id,
//       " - ",
//       e.currentTarget.id
//     );
//   },
//   false
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent clicked - ", e.target.id, " - ", e.currentTarget.id);
//   },
//   false
// );

// document.getElementById("child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked - ", e.target.id, " - ", e.currentTarget.id);
//     e.stopPropagation();
//   },
//   false
// );
