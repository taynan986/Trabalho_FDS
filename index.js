const button = document.getElementById("message-button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    const visible = message.style.visibility === "visible"? true: false;
    button.innerText = visible? "Clique para ver uma mensagem!": "Clique para esconder a mensagem!";
    message.style.visibility = !visible? "visible": "hidden";
});