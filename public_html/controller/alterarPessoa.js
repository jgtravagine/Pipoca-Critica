$(document).ready(function () {
    $("#alterarPessoa").click(function (evt) {
        evt.preventDefault();
        var id = parseInt(pessoaObj.id);
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
        var pessoaObjAlterado = new Pessoa(id, email, senha, nome, telefone, cpf, cep, rua, bairro, numero, cidade, estado, complemento);

        if (pessoaObjAlterado) {
            localStorage.setItem('pessoa' + pessoaObj.id, JSON.stringify(pessoaObjAlterado));
            console.log("Usuário alterado com sucesso!!!");
            window.location.href = "index.html";
        } else {
            console.log("Erro ao alterar Usuário!!!");
            return false;
        }
    });
});