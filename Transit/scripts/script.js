var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header");
var content = document.getElementById("main");
var showingSidebar = false;
var faqs = document.querySelectorAll(".faq");

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

/*Add or remove the classname active in the faq clicked*/
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

/*My tests adding or removing class name */
/*
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    verifyFaq(faq, "Maria");
  });
});

function verifyFaq(faq, faqname) {
  if (faq.classList.contains(faqname)) {
    removeFaq(faq, faqname);
  } else {
    addFaq(faq, faqname);
  }
}

function removeFaq(faq, name) {
  faq.classList.remove(name);
}

function addFaq(faq, name) {
  faq.classList.add(name);
}
*/
