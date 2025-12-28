fetch("/wp-json/omnibot/status")
  .then(r => r.json())
  .then(status => {
    if (status.blocked) {
      document.body.innerHTML = "Plano esgotado";
    }
  });
