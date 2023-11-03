// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Revenda de Carros";

// Capturando os elementos titulo/produto
let body = document.querySelector("body");

// Adicionando o titulo no DOM
body.appendChild(titulo);

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Saveiro Cross G5 2010/2011 </h2>
    <img src="https://fotos.socarrao.com.br/101318587/5455875/5455875N_1695665930_72_670.jpg" alt="Saveiro">
    <p>
    Combustível Etanol/Gasolina /
    Quilometragem 130.000 km /
    Câmbio Manual / 
    Cor Vermelho
    </p>
    <p id="preco-saveiro"><strong>R$ 47.900,00</strong></p>
  </div>
  <br>
  <div>
    <h2>
      Toyota Corolla 2022/2022 XEi 2.0 16V CVT
    </h2>
    <img src="https://fotos.socarrao.com.br/625772/5480642/5480642N_1697824755_34_320.jpg" alt="Corolla">
       <p>
        Combustível Etanol/Gasolina /
        Quilometragem 72.500 km /
        Câmbio Automatico /
        Cor Cinza
       </p>
      <p id="preco-Corolla"><strong>R$ 144.000,00</strong></p>
  </div>
`;
// Adicionando no dom
body.appendChild(produto)