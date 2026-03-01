
const carrinho=JSON.parse(localStorage.getItem("Carrinho"))

const artc=document.getElementById("produtos")
const artDiv=document.getElementById("artDiv")

artDiv.innerHTML="SEM PRODUTOS ADICIONADOS!"

carrinho.forEach(produto=> {
    artDiv.style.display='none'
    artc.innerHTML+=`<aside class="aside">
   <div class="div"><p class="ProdNome">${produto.nome}</p> 
    <span class="lixo"><i class="fa-solid fa-trash fa-lg" style="color: rgb(246, 243, 243); " ></i></span>
   </div>
   <br>
   <img src="imgEx.png" alt="" id="img">
   <div class="divPreco">
   Preço:
   <p class="PrecProd">${Number(produto.preco)}</p>
</div>
<br>
  <div class="plus2">
   <span class="plus"><i class="fa-solid fa-plus fa-lg" style="color: rgb(246, 243, 243);" ></i></span>
   <p class="tot">0</p>
   <span  class="minus"><i class="fa-solid fa-minus fa-lg" style="color: rgb(246, 243, 243);"></i></span>
   </div>
   </aside>`
});

const esvazir=document.getElementById("btnClear");

esvazir.addEventListener("click",function(){
    localStorage.removeItem("Carrinho")
    location.reload();
})


const plus=document.querySelectorAll(".plus")
const menos=document.querySelectorAll(".minus")

 plus.forEach(mais=>{
   
  mais.addEventListener("click",function(e){
   const card2=e.target.closest(".aside")
let soma=Number(card2.querySelector(".tot").textContent)
    let total=card2.querySelector(".tot")
 soma=soma+1

    console.log(soma)
   total.textContent=soma

})
 })

 menos.forEach(minus=>{
  
  minus.addEventListener("click",function(e){
   const card3=e.target.closest(".aside")
   let soima=Number(card3.querySelector(".tot").textContent)
    let total=card3.querySelector(".tot")
     if(soima<=0){
        alert("Não tem como dimunuir!")
    }else{
    soima=soima-1
    total.textContent=soima
    }
    
    
})

 })

 

 const reciclagem=document.querySelectorAll(".lixo")

  reciclagem.forEach(lixo=>{

 lixo.addEventListener("click",function(e){
    
    const card=e.target.closest(".aside")
  card.style.display='none'
      
 })



  })
 
console.log(carrinho.lenght)