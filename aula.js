let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita recarregar a página
  alert("Formulario enviado");
});
