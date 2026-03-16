 const artc=document.getElementById("art")

 const produtos=[
    {nome:"Camisa",preco:10,Categoria:"Vestuario", url:"../ImagensProdutos/camisa.jpg"},
{nome:"Caderno",preco:10,Categoria:"Material-Escolar", url:"../ImagensProdutos/caderno.jpg"},
{nome:"Canetas",preco:10,Categoria:"Material-Escolar", url:"../ImagensProdutos/canetas.jpg"},
{nome:"Estojo",preco:10,Categoria:"Material-Escolar", url:"../ImagensProdutos/estojo.jpg"},
{nome:"Pc hp",preco:250,Categoria:"Eletronico", url:"../ImagensProdutos/hp.jpg"},
{nome:"XIAOMI",preco:100,Categoria:"Eletronico", url:"../ImagensProdutos/XIAOMI.png"},
{nome:"Calção",preco:15,Categoria:"Vestuario", url:"../ImagensProdutos/calcao.jpg"},
{nome:"Calça",preco:10,Categoria:"Vestuario", url:"../ImagensProdutos/calca.jpg"},
{nome:"Sapato da Nike",preco:10,Categoria:"Vestuario", url:"../ImagensProdutos/nike.jpg"},
{nome:"Mochila",preco:10,Categoria:"Material-Escolar", url:"../ImagensProdutos/mochila.jpg"},
{nome:"Tablet",preco:120,Categoria:"Eletronico", url:"../ImagensProdutos/tablet.jpg"}
    
 ]
  localStorage.setItem("Produtos",JSON.stringify(produtos))
 produtos.forEach(prod=>{
   artc.innerHTML+=`<aside class="aside">
   <div class="infoHeart">
   <div class="div"><p class="ProdNome">${prod.nome}</p></div>
   <span class="heart"><i class="fa-solid fa-heart fa-2xl" style="color: rgb(246, 243, 243);" id="coracao"></i></span>
   </div>
   <img src=${prod.url} alt="" id="img" class="imgm">
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
   const prodImg=cards.querySelector(".imgm")
   const prodURL=prodImg.src
   carrinho.push({nome:nomeProdu,preco:prodPrice,url:prodURL})
   
        btnCarriho.innerHTML+=`<p>${nomeProdu}<p>`
   }
 })
  //Favoritos
 const heart=document.querySelectorAll(".heart")
 let PFavorite=[]
  heart.forEach(coracao=>{
  coracao.addEventListener("click",function(e){
  
   const cards=e.target.closest(".aside")
   const cor=cards.querySelector("#coracao")
   const nome=cards.querySelector(".ProdNome").textContent
   const preco=cards.querySelector(".PrecProd").textContent
   const img=cards.querySelector(".imgm")
   const imgURL=img.src
   
 if(cor.style.color=='red'){
            cor.style.color='white'
         }else{
  cor.style.color='red'
  const corh="red"
  PFavorite.push({name:nome,price:preco,url:imgURL,color:corh})
  localStorage.setItem("PrFavorite",JSON.stringify(PFavorite))
         }   
  })
  
  })
  
 
 
 const verCarrinho=document.getElementById("VerCarrinho")

 function botaoCarrinho (){
  localStorage.setItem("Carrinho",JSON.stringify(carrinho))

  carrinho.forEach(prod=>{
   console.log(prod.nome)
  })
 }  
 
 
 
