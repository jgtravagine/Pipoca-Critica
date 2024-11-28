$(document).ready(function () {
    $("#excluirPessoaBtn").click(function () {
       
        if (localStorage.getItem('pessoaSession')) {
            let pessoaSessionString = localStorage.getItem('pessoaSession');
            let pessoaSessionObj = JSON.parse(pessoaSessionString);
        }


        let id = pessoaSessionObj.idPessoa;
        localStorage.removeItem('pessoa' + id);
        if (!localStorage.getItem('pessoa' + id)) {

            console.log("Pessoa Excluida com sucesso!");
            excluirSessão();

        }
    });

    function excluirSessão() {
        if (localStorage.getItem('pessoaSession')) {
            localStorage.removeItem('pessoaSession');
            window.location.href = "index.html";
            console.log("Session fechada com sucesso!!!");
        } else {
            console.log("Problemas ao fechar sessão!!!");
        }

    }

});


