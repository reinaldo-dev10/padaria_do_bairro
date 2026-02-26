// --- Informações da padaria ---
// escreva 3 variáveis contendo nome, endereço e telefone
const nomePadaria = "Padaria do Bairro 🍞";
const enderecoPadaria = "R. José Lopes, 201 - Parque Santa Clara, Guaratinguetá - SP";
const telefonePadaria = "(12) 96072-818";

// escreva 3 variáveis com preços dos produtos (baseado no seu HTML)
var precoPao = 0.96;
var precoSonho = 2.36;
var precoCafe = 1.50;

// escreva 3 variáveis para controlar o estoque 
let estoquePao = 100;
let estoqueSonho = 30;
let estoqueCafe = 50; 

// array dos produtos
const listaProdutos = ["Pão de sal", "Sonho de chocolate", "Empadinha", "Café"];

// array das categorias
const categorias = ["Pães", "Doces", "Salgados", "Bebidas"];

// objeto produto completo (exemplo de um dos itens)
const produtoDestaque = {
    nome: "Sonho de chocolate",
    categoria: "Doces",
    descricao: "Recheio cremoso de amendoim e castanha sob cobertura de chocolate",
    preco: 2.36,
    disponivel: true
};

// constante que não pode ser alterada (ex: CNPJ ou data de fundação)
const ANO_FUNDACAO = 2024;

// let que pode ser reatribuída (ex: total de vendas do dia)
let totalVendasDia = 0;

// função que saúda o cliente de acordo com o horário (if e else)
function saudarCliente() {
    const agora = new Date();
    const hora = agora.getHours();
    let saudacao;

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia! O pãozinho acabou de sair do forno. ";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde! Que tal um café com um pão na chapa feito na hora? ";
    } else {
        saudacao = "Boa noite! Ainda temos delícias para seu lanche da noite. ";
    }

    // para exibir no console e ser usado para alertas ou manipular o HTML
    console.log(saudacao);
    return saudacao;
}

// executa a saudação ao carregar a pagina
window.onload = function() {
    const mensagem = saudarCliente();
    // Exemplo: injetar a saudação no subtítulo (h2) do seu header
    const boasVindas = document.querySelector('header h2');
    if (boasVindas) {
        boasVindas.innerText = `${mensagem}`;
    }
};

// 23 - 02 - 2026 - atualização de javascript 

//Uma função que exiba uma mensagem de boas-vindas
function mostrarBoasVindas() {
    alert("Olá! Seja bem-vindo(a)!");
}
mostrarBoasVindas();// Para chamar a função...

//Uma função que calcule o subtotal de itens (receba preço e quantidade)
function calcularSubtotal(preco, quantidade) {
    const subtotal = preco * quantidade;
    console.log(`O subtotal para ${quantidade} itens a R$ ${preco.toFixed(2)} cada é R$ ${subtotal.toFixed(2)}`);
    return subtotal;
}

//Uma função que calcule desconto (receba valor e percentual de desconto)
function calcularDesconto(valor, percentual) {
    const desconto = valor * (percentual / 100);
    const valorComDesconto = valor - desconto;
    console.log(`O desconto de ${percentual}% sobre R$ ${valor.toFixed(2)} é R$ ${desconto.toFixed(2)}, totalizando R$ ${valorComDesconto.toFixed(2)}`);
    return valorComDesconto;
}

//Uma função que calcule a taxa de entrega baseada na distância
function calcularTaxaEntrega(distanciaKm) {
    const taxaBase = 5.00; // taxa fixa 
    const taxaPorKm = 0.50; // taxa adicional por km
    const taxaTotal = taxaBase + (taxaPorKm * distanciaKm);    
    console.log(`A taxa de entrega para ${distanciaKm} km é R$ ${taxaTotal.toFixed(2)}`);
    return taxaTotal;
}
calcularTaxaEntrega(12);

// funcão tradicional
function calcularPreco(preco, produto){
    return preco * produto;
}

//arrow function
const calcularPrecos = (preco, produto) => {preco * produto};

//pesquisa de produtos - exemplo de filtro usando o método filter() e includes()
//para ciar listas usamos um array

const listaProduto = [
    { nome: "Pão de sal", caracteristica: "Pão fresquinho, crocante por fora e macio por dentro" },
    { nome: "Sonho de chocolate", caracteristica: "Recheio cremoso de amendoim e castanha sob cobertura de chocolate" },
    { nome: "Empadinha", caracteristica: "Massa leve e recheio saboroso, perfeita para um lanche rápido" },
    { nome: "Café", caracteristica: "Café coado na hora, com aroma irresistível e sabor encorpado" },
];

document.getElementById("campo-filtro").addEventListener("input", (e) => {
  console.log("digitando", e.target.value)
  const valor = e.target.value.toLowerCase();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

   listaProduto
     .filter((produto) => produto.nome.toLowerCase().includes(valor))
     .forEach((produto) => {
       const li = document.createElement("li");
       li.textContent = `${produto.nome} - ${produto.caracteristica}`;
       resultado.appendChild(li);
     });
});