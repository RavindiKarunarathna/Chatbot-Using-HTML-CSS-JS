function sendMessage() {
    const userMessage = document.querySelector(".chat-window input").value;
    if (userMessage.length) {
        document.querySelector(".chat-window input").value = "";
        document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
            <div class="user">
            <p>${userMessage}</p>
            </div>
        `);
    }
}

document.querySelector(".chat-window .input-area button").addEventListener("click", () => sendMessage());

