const urlInput = document.getElementById('url');
const goButton = document.getElementById('go');
const proxyContainer = document.getElementById('proxy-container');

goButton.addEventListener('click', () => {
  const url = urlInput.value.trim();
  if (url) {
    fetch(`https://allorigins.win/raw?url=${encodeURIComponent(url)}`)
     .then(response => response.text())
     .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const body = doc.body;
        proxyContainer.innerHTML = '';
        proxyContainer.appendChild(body);
      })
     .catch(error => console.error(error));
  }
});
