var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header");
var content = document.getElementById("main");
var showingSidebar = false;

function changeStatusSidebar() {
  showingSidebar = !showingSidebar;
  if (showingSidebar) {
    showSidebar();
  } else {
    closeSidebar();
  }
}

function showSidebar() {
  navigationHeader.style.marginLeft = "0vw";
  navigationHeader.style.animationName = "showSidebar";
  content.style.filter = "blur(2px)";
}

function closeSidebar() {
  navigationHeader.style.position = "absolute";
  navigationHeader.style.marginLeft = "-100vw";
  navigationHeader.style.animationName = "";
  content.style.filter = "";
}

/*Close the sidebar clicking on the main content */
function closeSidebarTouchingContent() {
  if (showingSidebar) {
    changeStatusSidebar();
  }
}

/*Close the sidebar resizing the screen*/
function closeSidebarResizingScreen() {
  if (window.innerWidth > 1024) {
    navigationHeader.style.position = "relative";
    navigationHeader.style.marginLeft = "0vw";
  } else {
    closeSidebar();
  }
}

/*The listener of the event resize*/
window.addEventListener("resize", function (event) {
  closeSidebarResizingScreen();
});
