class Produto {

    constructor() {
        this.id = 1;
        this.arrayProduto = [];
    }
    salvar() {
        let produto = this.lerDados();
        if(this.validaCampo(produto)){
            this.adicionar(produto);
        }
        this.listaTabela();
        this.resetarCampos();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i = 0; i < this.arrayProduto.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();

            td_id.innerText = this.arrayProduto[i].id;
            td_produto.innerText = this.arrayProduto[i].nomeProduto;
            td_valor.innerText = this.arrayProduto[i].valor;
        }
    }

    adicionar(produto) {
        this.arrayProduto.push(produto);
        this.id++;
    }


    lerDados() {
        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('nome').value;
        produto.valor = document.getElementById('quantidade').value;

        return produto;
    }

    validaCampo(produto) {
        let msg = '';
        if (produto.nomeProduto == '') {
            msg += 'DIGITE O NOME DO ITEM';
        }
        if (produto.valor == '') {
            msg += 'DIGITE O VALOR';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }

}

var produto = new Produto();