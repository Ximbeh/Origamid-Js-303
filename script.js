//Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img);

//Retorne no console apenas imagens que começarem com a palavra imagem
const imgPalavra = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgPalavra);

//Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('a[href^="#"]')
console.log(links);

//Selecione o primeiro H2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2:first-child')
console.log(h2);

//Selecione o ultimo p dentro do site
const p = document.querySelectorAll('p')
console.log(p[p.length-1]);