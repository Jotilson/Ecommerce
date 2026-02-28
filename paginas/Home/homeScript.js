 const artc=document.getElementById("art")

 const produtos=[
    {nome:"Camisa",preco:10,Categoria:"Vestuario"},
    {nome:"Calção",preco:15,Categoria:"Vestuario"},
    {nome:"Calça",preco:10,Categoria:"Vestuario"},
    {nome:"Sapato da Nike",preco:10,Categoria:"Vestuario"},
    {nome:"Caderno",preco:10,Categoria:"Material-Escolar"},
    {nome:"Canetas",preco:10,Categoria:"Material-Escolar"},
    {nome:"Muchila",preco:10,Categoria:"Material-Esolcar"},
    {nome:"Compasso",preco:10,Categoria:"Material-Escolar"},
    {nome:"XIOME",preco:100,Categoria:"Eletronico"},
    {nome:"Tablet",preco:120,Categoria:"Eletronico"},
    {nome:"Pc hp",preco:250,Categoria:"Eltronico"}
 ]
  localStorage.setItem("Produtos",JSON.stringify(produtos))
 produtos.forEach(prod=>{
   artc.innerHTML+=`<aside class="aside">
   <div class="div"><p class="ProdNome">${prod.nome}</p></div>
   <img src="imgEx.png" alt="" id="img">
   <div class="divPreco">
   <p>Preço:</p>
   <p class="PrecProd">${Number(prod.preco)}</p>
</div>
   </aside>`

   
 })

 
  const btnCarriho=document.getElementById("card")
  const carrinho=[]
  const totProd=document.getElementById("totProd")
 const soma=0
 
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
 
 
 
