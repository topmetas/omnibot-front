(function () {
    const script = document.currentScript;
    const clientId = script.getAttribute("data-client");
    const apiUrl = script.getAttribute("data-api");
  
    const iframe = document.createElement("iframe");
    iframe.src = `${apiUrl}/widget.html?client=${clientId}`;
    iframe.style.position = "fixed";
    iframe.style.bottom = "0";
    iframe.style.right = "0";
    iframe.style.width = "400px";
    iframe.style.height = "600px";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";
  
    document.body.appendChild(iframe);
  })();
  