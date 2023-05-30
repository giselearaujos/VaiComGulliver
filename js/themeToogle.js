const checkbox = document.getElementById("chk");

if (localStorage.getItem("theme") === "dark") {
  enableDarkMode();
  checkbox.checked = true;
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
    localStorage.setItem("theme", "dark");
  } else {
    disableDarkMode();
    localStorage.setItem("theme", "light");
  }
});

function enableDarkMode() {
  document.documentElement.classList.add("dark");
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark");
}
