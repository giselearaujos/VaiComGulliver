// exibir/ocultar senha

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const showButton = document.getElementById("show_eye");
  const hideButton = document.getElementById("hide_eye");
  hideButton.classList.remove("d-none");

  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  showButton.classList.toggle("d-none");
  hideButton.classList.toggle("d-none");
}

function login(event) {
  // Prevenir o envio do formulário por padrão
  event.preventDefault();

  // Obter os valores dos inputs de e-mail e senha
  var email = document.getElementById("username").value;
  var senha = document.getElementById("password").value;

  // Verificar se o e-mail e senha são válidos
  if (email === "teste@teste.com" && senha === "teste") {
    // Login bem-sucedido
    console.log("Login realizado com sucesso!");

    // Redirecionar para a página "home.html" após o login
    window.location.href = "home.html";
  } else {
    // Login inválido
    alert("Email e senha incorretos!");
    console.log("E-mail ou senha incorretos. Por favor, tente novamente.");

       // Limpar os campos de e-mail e senha
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    // Aqui você pode exibir uma mensagem de erro para o usuário
  }
}
