const urlInput = document.getElementById('url');
const goButton = document.getElementById('go');
const proxyContainer = document.getElementById('proxy-container');

goButton.addEventListener('click', () => {
  const url = urlInput.value.trim();
  if (url) {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
     .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
      })
     .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        const body = doc.body;
        proxyContainer.innerHTML = '';
        proxyContainer.appendChild(body);
      })
     .catch(error => console.error(error));
  }
});
