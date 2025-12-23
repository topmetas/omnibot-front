(function () {
  const apiKey = document.currentScript.getAttribute("data-api-key");
  const apiUrl = "https://omnibot-489r.onrender.com/api/chat";

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = document.currentScript.src.replace("widget.js", "widget.css");
  document.head.appendChild(style);

  const button = document.createElement("button");
  button.id = "omnibot-button";
  button.innerHTML = "💬";

  const chat = document.createElement("div");
  chat.id = "omnibot-chat";
  chat.innerHTML = `
    <div id="omnibot-header">Atendimento Online</div>
    <div id="omnibot-messages">
      <div class="omnibot-msg bot">
        👋 Olá! Posso te ajudar agora.
      </div>
    </div>
    <input id="omnibot-input" placeholder="Digite sua pergunta..." />
    <div id="omnibot-footer">Powered by OmniBot IA</div>
  `;

  document.body.appendChild(button);
  document.body.appendChild(chat);

  button.onclick = () => {
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
  };

  const input = chat.querySelector("#omnibot-input");
  const messages = chat.querySelector("#omnibot-messages");

  input.addEventListener("keypress", async (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      const msg = input.value;
      input.value = "";

      messages.innerHTML += `<div class="omnibot-msg user">${msg}</div>`;

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({ message: msg }),
      });

      const data = await res.json();

      messages.innerHTML += `<div class="omnibot-msg bot">${data.response}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }
  });
})();

  