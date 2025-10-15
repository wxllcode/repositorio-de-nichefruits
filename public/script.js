const gallery = document.getElementById("gallery");

// Busca a lista de imagens do servidor
fetch("/images")
  .then(res => res.json())
  .then(images => {
    images.forEach(imgName => {
      const img = new Image();
      img.src = `fotos/${imgName}`;
      img.alt = imgName;

      const div = document.createElement("div");
      div.classList.add("photo");
      div.appendChild(img);
      gallery.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Erro ao carregar imagens:", err);
    gallery.innerHTML = "<p>Não foi possível carregar as imagens.</p>";
  });
