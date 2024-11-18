// Exibir o modal
const btnLogin = document.getElementById("btn-login");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

// Salvar os dados no localStorage
function test() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cpf = document.getElementById("cpf").value;
  const senha = document.getElementById("senha").value;

  const usuario = {
    nome,
    email,
    telefone,
    cpf,
    senha,
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
  alert("Seu cadastro foi realizado!");
  window.location.href = "perfil.html";
}
// Carregar dados na página de perfil
if (window.location.pathname.includes("perfil.html")) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario) {
  } else if (usuario) {
    document.getElementById("perfil-nome").textContent = usuario.nome;
    document.getElementById("perfil-email").textContent = usuario.email;
    document.getElementById("perfil-telefone").textContent = usuario.telefone;
    document.getElementById("perfil-cpf").textContent = usuario.cpf;
    document.getElementById("perfil-senha").textContent = usuario.senha;
  }
}
