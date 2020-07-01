// Set the default height of the sidebar, in cases where the height of #content is less than 100vh
var setSidebarHeight = function() {
  var sidebar = document.getElementById("sidebar");
  var getContentHeight = document.getElementById("content-left-block")
    .offsetHeight;
  sidebar.style.height = getContentHeight + "px";
};
// Make sure DOM is ready
var domReady = function(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
};
domReady(setSidebarHeight);
// Set height when window size changes
window.addEventListener("resize", setSidebarHeight);

// Hide scrollbar on scroll down
var scrollPos = 0;
var prevScrollPos = 0;
var ticking = false;

var setScrollbar = function(scrollPos) {
  var body = document.getElementsByTagName("body")[0];
  if (scrollPos < prevScrollPos || scrollPos < 100) {
    body.classList.remove("scrolled");
  } else {
    body.classList.add("scrolled");
  }
  prevScrollPos = scrollPos;
};

//throttle scroll function
window.addEventListener("scroll", function(e) {
  scrollPos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      setScrollbar(scrollPos);
      ticking = false;
    });
    ticking = true;
  }
});
