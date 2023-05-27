// Obtém o elemento checkbox
const checkbox = document.getElementById("chk");

// Verifica o estado do checkbox quando a página é carregada
if (localStorage.getItem("theme") === "dark") {
  enableDarkMode();
  checkbox.checked = true;
}

// Alterna o tema quando o checkbox é alterado
checkbox.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
    localStorage.setItem("theme", "dark");
  } else {
    disableDarkMode();
    localStorage.setItem("theme", "light");
  }
});

// Função para habilitar o modo escuro
function enableDarkMode() {
  document.documentElement.classList.add("dark");
}

// Função para desabilitar o modo escuro
function disableDarkMode() {
  document.documentElement.classList.remove("dark");
}
