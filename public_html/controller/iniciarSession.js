
$('#logarPessoa').click(function (evt) {
    evt.preventDefault();
    logarPessoa();

});

function logarPessoa() {
    var emailLogin = $("#email").val();
    var senhaLogin = $("#pwd").val();
    if (localStorage.getItem('contador')) {
        var i = false;
        var contadorPessoas = 0;
        var maxPessoas = parseInt(localStorage.getItem('contador'));

        while (i === false && contadorPessoas < maxPessoas) {
            // Receber a string
            let pessoaString = localStorage.getItem('pessoa' + contadorPessoas);
            // Verificar se a string não é nula
            if (pessoaString !== null) {
                // Transformar em objeto novamente
                let pessoaObj = JSON.parse(pessoaString);
                if (emailLogin === pessoaObj.email && senhaLogin === pessoaObj.senha) {
                    i = true;
                    console.log("Pessoa localizada com sucesso!");
                    instaciarSession(pessoaObj);
                }
            }
            contadorPessoas++;
        }

        if (i === false) {
            console.log("Credenciais inválidas!");
            $("#loginInvalido").fadeIn();
        }
    }
}


function instaciarSession(pessoa) {
    var id = pessoa.id;
    var email = pessoa.email;
    var senha = pessoa.senha;
    var nome = pessoa.nome;
    var sessionObj = new Session(id, email, senha, nome);
    if (sessionObj) {
        localStorage.setItem('pessoaSession', JSON.stringify(sessionObj));
        window.location.href = "index.html";
        
        console.log("Session Instaciada com sucesso!!!");

    } else {
        console.log("Erro ao instaciar session!!!");
        return false;
    }
}



