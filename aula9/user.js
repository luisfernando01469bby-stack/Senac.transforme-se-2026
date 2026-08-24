var users = JSON.parse(localStorage.getItem("users"))|| [] 
var Logado = JSON.parse(localStorage.getItem("logado"))|| {}
var Bemvindo = document.getElementById("Bem vindo");
if(Bemvindo && Logado) Bemvindo.innerHTML = "Olá" + Logado.nome

var listausuarios = document.getElementById("listausuarios")
if(listausuarios)
    listausuarios.innerHTML = JSON.stringify(users, null, 2) 


//document é a página toda
// get= pegar, elemento = elemento do html
var formR = document.getElementById("formRegister");
 formR?.addEventListener("submit", (e) => {
    e.preventDefault(); //impede atualizar a tela
    let name = document.getElementById("iName").value
    let email = document.getElementById("iEmail").value
    let pass = document.getElementById("iPass").value
    let birth = document.getElementById("iBirth").value;

    const user = {//objeto anônimo, estrutura, json
        nome: name,
        email: email,
        senha: pass,
        nascimento: birth
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
})




var formL = document.getElementById("formLogin");
formL?.addEventListener("submit", (e) => {
   console.log("passou aqui")
    e.preventDefault(); 

    let email = document.getElementById("iEmailLogin").value;
    let pass = document.getElementById("iLoginpass").value;

     let user = users.find(u => {
        return u.email == email
     })

     if(!user){//not usuario}
        console.log("usuario não encontrado")
        return
     }
        if(user.senha == pass){
        console.log("usuarios logado")
            localStorage.setItem("logado", JSON.stringify(user))
        window.location.href = "painel.html"
     }else{
        console.log("senha invalida")
     }
})
