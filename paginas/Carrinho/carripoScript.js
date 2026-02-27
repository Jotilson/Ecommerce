
const carrinho=JSON.parse(localStorage.getItem("Carrinho"))

const artc=document.getElementById("produtos")
const artDiv=document.getElementById("artDiv")

artDiv.innerHTML="SEM PRODUTOS ADICIONADOS!"

carrinho.forEach(produto=> {
    artDiv.style.display='none'
    artc.innerHTML+=`<aside class="aside">
   <div class="div"><p class="ProdNome">${produto.nome}</p></div>
   <img src="imgEx.png" alt="" id="img">
   <div class="divPreco">
   Preço:
   <p class="PrecProd">${Number(produto.preco)}</p>
</div>
   </aside>`
});

const esvazir=document.getElementById("btnClear");

esvazir.addEventListener("click",function(){
    localStorage.removeItem("Carrinho")
    location.reload();
})

console.log(carrinho.lenght)