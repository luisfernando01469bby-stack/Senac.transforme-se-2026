const btAddUser =document.getElementById("AddUser");
btAddUser?.addEventListener("click", (e) => {
    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex");
});