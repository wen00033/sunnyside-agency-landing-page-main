const hambugerMenu = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

hambugerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const check = hambugerMenu.getAttribute("data-toggle");
  if (check == "false") {
    navigation.setAttribute("data-expended", true);
    hambugerMenu.setAttribute("data-toggle", true);
  } else {
    navigation.setAttribute("data-expended", false);
    hambugerMenu.setAttribute("data-toggle", false);
  }
});
