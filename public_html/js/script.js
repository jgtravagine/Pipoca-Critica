
$(document).ready(function () {
    /* INCLUDES */
    var includeController = document.createElement('script');
    includeController.src = 'controller/cadastrarPessoa.js';
    document.head.appendChild(includeController);

    var includeModel = document.createElement('script');
    includeModel.src = 'model/Pessoa.js';
    document.head.appendChild(includeModel);


    var includeSession = document.createElement('script');
    includeSession.src = 'model/Session.js';
    document.head.appendChild(includeSession);


    var includeIniciarSession = document.createElement('script');
    includeIniciarSession.src = 'controller/iniciarSession.js';
    document.head.appendChild(includeIniciarSession);

    var fecharSessionController = document.createElement('script');
    fecharSessionController.src = 'controller/fecharSession.js';
    document.head.appendChild(fecharSessionController);

    /* CONTROLE DE SESSION */
    $("#logado").hide();
    $("#loginInvalido").hide();
    $("#closeAlertLoginInvalido").click(function () {
        $("#loginInvalido").fadeOut();
    });
    if (localStorage.getItem('pessoaSession')) {
        pessoaSessionString = localStorage.getItem('pessoaSession');
        pessoaSessionObj = JSON.parse(pessoaSessionString);
        $("#deslogado").hide();
        $("#logado").show();
        $("#logado").children("a").append(pessoaSessionObj.nomeSession);
    }


    /* INDEX */
    card = jQuery('#card0');
    $.getJSON("assets/db.json", function (result) {
        for (var i = 0; i <= 14; i++) {
            let x = Math.floor((Math.random() * 144) + 1);
            $('#card' + [i]).find("h4").append(result.movies[x].title);
            $('#card' + [i]).find("img").on('error', function () {
                $(this).attr('src', 'img/erroimg404.jpg');
            }).attr('src', result.movies[x].posterUrl);
        }

    });
    for (var cont = 1; cont <= 14; cont++) {
        card.clone().appendTo("#geral");
        card.attr('id', ('card' + cont));
    }
    /* FORMS */

    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 00000-0000');
    $('#cepPessoa').mask('00000-000');
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#ruaPessoa").val("");
        $("#bairroPessoa").val("");
        $("#cidadePessoa").val("");
        $("#ufPessoa").val("");
    }

    $("#emailcadastro").blur(function () {
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var email = $("#emailcadastro");
        if (!regex.test(email.val())) {
            email.val("");
        }


    });


    $("#senhacadastro").blur(function () {
        var regexx = /[0-9a-zA-Z$*&@#]{8,}/;
        var senha = $("#senhacadastro");
        if (!regexx.test(senha.val())) {
            senha.val("");
        }


    });

//Quando o campo cep perde o foco.
    $("#cepPessoa").blur(function () {

//Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep != "") {

//Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if (validacep.test(cep)) {

//Preenche os campos com "..." enquanto consulta webservice.
                $("#ruaPessoa").val("...");
                $("#bairroPessoa").val("...");
                $("#cidadePessoa").val("...");
                $("#ufPessoa").val("...");
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#ruaPessoa").val(dados.logradouro);
                        $("#bairroPessoa").val(dados.bairro);
                        $("#cidadePessoa").val(dados.localidade);
                        $("#ufPessoa").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                    }
                });
            } //end if.
            else {
//cep é inválido.
                limpa_formulário_cep();
            }
        } //end if.
        else {
//cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });


});
