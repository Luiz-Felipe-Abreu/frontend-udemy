console.log(19.90 * 0.6);

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// Concatenação de strings
let nome = "Caderno";   
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria);
// Quebra de linha
console.log("Produto: " + nome 
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: " + desconto);