document.addEventListener("DOMContentLoaded", () => {
  const resultadoDiv = document.getElementById("resultado");

  // Adiciona a classe 'oculto' inicialmente
  resultadoDiv.classList.add("oculto");

  fetch("https://igu7x.github.io/apiMovies/src/data/filmes.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior

      // Itera sobre cada filme e adiciona ao resultadoDiv
      data.forEach((filme) => {
        resultadoDiv.innerHTML += `
          <div class="filme">
            <h2 class="filme-nome">${filme.nome}</h2>
            <img class="filme-foto" src="${filme.foto}" alt="${filme.nome}" />
            <p class="filme-descricao">${filme.descricao}</p>
            <p class="filme-elenco">Elenco: ${filme.elenco}</p>
          </div>
        `;
      });

      // Remove a classe 'oculto' após o carregamento do conteúdo
      setTimeout(() => {
        resultadoDiv.classList.remove("oculto");
        resultadoDiv.classList.add("fade-in");
      }, 0);
    })
    .catch((error) => {
      console.error("Houve um problema com a requisição:", error);
    });
});
