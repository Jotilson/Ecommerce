  
  const artc=document.getElementById("art")


 const produtos=JSON.parse(localStorage.getItem("PrFavorite"))

 produtos.forEach(prod=>{
   artc.innerHTML+=`<aside class="aside">
   <div class="infoHeart">
   <div class="div"><p class="ProdNome">${prod.name}</p></div>
   <span class="heart"><i class="fa-solid fa-heart fa-2xl" style="color: red;" id="coracao"></i></span>
   </div>
   <img src=${prod.url} alt="" id="img" class="imgm">
   <div class="divPreco">
   <p>Preço:</p>
   <p class="PrecProd">${Number(prod.price)}</p>
</div>
   </aside>`

   
 })
