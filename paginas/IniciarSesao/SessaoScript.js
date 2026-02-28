 
 
 const btn=document.getElementById("IniciarSessao")
 const p=document.getElementById("infoConta")
 btn.addEventListener("submit",function(e){
    const nome=document.getElementById("nome").value
    const password=document.getElementById("pass").value
   const usuario=JSON.parse(localStorage.getItem("usuario"))
   console.log(Number(nome))
if(usuario!=null){
   if(usuario.name==nome || usuario.phone==Number(nome) && usuario.password==password){

    btn.action="../Home/home.html"
    nome.textContent=" "
    password.textContent=" "
    
   }else{
   e.preventDefault();
   p.textContent=("As credencias estão erradas!")
   p.style.color='red'
   }
  }else{
    e.preventDefault();
    p.textContent=("As credencias estão erradas!")
   p.style.color='red'
  }


 })
