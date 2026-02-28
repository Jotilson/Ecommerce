
const btnEncerrar=document.getElementById("Encerrar")

btnEncerrar.addEventListener("submit",function(){

    localStorage.removeItem("usuario")
    btnEncerrar.action="../CriarConta/conta.html"
})