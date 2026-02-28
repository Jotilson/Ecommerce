 const nome=document.getElementById("nomeP")
 const nome2=document.getElementById("nome")
 const Snome=document.getElementById("Snome")
 const Snome2=document.getElementById("SrP")
 const email=document.getElementById("email")
 const email2=document.getElementById("EP")
 const tell=document.getElementById("tell")
const form=document.getElementById("fr")
 const btn=document.getElementById("btn")
 
  const a="gmail.com"
  let v1=0,v2=0,v3=0,v4=0
   
  nome2.addEventListener("input",function(){
  
   if((nome2.value).length<5){
      nome.textContent="Pelo menos mais de 5 letras"
      nome.style.color='red'
      v1=0
   }else{
       nome.textContent=""
       v1=1
   }
   
  })

   Snome.addEventListener("input",function(){
  
   if((Snome.value).length<5){
      Snome2.textContent="Pelo menos mais de 5 letras"
     Snome2.style.color='red'
     v2=0
   }else{
       Snome2.textContent=""
       v2=1
   }
   
  })
 email.addEventListener("input",function(){
  
   if(email.value.includes("@gmail.com")){
      email2.textContent=""
      btn.style.display='block'
   }else{
       email2.textContent="Deve ter no final @gmail.com"
   email2.style.color='red'
   v3=0
   }
   
  })
  tell.addEventListener("input",function(){
 tell.value=tell.value.replace(/\D/g,"")
  
  })

   form.addEventListener("submit",function(){
const nom=document.getElementById("nome").value
 const Snom=document.getElementById("Snome").value
 const emai=document.getElementById("email").value
 const tel=document.getElementById("tell").value
 const pass=document.getElementById("senha").value

  const user2=JSON.parse(localStorage.getItem("usuario"))

 if(emai==user2.gmail || tel==user2.phone){
   alert("O email ou numero de telefone já estão logados numa outra conta, inicia sessão!")
 }else{
   form.action="../Home/home.html"
   const user={
   name:nom, surname:Snom, gmail:emai, phone:tel,password:pass 
 }
 
 localStorage.setItem("usuario",JSON.stringify(user))
 nome2.value=" "
 tell.value=0
 Snome.value=" "
 email.value=" "
 pass.value=" "
 }
 

 

    })
 

 
 