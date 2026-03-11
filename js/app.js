let precoTotal
limpar();

function adicionar() {
    //RECUPERAR PRODUTO, VALOR E QUANTIDADE
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // CALCULAR O PREÇO E SUBTOTAL
    let preco = quantidade * valorUnitario;
    // ADD PRODUTO COM SUBTOTAL AO CARRINHO
    let produtoNoCarrinho = document.getElementById('lista-produtos');
    produtoNoCarrinho.innerHTML = produtoNoCarrinho.innerHTML + ` <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`
    // CALCULAR E DAR O VALOR TOTAL
    precoTotal = precoTotal + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${precoTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    precoTotal = 0;

}