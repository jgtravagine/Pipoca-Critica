let cont = 0;

if (localStorage.getItem('contador') === 'null') {
    localStorage.setItem('contador', JSON.stringify(cont));
}

$(document).ready(function () {
    $('#cadastrar').click(function (evt) {
        evt.preventDefault();
        cadastrarPessoa();
    });

    function cadastrarPessoa() {
        contador = parseInt(localStorage.getItem('contador'));
        var id = parseInt(localStorage.getItem('contador'));
        var email = $("#emailcadastro").val();
        var senha = $("#senhacadastro").val();
        var nome = $("#nome").val();
        var telefone = $("#telefone").val();
        var cpf = $("#cpf").val();
        var cep = $("#cepPessoa").val();
        var rua = $("#ruaPessoa").val();
        var bairro = $("#bairroPessoa").val();
        var numero = $("#numCasaPessoa").val();
        var cidade = $("#cidadePessoa").val();
        var estado = $("#ufPessoa").val();
        var complemento = $("#complementoPessoa").val();
        var pessoaObj = new Pessoa(id, email, senha, nome, telefone, cpf, cep, rua, bairro, numero, cidade, estado, complemento);
        if (pessoaObj !== null) {
            console.log("Usuario cadastrado com sucesso!!!");
            localStorage.setItem(('pessoa' + contador), JSON.stringify(pessoaObj));
            window.location.href = "index.html";
            contador = contador + 1;
            localStorage.setItem('contador', JSON.stringify(contador));

        } else {
            console.log("Erro ao cadastarar Usuario!!!");
            return false;
        }
    }

});



