
//Localizar Produto com e sem filtros

 function produto(ProdNome, categoria, ordenacao){

 const produtos=JSON.parse(localStorage.getItem("Produtos"))
  const h2=document.getElementById("info")

if(categoria=="all" && ordenacao=="all"){
   if(ProdNome!=""){
h2.textContent=""
     ProdP= produtos.filter(prod=>prod.nome==ProdNome)
     if(ProdP==""){
     h2.textContent="Produto não encontrado!"
        h2.style.color='red'
}else{
    ProdP.forEach(prod => 
    {
    section.innerHTML=`<aside class="aside">
   <div class="div"><p class="ProdNome">${prod.nome}</p></div>
   <img src="../Home/imgEx.png" alt="" id="img">
   <div class="divPreco">
   <p>Preço:</p>
   <p class="PrecProd">${Number(prod.preco)}</p>
</div>
   </aside>`
});
}
   }else{
        h2.textContent="Produto não encontrado!"
        h2.style.color='red'
   }
   
 
 }else if(categoria!="all" && ordenacao=="all"){
    h2.textContent=""
    ProdP= produtos.filter(prod=>prod.Categoria==categoria)
   ProdP.forEach(prod => 
    {
    section.innerHTML+=`<aside class="aside">
   <div class="div"><p class="ProdNome">${prod.nome}</p></div>
   <img src="../Home/imgEx.png" alt="" id="img">
   <div class="divPreco">
   <p>Preço:</p>
   <p class="PrecProd">${Number(prod.preco)}</p>
</div>
   </aside>`
});

 }else if(ordenacao=="a-b" ){
     
 ProdP= produtos
 .sort((a,b)=>a.preco-b.preco)
 .filter(prod=>prod.Categoria==categoria)
 if(ProdP!=""){
h2.textContent=""
   ProdP.forEach(prod => 
    {
    section.innerHTML+=`<aside class="aside">
   <div class="div"><p class="ProdNome">${prod.nome}</p></div>
   <img src="../Home/imgEx.png" alt="" id="img">
   <div class="divPreco">
   <p>Preço:</p>
   <p class="PrecProd">${Number(prod.preco)}</p>
</div>
   </aside>`
});
     }else{
         h2.textContent="Produto não encontrado!"
        h2.style.color='red'
     }
 }else if(ordenacao=="b-a"){
    h2.textContent=""
    ProdP= produtos 
    .sort((a,b)=>b.preco-a.preco)
 .filter(prod=>prod.Categoria==categoria)

 if(ProdP!=""){
h2.textContent=""
   ProdP.forEach(prod => 
    {
    section.innerHTML+=`<aside class="aside">
   <div class="div"><p class="ProdNome">${prod.nome}</p></div>
   <img src="../Home/imgEx.png" alt="" id="img">
   <div class="divPreco">
   <p>Preço:</p>
   <p class="PrecProd">${Number(prod.preco)}</p>
</div>
   </aside>`
});
     }else{
         h2.textContent="Produto não encontrado!"
        h2.style.color='red'
     }


 }
 }
 
 // Declaração dos DOM para pegar as tags
const section=document.getElementById("produtos")
const btnPesquisar=document.getElementById("btnPesquisar")

//Buscar os produtos do site no armazenamento do navegador
const produtos=JSON.parse(localStorage.getItem("Produtos"))

//Mostrar os produtos quando clicar no botão pesquisar
btnPesquisar.addEventListener("click",function(){
section.innerHTML=" "

//Declarações das tags para o tipo do filtro
    const nomeProduto=document.getElementById
    ("search").value
    const categoria=document.getElementById("Categoria").value
    const ordem=document.getElementById("ordenacao").value

    produto(nomeProduto,categoria,ordem)

})

//Adicionar e Finalizar o Carrinho
const artc=document.getElementById("produtos")
const btnCarriho=document.getElementById("card")
  const carrinho=[]
  
 artc.addEventListener("click",function(e){

const cards=e.target.closest(".aside")   

   if(e.target.classList.contains("aside")){

       btnCarriho.style.display='block'
   const nomeProdu=cards.querySelector(".ProdNome").textContent
  
   const prodPrice=+cards.querySelector(".PrecProd").textContent
   

   carrinho.push({nome:nomeProdu,preco:prodPrice})
   
        btnCarriho.innerHTML+=`<p>${nomeProdu}<p>`
   }
  
 })
 
 const verCarrinho=document.getElementById("VerCarrinho")

 function botaoCarrinho (){
  localStorage.setItem("Carrinho",JSON.stringify(carrinho))

  carrinho.forEach(prod=>{
   console.log(prod.nome)
  })
 }  


