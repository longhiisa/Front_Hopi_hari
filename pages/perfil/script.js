// Função para carregar dados do perfil
function carregarPerfil() {
    const dados = JSON.parse(localStorage.getItem("usuarioLogado")) || {};
  
    document.getElementById("first_name").value = dados.first_name || "";
    document.getElementById("last_name").value = dados.last_name || "";
    document.getElementById("email").value = dados.email || "";
    document.getElementById("birth_date").value = dados.birth_date || "";
    document.getElementById("phone").value = dados.phone || "";
  
    // Se tiver foto salva
    if (dados.fotoPerfil) {
      document.getElementById("fotoPerfil").src = dados.fotoPerfil;
    }
  }
  
  // Função para salvar os dados do formulário
  function salvarPerfil(event) {
    event.preventDefault();
  
    const dados = {
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      email: document.getElementById("email").value,
      birth_date: document.getElementById("birth_date").value,
      phone: document.getElementById("phone").value,
      fotoPerfil: document.getElementById("fotoPerfil").src
    };
  
    localStorage.setItem("usuarioLogado", JSON.stringify(dados));
  
    document.getElementById("mensagem").textContent = "Perfil atualizado com sucesso!";
    setTimeout(() => {
      document.getElementById("mensagem").textContent = "";
    }, 3000);
  }
  
  // Eventos
  document.getElementById("perfil-form").addEventListener("submit", salvarPerfil);
  
  // Carregar perfil ao iniciar
  window.addEventListener("DOMContentLoaded", carregarPerfil);
  