var users = JSON.parse(localStorage.getItem("users"))|| [] 
var Logado = JSON.parse(localStorage.getItem("logado"))|| {}
var Bemvindo = document.getElementById("Bemvindo");
if(Bemvindo && Logado) Bemvindo.innerHTML = "Olá " + Logado.nome

/*function name(parametro1, p2){
   return (cria botão)*/

function createButton(text, action,){
   let tdAction = document.createElement("td");
      let bt = document.createElement("a");
      bt.innerHTML = "text";
      // para cada classe eu chamo a linha abaixo
            bt.classList.add(c);
            bt.innerHTML = "text";
      bt.classList.add(py-1 );
      bt.classList.add(mg );
      bt.classList.add(px-2);
      bt.classList.add(bg-dark);
      bt.classList.add(hover:shadow);
      bt.classList.add(rounded-full );
       bt.classList.add("cursor-pointer");
       bt.dataset.id = i;
      
      bt.classList.add("cursor-pointer");
      // aqui vai vir todas as classes estaticas para estilizar o botão
      bt.dataset.id = i;
      return bt;
}

   let tdAction = document.createElement("td");
   

      let bt = document.createElement("a");
      
       
   



var listausuarios = document.getElementById("listausuarios")
if(listausuarios) {
   let i = 0;
   users.forEach((u) => {
      let tdName = document.createElement("td");
      tdName.innerHTML = u.nome;

      let tdEmail = document.createElement("td");
      tdEmail.innerHTML = u.email;

      let tdAction = document.createElement("td");
      tdAction.appendChild(createButton("v", "Show", i));

      let span = document.createElement("span");
      span.innerHTML = " - ";
      tdAction.appendChild(span); 

      let btR = document.createElement("a");
      tdAction.appendChild(createButton("x","remove", i)); 

      

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
      const id = b.dataset.id;
      b.innerHTML = users[id].nascimento;
   })
})

var botoesR = document.querySelectorAll(".remove");
botoesR.forEach((b)=>{
   b.addEventListener("click", ()=>{
      const id = b.dataset.id;
      users.splice(id, 1);
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "painel.html"
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
