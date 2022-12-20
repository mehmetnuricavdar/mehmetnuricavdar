// scroll down up action

var scrollState = 0;
var scrollTop = function () {
  return window.scrollY;
};

// Primary scroll event function
var scrollDetect = function (home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 20) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

function homeAction() {
  console.log("home");
}

const resultsClass = document.querySelector(".results").classList;
const downAction = () => {
  resultsClass.remove("open");
  resultsClass.add("collapse");
};
const upAction = () => {
  resultsClass.remove("collapse");
  resultsClass.add("open");
};

window.addEventListener("scroll", function () {
  scrollDetect(homeAction, downAction, upAction);
});
