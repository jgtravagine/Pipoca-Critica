$(document).ready(function () {
    if (localStorage.getItem('pessoaSession')) {
        let pessoaSessionString = localStorage.getItem('pessoaSession');
        let pessoaSessionObj = JSON.parse(pessoaSessionString);
    }


    let id = pessoaSessionObj.idPessoa;
    let pessoaString = localStorage.getItem('pessoa' + id);
    if (pessoaString) {
        pessoaObj = JSON.parse(pessoaString);
        if (id === pessoaObj.id) {
            console.log("Pessoa localizada com sucesso!");
            carregarDadosPessoa();
        }
    }

    function carregarDadosPessoa() {
        let id = parseInt(pessoaObj.id);
        $("#emailcadastro").val(pessoaObj.email);
        $("#senhacadastro").val(pessoaObj.senha);
        $("#nome").val(pessoaObj.nome);
        $("#telefone").val(pessoaObj.telefone);
        $("#cpf").val(pessoaObj.cpf);
        $("#cepPessoa").val(pessoaObj.cep);
        $("#ruaPessoa").val(pessoaObj.rua);
        $("#bairroPessoa").val(pessoaObj.bairro);
        $("#numCasaPessoa").val(pessoaObj.numero);
        $("#cidadePessoa").val(pessoaObj.cidade);
        $("#ufPessoa").val(pessoaObj.estado);
        $("#complementoPessoa").val(pessoaObj.complemento);
    }


});
