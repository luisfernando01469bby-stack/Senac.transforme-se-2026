var users = JSON.parse(localStorage.getItem("users"))|| [] 
var Logado = JSON.parse(localStorage.getItem("logado"))|| {}
var Bemvindo = document.getElementById("Bemvindo");
if(Bemvindo && Logado) Bemvindo.innerHTML = "Olá " + Logado.nome

var listausuarios = document.getElementById("listausuarios")
if(listausuarios) {
   let i = 0;
   users.forEach((u) => {
      let tdName = document.createElement("td");
      tdName.innerHTML = u.nome;

      let tdEmail = document.createElement("td");
      tdEmail.innerHTML = u.email;

      let tdAction = document.createElement("td");
      let btV = document.createElement("a");
      btV.innerHTML = "v";
      btV.classList.add("Show");
      btV.id = i;
      tdAction.appendChild(btV);

      let span = document.createElement("span");
      span.innerHTML = " - ";
      tdAction.appendChild(span); 

      let btR = document.createElement("a");
      btR.innerHTML = "X";
      btR.classList.add("remove");
      btR.id = i;
      tdAction.appendChild(btR); 

      

      let tr = document.createElement("tr")
      tr.appendChild(tdName);
      tr.appendChild(tdEmail);
      tr.appendChild(tdAction);

      listausuarios.appendChild(tr)
      //i = i + 1; primeira forma de fazer
      //i += 1; segundda forma de fazer
      i++;
   });
}

var botoesV = document.querySelectorAll(".Show");
botoesV.forEach((b)=> {
   b.addEventListener("click", () =>{
      const id = b.id;
      b.innerHTML = users[id].nascimento;
   })
})

//document é a página toda
// get= pegar, elemento = elemento do html
var formR = document.getElementById("formRegister");
 formR?.addEventListener("click", (e) => {
   
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

     const modalRegister = document.getElementById("modalRegister");
   modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html"
})




var formL = document.getElementById("formLogin");
formL?.addEventListener("click", (e) => {
   console.log("passou aqui")
    e.preventDefault(); 

    let email = document.getElementById("iEmailLogin").value;
    console.log (email)
    let pass = document.getElementById("iLoginpass").value;
    console.log (pass)

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
