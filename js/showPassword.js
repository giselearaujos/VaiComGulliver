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
  event.preventDefault();

  var email = document.getElementById("username").value;
  var senha = document.getElementById("password").value;

  if (email === "teste@teste.com" && senha === "teste") {
    console.log("Login realizado com sucesso!");   
    window.location.href = "home.html";
  } else {    
    alert("Email e senha incorretos!");
    console.log("E-mail ou senha incorretos. Por favor, tente novamente.");      
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";   
  }
}
