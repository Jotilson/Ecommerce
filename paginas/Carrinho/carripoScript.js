
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
   <span><i class="fa-solid fa-plus fa-lg" style="color: rgb(246, 243, 243);" id="plus"></i></span>
   <p id="tot">0</p>
   <span><i class="fa-solid fa-minus fa-lg" style="color: rgb(246, 243, 243);" id="minus"></i></span>
   </div>
   </aside>`
});

const esvazir=document.getElementById("btnClear");

esvazir.addEventListener("click",function(){
    localStorage.removeItem("Carrinho")
    location.reload();
})
let total=document.getElementById("tot")
let soma=0
const plus=document.getElementById("plus")
const menos=document.getElementById("minus")

plus.addEventListener("click",function(){
    
 soma=soma+1

    console.log(soma)
  total.textContent=soma
})

 menos.addEventListener("click",function(){
    if(soma<=0){
        alert("Não tem como dimunuir!")
    }else{
    soma=soma-1
    total.textContent=soma
    }
 })

 const reciclagem=document.querySelectorAll(".lixo")

  reciclagem.forEach(lixo=>{

 lixo.addEventListener("click",function(e){
    
    const card=e.target.closest(".aside")
  card.style.display='none'
      
 })



  })
 
console.log(carrinho.lenght)