// Limpa o valor do Formulário
document.querySelector("#myForm").addEventListener("reset", function (event) {
  // Impede o comportamento padrão de redefinir o formulário
  event.preventDefault();

  document.getElementById("inpName").value = "";
  document.getElementById("inpEmail").value = "";
  document.getElementById("inpTelefone").value = "";
  document.getElementById("inpAssunto").value = "";  
  document.getElementById("inpMensagem").value = "";
});

/* Carousel automático 5seg */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;

  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
