
const info=document.getElementById("informacao")

const usuario=JSON.parse(localStorage.getItem("usuario"))
console.log(usuario)

    info.innerHTML+=`
    <aside class="aside">
    <p style="margin-top:50%;">Nome: ${usuario.name} ${usuario.surname}</p>
    <p>Email: ${usuario.gmail}</p>
    <p>Phone: ${usuario.phone}</p>
    </aside>
    `
