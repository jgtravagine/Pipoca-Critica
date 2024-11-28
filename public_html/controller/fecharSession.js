
$("#fecharSession").click(function (evt) {
    evt.preventDefault();
    fecharSession();

});

function fecharSession() {
    if (localStorage.getItem('pessoaSession')) {
        localStorage.removeItem('pessoaSession');
        window.location.href = "index.html";
        console.log("Session fechada com sucesso!!!");
    }else{
        console.log("Problemas ao fechar sessão!!!")
    }
}



